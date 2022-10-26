import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";

export default function SimpleBackdrop() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Backdrop
        sx={{
          color: "#ff7100",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={!open}
        onClick={handleClose}
      >
        <CircularProgress
          size="10rem"
          thickness={5}
          color="inherit"
        />
      </Backdrop>
    </div>
  );
}
