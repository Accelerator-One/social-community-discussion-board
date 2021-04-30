// Environment dependencies
import React from 'react';

// Material component(s)
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { purple, blue, pink, orange } from '@material-ui/core/colors';

/**
 * Custom implementation for comment box
 * @param {{ uid:Number, name:String, message:String }}:any param
 * @returns JSX.Element
 */
function Comment({ uid, name, message }) {

  // returns random color palette for 'Avatar' component
  function randomizer() {

    let val = parseInt(Math.random() * 10) % 10;

    if (val <= 2)
      return blue[500];

    else if (val <= 4)
      return purple[500];

    else if (val <= 6)
      return pink[600];

    return orange[400];
  }

  return (
    <Paper key={uid}>
      <Grid container justify="center" spacing={4}>

        <Grid item xs={3} style={{ 'display': 'flex', 'justifyContent': 'center' }}>
          <Avatar style={{ 'backgroundColor': randomizer() }}> {(name[0]).toUpperCase()} </Avatar>
        </Grid>
        <Grid item xs={9}>
          <Typography>
            {name}
          </Typography>
          {message}
        </Grid>

      </Grid>
    </Paper>
  );
};

export default (Comment);
