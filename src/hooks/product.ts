import { useQuery } from "@tanstack/react-query";
import productService from "@/services/product";

export const useGetProductsQuery = (country: string) => {
  const { data, isLoading } = useQuery<Product.Items, void, string[]>({
    queryKey: ["product", "list", country],
    queryFn: () => productService.getProducts(country),
    select: (response) => {
      return Object.keys(response);
    },
  });

  return {
    products: data,
    isLoading,
  };
};
