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
import PropTypes from "prop-types";

function ImageCard({ key, imageUrl, title }) {
  return (
    <Box key={key}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={imageUrl}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
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
