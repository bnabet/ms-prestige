import { Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2";

import { useGetCars } from "src/services/useGetCars";

import CarsListElement from "./components/CarsListElement";

import { Car } from "src/models/Car";

function CarsList() {
  const { data: cars } = useGetCars();

  return (
    <Container className="CarsList">
      <Typography variant="h1" sx={{ mb: 3 }}>
        Véhicules
      </Typography>

      <Grid2 container spacing={1}>
        {cars?.map((car: Car) => (
          <CarsListElement key={car.id} car={car} />
        ))}
      </Grid2>
    </Container>
  );
}

export default CarsList;
