import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import Logo from './white-header-logo.png';

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Toolbar>
        {/* Logo */}
        <img src={Logo} alt="Logo" style={{ width: 200, marginRight: 700 }} />
        {/* Navigation Links */}
        <Button color="inherit" style={{ color: 'red' }}>Home</Button>
        <Button color="inherit">Pages</Button>
        <Button color="inherit">Services</Button>
        <Button color="inherit">Trainers</Button>
        <Button color="inherit">Blog</Button>
        <Button color="inherit">Contact</Button>
        {/* Search Icon */}
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        {/* More Icon */}
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="more"
        >
          <MoreIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;



