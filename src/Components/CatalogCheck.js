
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from './slider.js';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BMW3 from './images/3series.png';
import BMW5 from './images/5series.png';
import BMW7 from './images/7series.png';
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
    checkedF: true,
    checkedG: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}><img src={BMW3} width="100%"/>
            <p className="sansserif"><h1>3 series</h1>
              <p>      <FormControlLabel
        control={<GreenCheckbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="Choose"
      /></p>
            </p></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><img src={BMW5} width="100%"/><p className="sansserif"><h1>5 series</h1>
            <p>      <FormControlLabel
        control={<GreenCheckbox checked={state.checkedB} onChange={handleChange} name="checkedB" />}
        label="Choose"
      /></p>
          </p></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><img src={BMW7} width="100%"/><p className="sansserif"><h1>7 series</h1>
            <p>      <FormControlLabel
        control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
        label="Choose"
      /></p>
           </p></Paper>
        </Grid>
      </Grid>
    </div>
  );
}



