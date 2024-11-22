import { Typography, Box, Chip } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import PersonIcon from "@mui/icons-material/Person";
import SpeedIcon from "@mui/icons-material/Speed";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

import { getImageUrl } from "src/utils/imageLoader";

import { styles } from "./CarsListElement.styles";

import { Car } from "src/models/Car";
import { Link } from "react-router-dom";

interface CarsListElementProps {
  car: Car;
}

function CarsListElement({ car }: CarsListElementProps) {
  return (
    <Grid2 className="CarsListElement" size={{ md: 12, lg: 6 }} sx={styles.element}>
      <Link to={`/car/${car._id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <Box sx={styles.elementInner}>
          <Box
            sx={{
              ...styles.elementImage,
              backgroundImage: `url(${getImageUrl(car.images[0])})`,
            }}
          />

          <Grid2 size={{ xs: 12, md: 6 }} sx={styles.elementContent}>
            <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
              {car.brand} {car.model} {car.trimLevel}
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              <Chip label={`${car.seats} places`} color="info" size="small" icon={<PersonIcon />} />
              <Chip label={`${car.power} ch`} color="info" size="small" icon={<SpeedIcon />} />
            </Box>

            <Typography sx={{ marginBottom: "auto" }}>{car.description}</Typography>

            <Typography variant="h2">
              {car.rentalPricePerDay.toString().split(".")[0]}
              <Typography variant="h5" component="span">
                .{car.rentalPricePerDay.toString().split(".")[1]}
              </Typography>
              <Typography component="span" color="grey.600" sx={{ ml: "4px", fontWeight: 500 }}>
                € /jour
              </Typography>
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
              {car.unlimitedMileage ? (
                <CheckIcon color="success" fontSize="small" />
              ) : (
                <CloseIcon color="error" fontSize="small" />
              )}
              <Typography sx={{ fontSize: 12 }}>
                Kilométrage illimité {!car.unlimitedMileage && "non"} disponible
              </Typography>
            </Box>
          </Grid2>
        </Box>
      </Link>
    </Grid2>
  );
}

export default CarsListElement;
