import { Employee, Manager } from "../src/emplyee";
import { Person } from "../src/person";
import { Seller } from "../src/seller";

describe("Interface", () => {
  it("should support in typescript", () => {
    const seller: Seller = {
      id: 1,
      name: "Toko ABC",
      nib: "12312321",
      npwp: "23123123",
    };

    seller.name = "Toko Eko";
    // seller.nib = "2222";  // tidak bisa karena "nib" readonly

    console.info(seller);
  });

  it("should support function interface", () => {
    interface addFunction {
      (value1: number, value2: number): number;
    }

    const add: addFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 2)).toBe(4);
  });

  it("should support indexable interface", function () {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Eko", "Kurniawan", "Khannedy"];
    console.info(names);
  });

  it("should support indexable interface for non number index", function () {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "Eko",
      address: "Indonesia",
    };

    expect(dictionary["name"]).toBe("Eko");
    expect(dictionary["address"]).toBe("Indonesia");
  });

  it("should support extends interface", function () {
    // Interface bisa melanjutkan (extends) ke Interface lain
    // Secara otomatis attribute Interface yang dilanjutkan dimiliki juga oleh interface tersebut
    // Ini membuat kita lebih mudah ketika membuat tipe data yang kompleks

    const employee: Employee = {
      id: "1",
      name: "Eko",
      division: "IT",
    };

    console.info(employee);

    const manager: Manager = {
      id: "2",
      name: "Kurniawan",
      division: "IT",
      numberOfEmployees: 10,
    };

    console.info(manager);
  });

  it("should support function in interface", function () {
    const person: Person = {
      name: "Rifqi",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    console.info(person.sayHello("Budi"));
  });

  it("should support intersection types", function () {
    // Intersection merupakan cara membuat tipe data baru dengan cara menggabungkan dua tipe data lain
    // Hal ini sangat cocok ketika kita tidak bisa melakukan extends pada Interface
    // Kita bisa membuat type dengan menggunakan kata kunci & (dan)

    interface HasName {
      name: string;
    }

    interface HasId {
      id: string;
    }

    type Domain = HasId & HasName;

    const domain: Domain = {
      id: "1",
      name: "Eko",
    };

    console.info(domain);
  });

  it("should support type assertions", function () {
    // untuk mengubah tipe data
    const person: any = {
      name: "Eko",
      age: 30,
    };

    const person2: Person = person as Person;
    // person2.sayHello("Budi");

    console.info(person2);
  });
});
