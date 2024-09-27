import { Typography, Box, Chip } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import PersonIcon from "@mui/icons-material/Person";
import SpeedIcon from "@mui/icons-material/Speed";
import carImage from "src/assets/cars/car1.jpg";
import CheckIcon from "@mui/icons-material/Check";

import { styles } from "./CarsListElement.styles";

function CarsListElement() {
  return (
    <Grid2 className="CarsListElement" size={{ md: 12, lg: 6 }} sx={styles.element}>
      <Box sx={styles.elementInner}>
        <Box sx={{ ...styles.elementImage, backgroundImage: `url(${carImage})` }} />

        <Grid2 size={{ xs: 12, md: 6 }} sx={styles.elementContent}>
          <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
            Mercedes AMG Gt 63 S
          </Typography>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Chip label="4 places" color="info" size="small" icon={<PersonIcon />} />
            <Chip label="230 ch" color="info" size="small" icon={<SpeedIcon />} />
          </Box>

          <Typography sx={{ marginBottom: "auto" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint tempora deserunt
            adipisci similique! Quae reprehenderit illo fugit animi maiores, neque autem corrupti
            provident nihil eius dolorum porro fugiat accusamus.
          </Typography>

          <Typography variant="h2">
            199
            <Typography variant="h5" component="span">
              .99
            </Typography>
            <Typography component="span" color="grey.600" sx={{ ml: "4px", fontWeight: 500 }}>
              € /jour
            </Typography>
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <CheckIcon color="success" fontSize="small" />
            <Typography sx={{ fontSize: 12 }}>Kilométrage illimité disponible</Typography>
          </Box>
        </Grid2>
      </Box>
    </Grid2>
  );
}

export default CarsListElement;
