import { Route, Routes } from "react-router-dom";
import { Container, Box } from "@mui/material";

import "./App.css";

function App() {
  return (
    <Container disableGutters>
      <Box sx={{ p: "96px 0 48px" }}>
        <Routes>
          <Route path="/" element={<h1>Accueil</h1>} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </Box>
    </Container>
  );
}

export default App;
