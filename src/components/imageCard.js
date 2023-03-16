import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Paper,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function ImageCard({ imageUrl, title }) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="300" image={imageUrl} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ImageCard;

ImageCard.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
};
