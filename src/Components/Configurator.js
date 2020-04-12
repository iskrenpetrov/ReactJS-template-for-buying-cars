import React, {Fragment } from "react";
import { MDBBtn } from "mdbreact";
import Menu from './Menu.js';
import Footer from './Footer.js';
import Catalog from './Catalog.js';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Configurate from "./Configurate";
import ImageSlider from "./ImageSlider";


function Cars() {
  return (
      <div>
        <Menu/>
        <center>
          <div className="margin">
            <div className="bele">
                <div style={{width: "85%"}}><Configurate/></div>
            </div>
          </div>
        </center>
        <Footer/>
      </div>
  );
}

export default Cars;


