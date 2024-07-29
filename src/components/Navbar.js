import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>
        <Button color="inherit" component={Link} to="/">Dashboard</Button>
        <Button color="inherit" component={Link} to="/calendar">Calendar</Button>
        <Button color="inherit" component={Link} to="/kanban">Kanban</Button>
        <Button color="inherit" component={Link} to="/tables">Tables</Button>
        <Button color="inherit" component={Link} to="/charts">Charts</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
