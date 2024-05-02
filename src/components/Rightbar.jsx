import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} sx={{display: {xs: "none", sm: "block"}}}>
        <Box position="fixed" width={420}>
            <Typography variant="h6" fontWeight="100" gutterBottom>
                Online Friends
            </Typography>
            <AvatarGroup total={10} sx={{display: "flex", flexDirection: "row"}}>
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            </AvatarGroup>
            <Typography variant="h6" fontWeight="100" mt={3}>
                Latest Photos
            </Typography>
            <ImageList cols={3} rowHeight={100} gap={5}>
                <ImageListItem>
                    <img
                    src="https://material-ui.com/static/images/image-list/breakfast.jpg"
                    alt=""
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                    src="https://material-ui.com/static/images/image-list/burgers.jpg"
                    alt=""
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                    src="https://material-ui.com/static/images/image-list/camera.jpg"
                    alt=""
                    />
                </ImageListItem>
            </ImageList>
            <Typography variant="h6" fontWeight="100" mt={3}>
                Top Conversations
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                    />
                </ListItem>
            </List>
        </Box>
    </Box>
  )
}

export default Rightbar