import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Paper,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Box,
} from "@mui/material";
import { Modal, Backdrop, Fade, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";

function ImageCard({ key, imageUrl, title }) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box key={key}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={imageUrl}
            alt={title}
            onClick={() => setOpen(true)}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          closeAfterTransition
          // BackdropComponent={Backdrop}
          // BackdropProps={{ timeout: 500 }}
        >
          <Fade in={open}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <div style={{ position: "relative" }}>
                <IconButton
                  color="black"
                  size="large"
                  style={{ position: "absolute", top: 0, right: 0 }}
                  onClick={handleClose}
                >
                  <CloseIcon />
                </IconButton>
                <img
                  src={imageUrl}
                  alt={title}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </Fade>
        </Modal>
      </Card>
    </Box>
  );
}

export default ImageCard;

ImageCard.propTypes = {
  key: PropTypes.number,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
};
