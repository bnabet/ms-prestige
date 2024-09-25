import { Box, Button } from "@mui/material";
import { DirectionsCar } from "@mui/icons-material";
import { Face } from "@mui/icons-material";
import { HelpOutline } from "@mui/icons-material";

import msLogo from "src/assets/logo.png";

import { styles } from "./Header.styles";

function Header() {
  return (
    <Box component="header" sx={styles.header}>
      <Box sx={styles.headerInner}>
        <img src={msLogo} alt="Microsoft Logo" width="40" height="40" />

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="text" color="inherit" startIcon={<DirectionsCar />} disableRipple>
            Mes réservations
          </Button>

          <Button variant="text" color="inherit" startIcon={<Face />} disableRipple>
            Mon compte
          </Button>

          <Button variant="text" color="inherit" startIcon={<HelpOutline />} disableRipple>
            Aide
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
