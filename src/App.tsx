import { useMemo, useState } from "react";

// components
import DiagramListActions from "./components/diagram-list-actions";
import DiagramList from "./components/diagram-list";

// material ui
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

// hooks
import { useGetCountriesQuery } from "./hooks/country";
import { useGetProductsQuery } from "./hooks/product";
import { useGetPricesQuery } from "./hooks/price";

// styles
import "./App.css";

const initialFilters = {
  country: "",
  price: "",
  product: "whatsapp",
};

function App() {
  // states
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [availableFilter, setAvailableFilter] = useState(false);

  // queries
  const { countries } = useGetCountriesQuery();
  const { prices, isLoading, handleRefresh } = useGetPricesQuery({
    country: filters.country || undefined,
    product: filters.product,
  });
  const { products } = useGetProductsQuery(filters.country || "any");

  // handlers
  const handleFilter = (key: FilterType, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const toggleAvailableFilter = () => {
    setAvailableFilter(!availableFilter);
  };

  const filteredPrices = useMemo(() => {
    if (!prices) return [];

    // filtering if both are selected
    if (filters.price && availableFilter) {
      return prices.filter(
        (item) => item.cost <= parseInt(filters.price) && item.count > 0
      );
      // only if available filter clicked
    } else if (availableFilter) {
      return prices.filter((item) => item.count > 0);
      // only if price selected
    } else if (filters.price) {
      return prices.filter((item) => item.cost <= parseFloat(filters.price));
    }

    return prices;
  }, [prices, availableFilter, filters.price]);

  return (
    <Paper
      sx={{
        py: 6,
        px: 10,
        display: "flex",
        flexDirection: "column",
        gap: 5,
        width: 1024,
        minHeight: 300,
        maxHeight: "calc(100vh - 64px)",
      }}
    >
      <Box display="flex" gap={2} maxWidth={600}>
        <TextField
          size="small"
          select
          SelectProps={{
            MenuProps: {
              sx: { height: 300, width: 200 },
            },
          }}
          label="Сервис"
          value={filters.product}
          onChange={(event) => {
            handleFilter("product", event.target.value);
          }}
          sx={{ textAlign: "start", width: 200, textTransform: "capitalize" }}
        >
          {products?.map((product) => (
            <MenuItem
              key={product}
              value={product}
              sx={{ textTransform: "capitalize" }}
            >
              {product}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          size="small"
          select
          label="Страна"
          SelectProps={{
            MenuProps: {
              sx: { height: 300, width: 200 },
            },
          }}
          value={filters.country}
          onChange={(event) => {
            handleFilter("country", event.target.value);
          }}
          sx={{ textAlign: "start", width: 200 }}
        >
          {countries &&
            Object.entries(countries)?.map(([key, value]) => (
              <MenuItem className="overflow" key={key} value={key}>
                {value.text_en}
              </MenuItem>
            ))}
        </TextField>

        <TextField
          size="small"
          select
          label="Цена"
          value={filters.price}
          SelectProps={{
            MenuProps: {
              sx: { height: "300px", width: 200 },
            },
          }}
          onChange={(event) => {
            handleFilter("price", event.target.value);
          }}
          sx={{ textAlign: "start", width: 120 }}
        >
          {prices?.map((item, index) => (
            <MenuItem
              className="overflow"
              key={index}
              value={item.cost}
              sx={{ textTransform: "capitalize" }}
            >
              {item.cost} ₽
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <DiagramListActions
        isAvailableFilterOpen={availableFilter}
        toggleAvailableFilter={toggleAvailableFilter}
        handleRefreshList={handleRefresh}
      />
      <DiagramList
        isLoading={isLoading}
        items={filteredPrices}
        countries={countries}
      />
    </Paper>
  );
}

export default App;
