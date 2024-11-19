import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup, { toggleButtonGroupClasses } from "@mui/material/ToggleButtonGroup";
import Divider from "@mui/material/Divider";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    "background": "none",
    "border": 0,
    "borderRadius": theme.shape.borderRadius,
    "color": theme.palette.grey[700],
    "textTransform": "none",
    "padding": "6px 18px",

    "&:hover": {
      color: theme.palette.text.primary,
      background: "none",
    },

    "&:focus": {
      border: "none",
      outline: "none",
      color: theme.palette.primary.main,
    },

    "&:active": {
      background: "none",
    },
  },
  [`& .${toggleButtonGroupClasses.selected}`]: {
    background: "none",
    color: theme.palette.primary.main,
  },
}));

export default function CarsListButtonGroup() {
  const [category, setCategory] = useState("all");

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newCategory: string) => {
    setCategory(newCategory);
  };

  return (
    <Box>
      <StyledToggleButtonGroup size="small" value={category} exclusive onChange={handleAlignment}>
        <ToggleButton disableFocusRipple disableRipple value="all">
          Tous
        </ToggleButton>

        <Divider
          flexItem
          orientation="vertical"
          sx={{ borderRight: "1px solid #444", mx: 1, my: 1 }}
        />

        <ToggleButton disableFocusRipple disableRipple value="luxe">
          Luxe
        </ToggleButton>

        <Divider
          flexItem
          orientation="vertical"
          sx={{ borderRight: "1px solid #444", mx: 1, my: 1 }}
        />

        <ToggleButton disableFocusRipple disableRipple value="business">
          Business
        </ToggleButton>

        <Divider
          flexItem
          orientation="vertical"
          sx={{ borderRight: "1px solid #444", mx: 1, my: 1 }}
        />

        <ToggleButton disableFocusRipple disableRipple value="suv">
          Suv
        </ToggleButton>
      </StyledToggleButtonGroup>
    </Box>
  );
}
