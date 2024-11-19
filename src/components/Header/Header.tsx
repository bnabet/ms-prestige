import { Box, Button } from "@mui/material";

import msLogo from "src/assets/logo.png";

import { styles } from "./Header.styles";

function Header() {
  return (
    <Box component="header" sx={styles.header}>
      <Box sx={styles.headerInner}>
        <img src={msLogo} alt="Microsoft Logo" width="40" height="40" />

        <Box sx={{ display: "flex", gap: 4 }}>
          <Button variant="text" color="inherit" disableRipple>
            Accueil
          </Button>

          <Button variant="text" color="inherit" disableRipple>
            À propos de nous
          </Button>

          <Button variant="text" color="inherit" disableRipple>
            Nos services
          </Button>

          <Button variant="text" color="inherit" disableRipple>
            Nos véhicules
          </Button>

          <Button variant="text" color="inherit" disableRipple>
            Aide
          </Button>
        </Box>

        <Button variant="text" color="inherit" disableRipple>
          FR
        </Button>
      </Box>
    </Box>
  );
}

export default Header;
