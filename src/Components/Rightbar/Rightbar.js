import { Box,  Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography, Divider} from '@mui/material'
import React from 'react'
import postImage1 from "../../Components/Images/image1.jpg"
import postImage2 from "../../Components/Images/image2.jpg";
import postImage3 from "../../Components/Images/image3.jpg";
import postImage4 from "../../Components/Images/image4.jpg";
import Card from "../Card/Card";
const Rightbar = () => {
  return (
    <Box>
 <Typography align="center" bgcolor={"black"} color="white">
        Most Popular
      </Typography>

    <List sx={{
         width: '100%', 
         
         }}>
   <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={postImage1}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" — I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={postImage2}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" — I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={postImage3}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" — I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={postImage4}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" — I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>
        <Divider variant="inset" component={"li"} />
    </List>
    <Typography align="center" bgcolor={"black"} color="white">
        About Us
      </Typography>
      <Card cardImage={postImage3} />
    </Box>
  )
}

export default Rightbar