import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { purple } from '@material-ui/core/colors';

function Comment({ uid, name, message }) {
  return (
    <Paper key={uid}>
      <Grid container justify="center" spacing={4}>
        <Grid item xs={10} style={{ 'position': 'relative', 'left': '1.6em' }}>
          <Typography>
            {name}
          </Typography>
          {message}
        </Grid>
        <Grid item xs={2}>
          <Avatar style={{ 'backgroundColor': purple[500] }}> {(name[0]).toUpperCase()} </Avatar>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default (Comment);
