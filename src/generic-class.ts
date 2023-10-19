class List<T> {
  // maksud daru "T" adalah tipe datanya sesuai dengan argumen yg diinput
  // untuk deklarasi tidak hanya T tetapi bisa menggunakan yang lain
  private data: T[];

  constructor(...elements: T[]) {
    this.data = elements;
  }

  add(element: T): void {
    this.data.push(element);
  }

  addMultiple(...element: T[]): void {
    this.data.push(...element);
  }

  getAll(): T[] {
    return this.data;
  }
}

let numbers = new List<number>(1, 2, 3);
numbers.add(3);
numbers.addMultiple(3, 65, 56, 4);
console.info(numbers.getAll());
