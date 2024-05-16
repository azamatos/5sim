import { FC } from "react";

// material ui
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

// components
import DiagramItem from "./diagram-item";

interface Props {
  items: Price.ConvertedItem[] | undefined;
  countries: Country.Items | undefined;
  isLoading: boolean;
}

const DiagramList: FC<Props> = ({ items, countries, isLoading }) => {
  return (
    <Stack
      className="perfect-scrollbar"
      gap={1}
      height="calc(100% - 200px)"
      flex={1}
      alignItems="flex-start"
      paddingRight={1}
    >
      {countries !== undefined &&
        items?.map((item, index) => (
          <DiagramItem
            key={index}
            item={{ ...item, country: countries[item.country]?.text_en }}
          />
        ))}

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flex={1}
        width="100%"
      >
        {isLoading && <CircularProgress size={50} color="info" />}
      </Box>
    </Stack>
  );
};

export default DiagramList;
