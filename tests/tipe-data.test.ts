describe("Data type", () => {
  it("should must declare", () => {
    // tipe data primitif, number, boolean, string

    // 'use strict' adalah fitur di ES5 yang mengaharuskan penulisan program menggunakan strict mode, maksudnya jika kita ingin menulis variabel ataupun fungsi harus di definisikan terlebih dahulu menggunakan kata var atau function.

    let name: string = "Rifqi Ziyad Imtinan";
    let balance: number = 100000;
    let isVip: boolean = true;

    console.info(name);
    console.info(balance);
    console.info(isVip);
  });
});
