import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ImageCard from "../components/imageCard";

const DashBoard = () => {
  const server = ``;
  // const imageList = [
  //   {
  //     title: "Image 1",
  //     image: "https://picsum.photos/200",
  //   },
  //   { title: "Image 2", image: "https://picsum.photos/200" },
  //   { title: "Image 3", image: "https://picsum.photos/200" },
  //   { title: "Image 3", image: "https://picsum.photos/200" },
  //   { title: "Image 3", image: "https://picsum.photos/200" },
  //   { title: "Image 3", image: "https://picsum.photos/200" },
  //   { title: "Image 3", image: "https://picsum.photos/200" },
  // ];
  const [imageList, setImageList] = useState([]);
  useEffect(() => {
    let data = axios.get(`${server}/getpost`);
    console.log(data);
    setImageList(data.posts);
  }, [setImageList, server]);
  const gridSpacing = "15px";
  return { imageList } ? (
    <Box sx={{ m: "10px" }}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            {imageList &&
              imageList.map((item, index) => (
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <ImageCard title={item.title} imageUrl={item.imageUrl} />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  ) : (
    <h1>Loading...</h1>
  );
};

export default DashBoard;
