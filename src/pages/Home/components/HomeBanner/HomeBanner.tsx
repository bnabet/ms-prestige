import { Box, Typography, Button } from "@mui/material";

import homeCar from "src/assets/home-car-3.jpg";

const styles = {
  banner: {
    backgroundImage: `url(${homeCar})`,
    backgroundSize: "cover",
    backgroundPosition: "0 80%",
    width: "100%",
    height: 680,
    borderRadius: 2,
    display: "flex",
    flexDirection: "column",
  },
  selectOption: {
    display: "flex",
    flexDirection: "column",
    width: "calc(25% - 62px)",
    borderRight: "1px solid #aaaaaa",
    paddingRight: 4,
    marginRight: 4,
    color: "#a9977a",
  },
  selectOptionDetail: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "100%",
    color: "text.primary",
  },
};

function HomeBanner() {
  return (
    <Box className="HomeBanner" sx={styles.banner}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          alignItems: "flex-start",
          padding: "48px 80px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            "fontSize": 48,
            "margin": 0,
            "lineHeight": "70px",
            "> p": { margin: 0 },
          }}
        >
          <p>Location de voiture</p>
          <p>
            avec{" "}
            <Typography
              component="span"
              sx={{
                color: "primary.main",
                fontFamily: "Merriweather",
                fontSize: 48,
                fontWeight: 600,
              }}
            >
              chauffeur
            </Typography>
          </p>
        </Typography>

        <Box>
          <Typography
            style={{ color: "white", fontWeight: 500, width: "300px", marginBottom: "32px" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ea, veritatis asperiores
            facere tempora ratione laudantium ipsa, voluptatum aspernatur molestiae nulla.
          </Typography>

          <Button variant="contained" sx={{ minWidth: 120 }} size="large">
            Nos services
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: "auto",
          padding: "48px 80px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            background: "rgba(255, 255, 255, 0.06)",
            border: "1px solid #666",
            borderRadius: 2,
            paddingX: 4,
            paddingY: 3,
          }}
        >
          <Box sx={styles.selectOption}>
            <div>Lieu de prise en charge</div>
            <Box sx={styles.selectOptionDetail}>Depuis: adresse, aéroport, hôtel, ...</Box>
          </Box>
          <Box sx={styles.selectOption}>
            <div>Lieu de destination</div>
            <Box sx={styles.selectOptionDetail}>Distance, horaire, forfait, ...</Box>
          </Box>
          <Box sx={styles.selectOption}>
            <div>Date du rendez-vous</div>
            <Box sx={styles.selectOptionDetail}>15 juillet 2023</Box>
          </Box>
          <Box sx={{ ...styles.selectOption, border: 0 }}>
            <div>Heure du rendez-vous</div>
            <Box sx={styles.selectOptionDetail}>12:30</Box>
          </Box>
          <Box sx={{ width: 120 }}>
            <Button variant="contained" size="large" sx={{ width: "100%" }}>
              Réserver
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HomeBanner;
