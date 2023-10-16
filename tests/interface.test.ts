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
});
