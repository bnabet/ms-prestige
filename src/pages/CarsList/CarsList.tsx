import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2";

import { useGetCars } from "src/services/useGetCars";

import CarsListButtonGroup from "./components/CarsListButtonGroup";
import CarsListElement from "./components/CarsListElement";

import { Car } from "src/models/Car";

function CarsList() {
  const { data: cars } = useGetCars();

  return (
    <Box className="CarsList">
      <Typography variant="h1" sx={{ mb: 3 }}>
        Véhicules
      </Typography>

      <Box sx={{ display: "flex", gap: 3, alignItems: "flex-end", mb: 6 }}>
        <Typography sx={{ color: "grey.700", maxWidth: 600, mr: "auto" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae iste maxime atque doloribus
          molestiae, sunt ipsum, cumque architecto unde sed eius numquam inventore.
        </Typography>

        <CarsListButtonGroup />
      </Box>

      <Grid2 container spacing={1} sx={{ width: "calc(100% + 16px)", marginLeft: "-8px" }}>
        {cars?.map((car: Car) => (
          <CarsListElement key={car._id} car={car} />
        ))}
      </Grid2>
    </Box>
  );
}

export default CarsList;
