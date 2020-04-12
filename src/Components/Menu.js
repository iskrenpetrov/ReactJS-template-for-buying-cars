import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MenuButton from './menubutton.js';
import Register from './register';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Cart from './images/cart.png';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { MDBBtn } from "mdbreact";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <div class="menu">
        <AppBar position="static" style={{backgroundColor: "#282c34"}}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <MenuButton/>
            </Typography>
            <Button color="inherit" href="login.js">Login</Button>
            <Button color="inherit" href="register.js">Register</Button>
         <img src={Cart} width="3%" href={Cart}/>
<MDBBtn outline color="info" href="Cart.js">Cart</MDBBtn>
          </Toolbar>
        </AppBar>
        </div>
      </div>
  );
}
