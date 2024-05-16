import { FC } from "react";

// material ui
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

// icons
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

interface Props {
  item: Price.ConvertedItem;
}

const DiagramItem: FC<Props> = ({ item }) => (
  <Box width="100%" display="flex" gap={8} alignItems="center">
    <Stack gap={1.5} alignItems="flex-start" width={240}>
      <Typography fontWeight={700} textAlign="start">
        {item.country}
      </Typography>
      <Box display="flex" gap={2}>
        <Typography fontSize={14}>{item.service}</Typography>
        <Typography
          fontSize={14}
          sx={{
            color: item.count > 10 ? "green" : "red",
          }}
        >
          {item.count} шт
        </Typography>
      </Box>
    </Stack>
    <Box
      display="flex"
      width="100%"
      alignItems="center"
      sx={{
        border: "1px solid #ccc",
        borderTopRightRadius: 28,
        borderBottomRightRadius: 28,
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        py: 1,
        gap: 1,
      }}
    >
      <Stack width="100%" justifyContent="center" gap={1}>
        <Box display="flex" gap={1} alignItems="center">
          <Box
            sx={{
              height: 10,
              width: `${item.rate ?? 0}%`,
              backgroundColor: "aquamarine",
              borderTopRightRadius: 4,
              borderBottomRightRadius: 4,
            }}
          />
          <Typography width={100} fontWeight={600}>
            {item.rate ?? 0}%
          </Typography>
        </Box>
        <Box display="flex" gap={1} alignItems="center">
          <Box
            sx={{
              height: 10,
              width: `${item.costPercentage}%`,
              backgroundColor: "yellowgreen",
              borderTopRightRadius: 4,
              borderBottomRightRadius: 4,
            }}
          />
          <Typography width={100} fontWeight={600}>
            {item.cost} ₽
          </Typography>
        </Box>
      </Stack>
      <IconButton
        sx={{
          backgroundColor: "#3ea6ff",
          width: 40,
          height: 40,
          borderRadius: 3,
          marginRight: 2,
          "&:hover": {
            backgroundColor: "#1563C7",
          },
        }}
      >
        <ShoppingCartOutlinedIcon sx={{ color: "#f1f1f1" }} />
      </IconButton>
    </Box>
  </Box>
);

export default DiagramItem;
