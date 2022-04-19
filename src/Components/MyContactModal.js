import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import "../CSS/MyContactModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,
  bgcolor: "white",
  border: "3px solid #000",
  boxShadow: 24,
  p: 2,
};

function MyContactModal() {
  //useState for my model
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <Button 
          disableRipple
          className={"customContactModal"}
          onClick={handleOpen}> 
          Contact 
        </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <b style={{ display: "flex", justifyContent: "center" }}>
              Contact Info
            </b>
          </Typography>
          <Typography id="modal-modal-description" textAlign="center">
            <p>
              (864)-616-8677
            </p>
          </Typography>
          <Divider />
          <Typography id="modal-modal-description" textAlign="center">
            <p>
              Seanfitzgerald1996@gmail.com
            </p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default MyContactModal;
