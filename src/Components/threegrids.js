import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from './slider.js';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PriceEtiquette from './images/price.png';
import TestDrive from './images/testdrive.png';
import Parts from './images/parts.png';
import Button from '@material-ui/core/Button';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardFooter, MDBBtn, MDBContainer } from
      "mdbreact";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}><img src={PriceEtiquette} width="30%"/>
            <p className="sansserif"><h1>Price listing</h1>See the prices of your favourite cars.
              There are normal, special and limited editions which makes the differences in prices.<br/>
              <p> <a href="#!" className="btn btn-danger btn-rounded">
                Check prices
              </a></p>
            </p></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><img src={TestDrive} width="30%"/><p className="sansserif"><h1>Test driving</h1>
            You can try your wanted model of car with some clicks. Choose a day off for you and we will provide you with a test drive.<br/>
            <p> <a href="#!" className="btn btn-danger btn-rounded">
             Request a test drive
            </a></p>
          </p></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><img src={Parts} width="30%"/><p className="sansserif"><h1>Parts</h1>Check that is the needed part available. If it is not,
            don't worry, we will order it from the main warehouse.
           <p> <a href="#!" className="btn btn-danger btn-rounded">
              Find parts
            </a></p>
           </p></Paper>
        </Grid>
      </Grid>
      {/*  <p className="sansserif">
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1 className="serif"> If you want to sell your automobile,</h1>
            <p className="serif"><h3>please contact us.</h3></p>
            <Button variant="contained" color="primary">
              Contacts
            </Button></Paper>
        </Grid></p>*/}
    </div>
  );
}

