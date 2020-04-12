import React from 'react';
import Menu from './Menu.js';
import Footer from './Footer.js';
import RegisterSteps from './registersteps.js';


function Register() {
  return (
   <div>
     <Menu/>
     <center>
 <RegisterSteps/>
     </center>
       <Footer/>
    </div>
  );
}

export default Register;

