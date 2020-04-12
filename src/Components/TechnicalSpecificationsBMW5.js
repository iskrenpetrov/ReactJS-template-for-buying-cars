import React from 'react';
import Menu from './Menu.js';
import Footer from './Footer.js';
import Button from '@material-ui/core/Button';
import ImageSlider from './ImageSlider5series.js';
import { MDBBtn } from "mdbreact";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(year,horse,nm,trans,zeroto,propulsion) {
  return {year,horse,nm,trans,zeroto,propulsion };
}
const rows = [
  createData("Model", "5 series"),
  createData("Type", "Sport"),
  createData("Year of producing", 2020),
  createData("Horse power", 420),
  createData("NM", 573),
  createData("Transmission", "Semi-automatic"),
  createData("0 to 100", "4,3 sec"),
  createData("Propulsion", "Back wheels")
];

function TechnicalSpecificationsBMW5() {
  return (
      <div>
        <Menu/>
        <center>
          <div className="slider"><ImageSlider/>
            <p><TableContainer component={Paper}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Data</TableCell>
                    <TableCell align="right">Info</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                      <TableRow key={row.year}>
                        <TableCell component="th" scope="row">
                          {row.year}
                        </TableCell>
                        <TableCell align="right">{row.horse}</TableCell>

                      </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            </p></div>
          <Button variant="contained" color="primary">
            Поръчай
          </Button>&nbsp;
          <Button variant="contained" color="primary" href="/Cars.js">
            Назад
          </Button>
        </center>
        <Footer/>
      </div>
  );
}

export default TechnicalSpecificationsBMW5;

