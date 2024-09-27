import { Route, Routes } from "react-router-dom";
import { Container, Box } from "@mui/material";

import Home from "./pages/Home/Home";
import CarsList from "./pages/CarsList/CarsList";
import Header from "./components/Header/Header";

import "./App.css";

function App() {
  return (
    <Container disableGutters>
      <Header />

      <Box sx={{ p: "96px 0 48px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<CarsList />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </Box>
    </Container>
  );
}

export default App;
