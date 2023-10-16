describe("Optional Parameter", function () {
  it("should support null and undefined", function () {
    // -Saat kita menggunakan ? pada variabel atau parameter, secara otomatis kita bisa mengirim data undefined
    // - Tapi kadang, kadang, ada kasus kita juga ingin mengirim data null, pada kasus ini kita juga bisa menggunakan tipe data null

    function sayHello(name?: string | null) {
      if (name) {
        console.info(`Hello ${name}`);
      } else {
        console.info("Hello");
      }
    }

    sayHello("Eko");
    const name: string | undefined = undefined;
    sayHello(name);
    sayHello(null);
  });
});
