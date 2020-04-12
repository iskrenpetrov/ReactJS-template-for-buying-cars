import React from 'react';
import Menu from './Components/Menu.js';
import ThreeGrids from './Components/threegrids.js';
import Footer from './Components/Footer.js';
import BMWCar from './Components/images/bmwcar.jpg';
import Button from '@material-ui/core/Button';
import Cars from './Components/Cars';
import { MDBBtn } from "mdbreact";


function Home() {
  return (
   <div>
     <Menu/>
     <center>
         <div className="bele">
         <img src={BMWCar} alt={"BMWCar"} width="90%" style={{border: "1px solid black"}}/>
         </div>
         <div className="bele">
       <Button variant="contained" color="primary" href="Cars.js">
           Открийте гамата на автомобили
       </Button>
         </div>
         <div class="margin">
             <div className="bele">
         <ThreeGrids/>
         </div>
         </div>
     </center>
       <Footer/>
    </div>
  );
}

export default Home;
