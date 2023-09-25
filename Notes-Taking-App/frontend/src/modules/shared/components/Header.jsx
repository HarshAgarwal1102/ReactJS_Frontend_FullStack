import React from 'react'
import {AppBar, IconButton, Toolbar, Button, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


export const Header = ({username}) => {
  return (
    <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Note Taking App, Welcome {username}
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
  )
}
