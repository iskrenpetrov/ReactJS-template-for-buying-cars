
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
    checkedM: false,	
    checkedN: false,
    checkedK: false,
    checkedU: false,
    checkedY: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
   <div>
 <Grid container spacing={3}>
        <Grid item xs={6}>
	<h1></h1>
          <Paper className={classes.paper}><h3>Systems and safety</h3>
        <p><Checkbox checked={state.checkedA} onChange={handleChange}  name="checkedA" color="primary"/>4x4</p>
	<p><Checkbox checked={state.checkedK} onChange={handleChange}  name="checkedK" color="primary"/>ABS</p>
	<p><Checkbox checked={state.checkedB} onChange={handleChange}  name="checkedB" color="primary"/>Airbag</p>
	<p><Checkbox checked={state.checkedC} onChange={handleChange}  name="checkedC" color="primary"/>ASR/Traction control</p>
	<p><Checkbox checked={state.checkedE} onChange={handleChange}  name="checkedE" color="primary"/>ESP</p>
	<p><Checkbox checked={state.checkedD} onChange={handleChange}  name="checkedD" color="primary"/>Immobilizer</p>
	<p><Checkbox checked={state.checkedU} onChange={handleChange}  name="checkedU" color="primary"/>Armored</p>
	<p><Checkbox checked={state.checkedY} onChange={handleChange}  name="checkedY" color="primary"/>Start-stop system</p></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><h3>Extras</h3>
	<p><Checkbox checked={state.checkedG} onChange={handleChange}  name="checkedG" color="primary"/>DVD</p>
	<p><Checkbox checked={state.checkedH} onChange={handleChange}  name="checkedH" color="primary"/>Climatronic</p>
	<p><Checkbox checked={state.checkedI} onChange={handleChange}  name="checkedI" color="primary"/>Navigation</p>
	<p><Checkbox checked={state.checkedN} onChange={handleChange}  name="checkedN" color="primary"/>Leather interior</p>
	<p><Checkbox checked={state.checkedO} onChange={handleChange}  name="checkedO" color="primary"/>Parktronic</p></Paper>
        </Grid>
        </Grid>
      </div>
  );
}




