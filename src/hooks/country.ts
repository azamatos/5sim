import { useQuery } from "@tanstack/react-query";
import countryService from "@/services/country";

export const useGetCountriesQuery = () => {
  const { data, isLoading } = useQuery<Country.Items>({
    queryKey: ["country", "list"],
    queryFn: () => countryService.getCountries(),
  });

  return {
    countries: data,
    isLoading,
  };
};
