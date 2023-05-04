import React, { useState } from "react";
import {
  AppBar,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MenuIcon from "@mui/icons-material/Menu";


const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  //for social box fb ins twiter
  const SocialBox = styled(Box)({
    display: "flex",
    gap: 10,
  });

  //Menu Box
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
  });

  //SearchBox

  const SearchBox = styled(Box)({
    display: "flex",
    gap: 5,
    cursor: "pointer",
    fontSize: "14px",
  });

  //menuitems home......contact
  const MenuItems = [
    { Name: "Home", Link: "/" },
    { Name: "Product", Link: "#" },
    { Name: "Portfolio", Link: "#" },
    { Name: "Blog", Link: "#" },
    { Name: "Contact us", Link: "#" },
  ];



const [open, setOpen] = useState(false)

  return (
    <AppBar sx={{ background: "black" }} position="static">
      <StyledToolbar>
        <SocialBox>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </SocialBox>


        <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          {MenuItems.map((item) => (
            <Typography sx={{ cursor: "pointer", fontSize: "14px" }}>
              {item.Name}
            </Typography>
          ))}
       
        </MenuBox>


        <SearchBox>
          <InputBase placeholder="search.." sx={{ color: "white" }} />
          <MenuIcon
            sx={{
              color: "white",
              display: { xs: "block", sm: "block", md: "none" },
            }}
            onClick={()=>setOpen(!open)}
          />
        </SearchBox>



      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={()=>setOpen(!open)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box sx={{width:350,height:"90vh"}}>
          {MenuItems.map((item) => (
            <MenuItem sx={{ cursor: "pointer", fontSize: "14px" }}>
              {item.Name}
            </MenuItem>
          ))}

        </Box>
        <MenuItem>Profile</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
