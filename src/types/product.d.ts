declare namespace Product {
  type Items = Record<string, Value>;

  type Value = {
    Category: string;
    Qty: number;
    Price: number;
  };
}
