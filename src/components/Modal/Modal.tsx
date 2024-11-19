import { Typography, Box, Chip } from "@mui/material";
import Modal from "@mui/material/Modal";
import PersonIcon from "@mui/icons-material/Person";
import SpeedIcon from "@mui/icons-material/Speed";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

import { useModalContext } from "src/context/hooks/useModalContext";
import { Car } from "src/models/Car";

const styles = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  elementImage: {
    display: "flex",
    width: "50%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  elementContent: {
    display: "flex",
    width: "50%",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 2,
    padding: 3,
  },
};

export default function BasicModal() {
  const { modal, closeModal } = useModalContext<Car>();

  if (!modal.content) {
    return null;
  }

  return (
    <Modal open={modal.isOpen} onClose={closeModal}>
      <Box sx={styles.modal}>
        <Box
          sx={{
            ...styles.elementImage,
            backgroundImage: `url(src/assets/cars/${modal.content.imagesUrls[0]}.jpg)`,
          }}
        />

        <Box sx={styles.elementContent}>
          <Typography variant="h3" sx={{ textTransform: "uppercase" }}>
            {modal.content.brand} {modal.content.model} {modal.content.trimLevel}
          </Typography>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Chip
              label={`${modal.content.seats} places`}
              color="info"
              size="small"
              icon={<PersonIcon />}
            />
            <Chip
              label={`${modal.content.power} ch`}
              color="info"
              size="small"
              icon={<SpeedIcon />}
            />
          </Box>

          <Typography sx={{ marginBottom: "auto" }}>{modal.content.description}</Typography>

          <Typography variant="h2">
            {modal.content.rentalPricePerDay.toString().split(".")[0]}
            <Typography variant="h5" component="span">
              .{modal.content.rentalPricePerDay.toString().split(".")[1]}
            </Typography>
            <Typography component="span" color="grey.600" sx={{ ml: "4px", fontWeight: 500 }}>
              € /jour
            </Typography>
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {modal.content.unlimitedMileage ? (
              <CheckIcon color="success" fontSize="small" />
            ) : (
              <CloseIcon color="error" fontSize="small" />
            )}
            <Typography sx={{ fontSize: 12 }}>
              Kilométrage illimité {!modal.content.unlimitedMileage && "non"} disponible
            </Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
