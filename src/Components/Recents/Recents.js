import { Box, Grid } from "@mui/material";
import React from "react";
import cardImage from "../../Components/Images/image3.jpg";
import postImage2 from "../../Components/Images/image2.jpg";
import postImage1 from "../../Components/Images/image1.jpg";
import postImage3 from "../../Components/Images/image3.jpg";
import postImage4 from "../../Components/Images/image4.jpg";
import Card from "../Card/Card";
const Recents = () => {
  return (
    <Box>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
      <Grid item>
        <Card cardImage={postImage3} />
      </Grid>
      <Grid item md={6} xs={12}>
        <Card cardImage={postImage1} />
      </Grid>
      <Grid item md={6} xs={12}>
        <Card cardImage={postImage2} />
      </Grid>
      <Grid item md={6} xs={12}>
        <Card cardImage={postImage4} />
      </Grid>
      <Grid item md={6} xs={12}>
        <Card cardImage={cardImage} />
      </Grid>
      </Grid>
    </Box>
  );
};

export default Recents;
