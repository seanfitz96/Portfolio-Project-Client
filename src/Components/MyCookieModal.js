import React from "react";
import Modal from "@mui/material/Modal";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../CSS/MyCookieModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "lightskyblue",
  border: "3px solid #000",
  boxShadow: 24,
  p: 2,
};

function MyCookieModal() {
  //useState for my model
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton 
        className={"customCookieModal"}
        color="inherit" 
        aria-label="HomeIcon">
        <HelpOutlineIcon onClick={handleOpen} />
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            <b style={{display:"flex", justifyContent:"center" }}>
              What Is This Page?</b>
          </Typography>
          <Typography id="modal-modal-description" textAlign="center">
            <p>
            Elle's Cookies was made as a simple <b>C.R.U.D 
            (Create. Read. Update. Delete)</b> Full-Stack project to 
            display some programming skills that I possess. A user is 
            able to add/edit/delete an image, name, price, and count 
            to the database of cookies. 
            </p>
          </Typography>
            <Typography id="modal-modal-description" textAlign="center">
              <p>
              <u><b>TIP:</b></u>
              &nbsp;For the “Image URL” TextBox, go to Google 
              and <b>right click</b> on any image you wish to use. Then 
              click on the “Copy image address” button. Paste that 
              address into the “Image URL” TextBox and the image 
              you have selected will be used.
              </p>
            </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default MyCookieModal;
