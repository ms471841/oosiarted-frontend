import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  TextField,
  Typography,
} from "@mui/material";

const CreatePost = () => {
  const server = `https://oopsiarted.onrender.com`;
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);

    const response = await fetch(`${server}/createpost`, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("Image uploaded successfully");
    } else {
      console.error("Failed to upload image");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 15,
      }}
    >
      <Card sx={{ height: "500px" }}>
        <CardContent>
          <Typography sx={{ fontWeight: "bold" }}>Create Post</Typography>
          <br />

          <Divider />
          <br />

          <form onSubmit={handleSubmit}>
            <TextField
              label="Title"
              fullWidth
              type="text"
              value={title}
              onChange={handleTitleChange}
            />
            <br />
            <br />

            <TextField type="file" onChange={handleFileChange} />

            <br />
            <br />

            <button fullWidth type="submit">
              Submit
            </button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};
export default CreatePost;
