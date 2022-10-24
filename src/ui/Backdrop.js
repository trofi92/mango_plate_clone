// import Backdrop from "@mui/material/Backdrop";
// import CircularProgress from "@mui/material/CircularProgress";
// import { useState } from "react";

// export default function SimpleBackdrop() {
//   const [open, setOpen] = useState(false);
//   const handleClose = () => {
//     setOpen(!open);
//   };

//   return (
//     <div>
//       <Backdrop
//         sx={{
//           color: "#ff7100",
//           zIndex: (theme) => theme.zIndex.drawer + 1,
//         }}
//         open={!open}
//         onClick={handleClose}
//       >
//         <CircularProgress
//           size="10rem"
//           thickness={5}
//           color="inherit"
//         />
//       </Backdrop>
//     </div>
//   );
// }

import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

export default function SimpleBackdrop() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button onClick={handleToggle}>Show backdrop</Button>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={true}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
