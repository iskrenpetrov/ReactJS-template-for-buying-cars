Skip to content

Material-UI
v4.9.5
Diamond Sponsors

App Bar

The App Bar displays information and actions relating to the current screen.
ads via Carbon
Extend the power of your core cloud to the edge with our API-first platform.
ads via Carbon

The top App Bar provides content and actions related to the current screen. It’s used for branding, screen titles, navigation, and actions.

It can transform into a contextual action bar or be used as a navbar.
Simple App Bar
News

<AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      News
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>

App Bar with a primary search field

A primary searchbar.
Material-UI
App Bar with menu
Logout
Photos

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

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

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Photos
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

App Bar with search field

A side searchbar.
Material-UI
Dense (desktop only)
Photos

<AppBar position="static">
  <Toolbar variant="dense">
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" color="inherit">
      Photos
    </Typography>
  </Toolbar>
</AppBar>

Prominent

A prominent app bar.
Material-UI
Bottom App Bar
Fixed placement

When you render the app bar position fixed, the dimension of the element doesn't impact the rest of the page. This can cause some part of your content to be invisible, behind the app bar. Here are 3 possible solutions:

    You can use position="sticky" instead of fixed. ⚠️ sticky is not supported by IE 11.
    You can render a second <Toolbar /> component:

function App() {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>{/* content */}</Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

    You can use theme.mixins.toolbar CSS:

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
}))

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>{/* content */}</Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </React.Fragment>
  )
};

Scrolling

You can use the useScrollTrigger() hook to respond to user scroll actions.
Hide App Bar

The app bar hides on scroll down to leave more space for reading.
Elevate App Bar

The app bar elevates on scroll to communicate that the user is not at the top of the page.
Back to top

A floating action buttons appears on scroll to make it easy to get back to the top of the page.
useScrollTrigger([options]) => trigger
Arguments

    options (Object [optional]):
        options.disableHysteresis (Boolean [optional]): Defaults to false. Disable the hysteresis. Ignore the scroll direction when determining the trigger value.
        options.target (Node [optional]): Defaults to window.
        options.threshold (Number [optional]): Defaults to 100. Change the trigger value when the vertical scroll strictly crosses this threshold (exclusive).

Returns

trigger: Does the scroll position match the criteria?
Examples

import useScrollTrigger from '@material-ui/core/useScrollTrigger';

function HideOnScroll(props) {
  const trigger = useScrollTrigger();
  return (
    <Slide in={!trigger}>
      <div>Hello</div>
    </Slide>
  );
}

API

    <AppBar />
    <Menu />
    <Toolbar />

Contents

    Simple App Bar
    App Bar with a primary search field
    App Bar with menu
    App Bar with search field
    Dense (desktop only)
    Prominent
    Bottom App Bar
    Fixed placement
    Scrolling
        Hide App Bar
        Elevate App Bar
        Back to top
        useScrollTrigger([options]) => trigger
    API

Diamond Sponsors


