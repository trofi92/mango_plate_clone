import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import { useSelector, useDispatch } from "react-redux";
import { close, open } from "../features/modal/modalSlice";
import CloseIcon from "@mui/icons-material/Close";

export default function TransitionAlerts(props) {
  const isOpen = useSelector((state) => state.isOpen);
  const dispatch = useDispatch();
  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={!isOpen}>
        <Alert
          variant={props.variant}
          severity={props.severity}
          action={
            <IconButton
              onClick={() => console.log(close())}
              aria-label="close"
              color="inherit"
              size="small"
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {props.desc}
        </Alert>
      </Collapse>
    </Box>
  );
}
