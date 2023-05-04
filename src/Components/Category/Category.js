import React from "react";
import { Box, Stack, Typography, styled } from "@mui/material";
import kidsImage from "../../Components/Images/kidsImage.jpg";
import men from "../../Components/Images/men.jpg";
import women from "../../Components/Images/women.jpg";

const StyledBox = styled(Box)({
  // display:"flex",
  height: 200,
  width: "100%",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
});

const StyledTypography = styled(Typography)({
  //top,right,buttom,left
    margin: "18% 50px 25% 50px",
  backgroundColor: "white",
  opacity: "0.8",
  justifyContent:'center',
});

const Category = () => {
  return (
    <Box>
      <Stack direction={{xs:'column',sm:'row'}} 
      spacing={{xs:1, sm:2, md:4}}
       mt={5}
       
       >
        <StyledBox sx={{ backgroundImage: `url(${kidsImage})` }}>
          <StyledTypography align="center" variant="h3">
            Kids
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${men})` }}>
          <StyledTypography align="center" variant="h3">
            Men
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${women})` }}>
          <StyledTypography align="center" variant="h3">
            Women
          </StyledTypography>
        </StyledBox>
      </Stack>
    </Box>
  );
};

export default Category;
