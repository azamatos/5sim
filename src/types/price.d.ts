declare namespace Price {
  type Items = Record<string, Product>;

  type Product = Record<string, Country>;

  type Country = Record<string, Service>;

  type Service = {
    cost: number;
    count: number;
    rate?: number;
  };

  type Filter = {
    country?: string;
    product?: string;
  };

  type ConvertedItem = {
    product: string;
    country: string;
    service: string;
    rate?: number;
    costPercentage: number;
    cost: number;
    count: number;
  };
}
