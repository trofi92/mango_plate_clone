import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

const boxStyle = {
  textAlign: "center",
  justifyContents: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const btnStyle = {
  color: "#fff",
};

const modalStyle = {
  position: "fixed",
  overflowY: "auto",
};

export default function FavoritesListModal(props) {
  const favorites = useSelector((state) => state.favorites);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={btnStyle} onClick={handleOpen}>
        {favorites.favorites.length || 0}
      </Button>
      <Modal
        sx={modalStyle}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={boxStyle}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              {props.title}
            </Typography>

            <Typography
              component={"div"}
              id="transition-modal-description"
              sx={{ mt: 2 }}
            >
              {props.children}
              <hr />
              <button onClick={handleClose}>
                <h4>닫기</h4>
              </button>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
