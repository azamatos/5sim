import { useQuery } from "@tanstack/react-query";
import priceService from "@/services/price";

export const useGetPricesQuery = (params: Price.Filter) => {
  const { data, isLoading, refetch } = useQuery<
    Price.Items,
    void,
    Price.ConvertedItem[]
  >({
    queryKey: ["price", "list", params],
    queryFn: () => priceService.getPrices(params),
    gcTime: 0,
    select: (response): Price.ConvertedItem[] => {
      const items: Price.ConvertedItem[] = [];
      Object.entries(response)?.forEach(([product, productValue]) => {
        return Object.entries(productValue)?.forEach(
          ([country, countryValue]) => {
            const services = Object.entries(countryValue);
            const maxPrice = Math.max(
              ...services.map(([_, value]) => value.cost)
            );

            return services?.forEach(([service, serviceValue]) => {
              // if country filter selected response starts with country
              // if only product filter selected the response starts with product
              items.push({
                product: params.country ? country : product,
                country: params.country ? product : country,
                service,
                costPercentage: (serviceValue.cost / maxPrice) * 100,
                ...serviceValue,
              });
            });
          }
        );
      });

      return items;
    },
  });

  return {
    prices: data,
    isLoading,
    handleRefresh: refetch,
  };
};
