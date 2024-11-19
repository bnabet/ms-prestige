import { Route, Routes } from "react-router-dom";
import { Container, Box } from "@mui/material";

import Home from "./pages/Home/Home";
import CarsList from "./pages/CarsList/CarsList";
import CarInfos from "./pages/CarInfos/CarInfos";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";

import "./App.css";

function App() {
  return (
    <Container>
      <Header />

      <Box sx={{ p: "96px 0 48px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<CarsList />} />
          <Route path="/car/:id" element={<CarInfos />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </Box>

      <Modal />
    </Container>
  );
}

export default App;
