
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

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

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function AutoGrid() {
  const classes = useStyles();

 const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedd: false,
    checkedE: false,
    checkedG: false,
    checkedH: false,
    checkedI: false,
    checkedO: false,	
    checkedN: false,
    checkedM: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
   <div>
 <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}><h1>Petrol</h1>
        <p><Checkbox checked={state.checkedA} onChange={handleChange}  name="checkedA" color="primary"/>2.0 150 hp</p>
	<p><Checkbox checked={state.checkedB} onChange={handleChange}  name="checkedB" color="primary"/>2.5 218 hp</p>
	<p><Checkbox checked={state.checkedC} onChange={handleChange}  name="checkedC" color="primary"/>3.0 231 hp</p>
	<p><Checkbox checked={state.checkedD} onChange={handleChange}  name="checkedD" color="primary"/>3.5 Bi-turbo 306 hp</p>
	<p><Checkbox checked={state.checkedE} onChange={handleChange}  name="checkedE" color="primary"/>4.4 385 hp</p>
	<p><Checkbox checked={state.checkedM} onChange={handleChange}  name="checkedM" color="primary"/>M-Power 5.0 420 hp</p></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><h1>Diesel</h1>
	<p><Checkbox checked={state.checkedG} onChange={handleChange}  name="checkedG" color="primary"/>2.0 150 hp</p>
	<p><Checkbox checked={state.checkedH} onChange={handleChange}  name="checkedH" color="primary"/>2.2 180 hp</p>
	<p><Checkbox checked={state.checkedI} onChange={handleChange}  name="checkedI" color="primary"/>2.5 220 hp</p>
	<p><Checkbox checked={state.checkedN} onChange={handleChange}  name="checkedN" color="primary"/>3.0 258 hp</p>
	<p><Checkbox checked={state.checkedO} onChange={handleChange}  name="checkedO" color="primary"/>3.2 272 hp</p></Paper>
        </Grid>
        </Grid>
      </div>
  );
}




