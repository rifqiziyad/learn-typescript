describe("any", () => {
  it("should support in typescript", () => {
    // tipe data any bisa mengubah tipe data dan menambahkan data, sama seperti variable js biasa
    const person: any = {
      id: 1,
      name: "Rifqi",
      age: 30,
    };

    console.log(person.age);

    person.address = "Ciputat";
    person.age = "1";

    console.log(person);
  });
});
