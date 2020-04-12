import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from './slider.js';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BMW3 from './images/3series.png';
import BMW5 from './images/5series.png';
import BMW7 from './images/7series.png';
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
          <Paper className={classes.paper}><img src={BMW3} width="100%"/>
            <p className="sansserif"><h1>3 series</h1> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              <p><MDBBtn outline color="success" href="TechnicalSpecificationsBMW3.js">Show details</MDBBtn></p>
            </p></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><img src={BMW5} width="100%"/><p className="sansserif"><h1>5 series</h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            <p><MDBBtn outline color="success" href="TechnicalSpecificationsBMW5.js">Show details</MDBBtn></p>
          </p></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><img src={BMW7} width="100%"/><p className="sansserif"><h1>7 series</h1> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            <p><MDBBtn outline color="success" href="TechnicalSpecificationsBMW7.js">Show details</MDBBtn></p>
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


