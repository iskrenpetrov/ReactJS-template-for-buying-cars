import React, {Fragment } from "react";
import { MDBBtn } from "mdbreact";
import Menu from './Menu.js';
import Footer from './Footer.js';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LoginImage from './images/userlogin.png';
import BMWCar from "./images/bmwcar.jpg";
import TextField from '@material-ui/core/TextField';


function Login() {
  return (
   <div>
     <Menu/>
     <center>
       <Grid item xs={4}>
           <Paper><br/>
              <p><img src={LoginImage} alt={"Login"} width="70%"/></p>
              <p><TextField id="username" label="Username" type="search" variant="outlined" /></p>
              <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
              />
            <p><MDBBtn color="light-blue">Login</MDBBtn></p>
              <p><MDBBtn outline color="primary">Forgotten password</MDBBtn></p>
               <br/>
          </Paper>
</Grid>
     </center>
       <Footer/>
    </div>
  );
}

export default Login;

