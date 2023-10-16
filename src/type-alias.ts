export type ID = string | number;

export type Category = {
  id: ID;
  name: string;
  description?: string; // "?" artinya property optional (boleh diisi boleh tidak)
};

export type Product = {
  id: ID;
  name: string;
  price: number;
  category: Category;
  description?: string; // "?" artinya property optional (boleh diisi boleh tidak)
};
