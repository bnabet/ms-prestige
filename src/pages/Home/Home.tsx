import { Box, Typography } from "@mui/material";

import HomeBanner from "./components/HomeBanner/HomeBanner";
import CarsList from "../CarsList/CarsList";

import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import WcOutlinedIcon from "@mui/icons-material/WcOutlined";
import CardTravelOutlinedIcon from "@mui/icons-material/CardTravelOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import service1 from "src/assets/service-1.jpg";
import service2 from "src/assets/service-2.jpg";
import service3 from "src/assets/service-3.jpg";

function Home() {
  return (
    <Box className="Home" sx={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <HomeBanner />

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h1" sx={{ mb: 3 }}>
          Nos services
        </Typography>

        <Typography sx={{ mb: 6, color: "grey.700" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae iste maxime atque doloribus
          molestiae, sunt ipsum, cumque architecto unde sed eius numquam inventore quos maiores,
          provident ipsam. Nobis, alias ipsum! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Obcaecati modi culpa nemo corporis assumenda placeat omnis necessitatibus dolorem
          eligendi, accusamus quasi ratione architecto temporibus sint nobis totam ipsum consequatur
          inventore?
        </Typography>

        <Box sx={{ display: "flex", gap: 3, mb: 6 }}>
          <Box sx={{ flex: 1, borderRadius: 2, overflow: "hidden", lineHeight: 0 }}>
            <img src={service2} width="auto" height="300" />
          </Box>

          <Box sx={{ flex: 1, borderRadius: 2, overflow: "hidden", lineHeight: 0 }}>
            <img src={service1} width="auto" height="300" />
          </Box>

          <Box sx={{ flex: 1, borderRadius: 2, overflow: "hidden", lineHeight: 0 }}>
            <img src={service3} width="auto" height="300" />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 6,
            background: "#2b2824",
            borderRadius: 2,
            padding: 4,
          }}
        >
          <Box sx={{ display: "flex", flex: 1, flexDirection: "column", gap: 3 }}>
            <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
              <WcOutlinedIcon sx={{ fontSize: 56 }} />
              <Typography variant="h6" sx={{ color: "white" }}>
                Mariages et autres évènements
              </Typography>
            </Box>

            <Typography sx={{ color: "grey.700", fontWeight: 500 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ea, veritatis
              asperiores facere tempora ratione laudantium ipsa.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flex: 1, flexDirection: "column", gap: 3 }}>
            <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
              <FlightTakeoffIcon sx={{ fontSize: 56 }} />
              <Typography variant="h6" sx={{ color: "white" }}>
                Prise en charge à l'aéroport
              </Typography>
            </Box>

            <Typography sx={{ color: "grey.700", fontWeight: 500 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ea, veritatis
              asperiores facere tempora ratione laudantium ipsa.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flex: 1, flexDirection: "column", gap: 3 }}>
            <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
              <CardTravelOutlinedIcon sx={{ fontSize: 56 }} />
              <Typography variant="h6" sx={{ color: "white" }}>
                Rendez-vous professionnels
              </Typography>
            </Box>

            <Typography sx={{ color: "grey.700", fontWeight: 500 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ea, veritatis
              asperiores facere tempora ratione laudantium ipsa.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flex: 1, flexDirection: "column", gap: 3 }}>
            <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
              <MapOutlinedIcon sx={{ fontSize: 56 }} />
              <Typography variant="h6" sx={{ color: "white" }}>
                Déplacements personnels
              </Typography>
            </Box>

            <Typography sx={{ color: "grey.700", fontWeight: 500 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ea, veritatis
              asperiores facere tempora ratione laudantium ipsa.
            </Typography>
          </Box>
        </Box>
      </Box>

      <CarsList />
    </Box>
  );
}

export default Home;
