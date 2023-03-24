import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  List,
} from "@mui/material";

import axios from "axios";
import { useEffect, useState } from "react";
import ImageCard from "../components/imageCard";

const DashBoard = () => {
  const server = `https://oopsiarted.onrender.com`;
 
  
  const [imageList, setImageList] = useState([]);
  async function fetchd() {
    const config = {
      withCredentials: true,
    };
    let data = await axios.get(`${server}/getpost`, config);
    console.log(data.data.posts);
    setImageList(data.data.posts);
  }
  useEffect(() => {
    fetchd();
  }, []);
  const gridSpacing = "15px";
  return { imageList } ? (
    <Box sx={{ m: "50px" }}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            {imageList.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <ImageCard  key={index} title={item.title} imageUrl={item.url} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  ) : (
    <h1>UYGFDUVFDL</h1>
  );
};

export default DashBoard;
