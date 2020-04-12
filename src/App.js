import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Styles from "./styles.css";
import Home from './Home';
import Register from './Components/register';
import Login from './Components/login';
import Cars from './Components/Cars';
import Cart from './Components/Cart';
import TechnicalSpecificationsBMW3 from './Components/TechnicalSpecificationsBMW3.js';
import TechnicalSpecificationsBMW5 from './Components/TechnicalSpecificationsBMW5.js';
import TechnicalSpecificationsBMW7 from './Components/TechnicalSpecificationsBMW7.js';
import Configurator from './Components/Configurator.js';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
            <Switch>
            <Route path="/" component={Home} exact />
                <Route path="/Register.js" component={Register} exact />
                <Route path="/Login.js" component={Login} exact />
                <Route path="/Cars.js" component={Cars} exact />
 		<Route path="/Cart.js" component={Cart} exact />
 		<Route path="/Cart.js" component={Cart} exact />
 		<Route path="/TechnicalSpecificationsBMW3.js" component={TechnicalSpecificationsBMW3} exact />
 		<Route path="/TechnicalSpecificationsBMW5.js" component={TechnicalSpecificationsBMW5} exact />
 		<Route path="/TechnicalSpecificationsBMW7.js" component={TechnicalSpecificationsBMW7} exact />
 		<Route path="/Configurator.js" component={Configurator} exact />
        </Switch>
        </div>
        </BrowserRouter>
    );
    }
};

export default App;
