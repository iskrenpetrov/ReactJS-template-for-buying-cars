import React, {Fragment } from "react";
import { MDBBtn, MDBIcon } from "mdbreact";
import Button from '@material-ui/core/Button';
import Menu from './Menu.js';
import Footer from './Footer.js';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Cart from './images/cart.png';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import BMW3 from './images/bmw3.jpg';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


function CartPage() {
  return (
   <div>
     <Menu/>
     <center>
<Grid item xs={6} sm={4}>
    <Alert severity="success">Вие имате 1 артикул в количката.</Alert></Grid><br/>
        <h1 style={{color: "#FFFFFF", fontFamily: "Arial"}}>Количка</h1>
        <br/>
        <Grid item xs={12} sm={6}>
        <Paper style={{backgroundColor: "#FFFFFF"}}>
    <br/>
<img src={BMW3} alt={"BMW3"} width="20%" style={{border: "1px solid black"}}/> &nbsp;
<br/> <p className="sansserif">
        Име: BMW 3 Series <br/>
        Година: 2020 <br/>
            Номер: 0478295 <br/>
        Количество: 1<br/></p>
    <Button
    variant="contained"
    color="secondary"
    startIcon={<DeleteIcon />}
>
    Премахни
    </Button><br/><br/>
     
    </Paper>
    </Grid><br/>
    <Button variant="contained" color="primary">
        Поръчай
        </Button>&nbsp;
        <Button variant="contained" color="primary" href="/">
        Назад
        </Button>
	</center>
       <Footer/>
    </div>
  );
}

export default CartPage;

