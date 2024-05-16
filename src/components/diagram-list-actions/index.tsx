import { FC } from "react";

// material ui
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

// icons
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface Props {
  isAvailableFilterOpen: boolean;
  toggleAvailableFilter: () => void;
  handleRefreshList: () => void;
}

const DiagramListActions: FC<Props> = ({
  handleRefreshList,
  isAvailableFilterOpen,
  toggleAvailableFilter,
}) => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" gap={2}>
        <Box
          display="flex"
          gap={1}
          alignItems="center"
          px={2}
          sx={{ backgroundColor: "aquamarine", borderRadius: 6, height: 36 }}
        >
          <MarkEmailReadOutlinedIcon />
          <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
            Доставка СМС (%)
          </Typography>
        </Box>
        <Box
          display="flex"
          gap={1}
          alignItems="center"
          px={2}
          sx={{ backgroundColor: "greenyellow", borderRadius: 6, height: 36 }}
        >
          <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
            Цена номера (₽)
          </Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <Button
          onClick={toggleAvailableFilter}
          sx={{
            backgroundColor: isAvailableFilterOpen ? "#1563C7" : "#3ea6ff99",
            textTransform: "inherit",
            borderRadius: 6,
            marginRight: 2,
            height: 36,
            display: "flex",
            gap: 2,
            px: 2,
            "&:hover": {
              backgroundColor: "#1563C7",
            },
          }}
        >
          <CheckCircleIcon sx={{ color: "#f1f1f1" }} />
          <Typography sx={{ color: "#f1f1f1", paddingRight: 1 }}>
            В наличии
          </Typography>
        </Button>
        <IconButton
          onClick={handleRefreshList}
          sx={{
            backgroundColor: "#E4F1F9",
            borderRadius: 3,
            marginRight: 2.2,
          }}
        >
          <RefreshOutlinedIcon sx={{ color: "#1563C7" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default DiagramListActions;
