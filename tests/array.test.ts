describe("Array", () => {
  it("should same with javascript", () => {
    const names: string[] = ["Rifqi", "Ziyad", "Imtinan"];
    const values: number[] = [2, 4, 5];

    console.info(names);
    console.info(values);
  });

  it("should support readonly array", () => {
    // ReadonlyArray adalah agar array tiadk bisa diubah
    const hoobies: ReadonlyArray<string> = ["Membaca", "Bermain"];

    console.log(hoobies[0]);
  });

  it("should support tuple", () => {
    // Tuple adalah tipe data Array, yang panjang array dan juga tipe data di tiap index sudah ditentukan
    const person: readonly [string, string, number] = ["Rifqi", "Ziyad", 22];

    console.log(person);
  });
});
