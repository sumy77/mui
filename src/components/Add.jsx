import { Avatar, Box, Fab, Modal, TextField, Tooltip, Typography } from '@mui/material'
import {Add as AddIcon} from '@mui/icons-material'
import React from 'react'
import styled from '@emotion/styled';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
  };

const UserBox = styled(Box)({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginBottom: "20px"
})

const Add = () => {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
        <Tooltip title="Add Post" sx={{position: "fixed", bottom: 20, left: {xs: "calc(50% - 25px)", md: 30}}}>
            <Fab color="primary" aria-label="add" onClick={handleOpen}>
                <AddIcon />
            </Fab>
        </Tooltip>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" color="gray" textAlign="center">
                Create Post
                </Typography>
                <UserBox>
                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/3778361/pexels-photo-3778361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <Typography variant='p'>John Doe</Typography>
                </UserBox>
                <TextField
                    id="standard-multiline-static"
                    multiline
                    rows={4}
                    placeholder="What's on your mind?"
                    variant="standard"
                    sx={{width: "100%"}}
                    />
            </Box>
        </Modal>
    </>
  )
}

export default Add