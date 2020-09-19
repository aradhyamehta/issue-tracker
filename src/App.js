import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  
  return (

  <div className={classes.root}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>xs=12</Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>xs=12 sm=6</Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>xs=12 sm=6</Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <Button variant="contained" color="primary">Hello World</Button>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <Button variant="contained" color="primary">Hello World</Button>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <Button variant="contained" color="primary">Hello World</Button>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <Button variant="contained" color="primary">
            Hello World
            <DeleteIcon color="secondary" />
          </Button>
        </Paper>
      </Grid>
    </Grid>
  </div>
  );
}

export default App;
