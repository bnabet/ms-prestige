import { Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2";

import CarsListElement from "./components/CarsListElement";

function CarsList() {
  return (
    <Container className="CarsList">
      <Typography variant="h1" sx={{ mb: 3 }}>
        Véhicules
      </Typography>

      <Grid2 container spacing={1}>
        <CarsListElement />
        <CarsListElement />
        <CarsListElement />
      </Grid2>
    </Container>
  );
}

export default CarsList;
