import React, { Component } from 'react';

// Material component(s)
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";

// Snackbar compoenent(s)
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

// Icon component(s)
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';

// Style config
const styles = {
  paper: {
    'width': '60vw',
    'maxWidth': '480px',
    'padding': '1.6em'
  },
  avatar: {
    'width': '2em',
    'height': '2em',
    'fontSize': '4em',
    'margin': '0.8em',
    'backgroundColor': '#1e88e5',
    'color': 'white'
  }
};

// Settings component
class Settings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      note: ""
    };
  }

  // Snackbar open
  openSnackBar = (note) => {
    this.setState({ open: true, note });
  }

  // Snackbar close
  closeSnackBar = () => {
    this.setState({ open: false, note: "" });
  }

  render() {
    return (
      <>
        <br /><br />
        <Grid container justify="center" spacing={6}>
          <Paper style={styles.paper} elevation={2}>

            <Typography variant='h5'>
              Edit Profile
            </Typography>

            <Grid container justify="center">

              <Avatar variant={"circle"} style={styles.avatar}> A </Avatar>
              <Grid item xs={10}>

                <TextField
                  id='name'
                  autoFocus={true}
                  variant='outlined'
                  required={true}
                  margin={"dense"}
                  label={"Name"}
                  fullWidth={true}
                />

                <TextField
                  id='bio'
                  variant='outlined'
                  margin={"dense"}
                  label={"About"}
                  multiline={true}
                  fullWidth={true}
                  size={4}
                  rows={2}
                />

              </Grid>
            </Grid>

            <br />
            <br />

            <Grid container justify="space-between">

              <Button>
                Cancel
              </Button>

              <Button color="primary"
                variant="contained"
                disableFocusRipple={false}
                onClick={() => this.openSnackBar("Saved")}>
                Save
              </Button>

            </Grid>
          </Paper>
        </Grid>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={3600}
          onClose={this.closeSnackBar}
          message={this.state.note}
          TransitionComponent={Slide}
          action={
            <IconButton size="small" aria-label="close" color="inherit" onClick={this.closeSnackBar}>
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </>
    )
  };
};

export default Settings;
