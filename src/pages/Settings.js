// Environment dependencies
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

// Style configuration
const styles = {
  paper: {
    width: '60vw',
    maxWidth: '480px',
    padding: '1.6em'
  },
  avatar: {
    alignItems: "center",
    width: '2em',
    height: '2em',
    fontSize: 'xxx-large',
    backgroundColor: '#1e88e5'
  }
};

// Settings component
class Settings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      error: false,
      name: "Aditya",
      note: "",
      bio: ""
    };
  }

  // Snackbar open
  openSnackBar = (note) => {
    this.setState({ ...this.state, open: true, note });
  }

  // Snackbar close
  closeSnackBar = () => {
    this.setState({ ...this.state, open: false, note: "" });
  }

  // Clean text fields
  cleaner = async () => {

    const nameRef = document.getElementById('name');
    const bioRef = document.getElementById('bio');

    nameRef.value = "";
    bioRef.value = "";

    await this.validate();
    this.openSnackBar("Fields cleared successfully");

  }

  // Save changes
  saveChanges = async () => {

    let name = document.getElementById('name').value;
    let bio = document.getElementById('bio').value;

    if (name.length === 0) {
      this.openSnackBar("Name field cannot be empty");
      this.validate();
      return;
    }

    await this.setState({ ...this.state, name, bio });
    this.openSnackBar("Changes saved");

  }

  // Validation component
  validate = () => {

    let name = document.getElementById('name').value;

    if (name.length === 0)
      this.setState({ ...this.state, error: true });
    else
      this.setState({ ...this.state, error: false });
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
            <br />

            <Grid container justify="center">

              <Avatar variant={"circle"} style={styles.avatar}> {this.state.name[0].toUpperCase()} </Avatar>

              <Grid item xs={10}>

                <br />
                <TextField
                  id='name' error={this.state.error}
                  autoFocus={true}
                  variant='outlined'
                  required={true}
                  margin={"dense"}
                  label={"Name"}
                  fullWidth={true}
                  placeholder="Your name here"
                  helperText="Name field cannot be empty"
                  onChange={this.validate}
                />

                <TextField
                  id='bio'
                  variant='outlined'
                  margin={"dense"}
                  label={"About"}
                  multiline={true}
                  fullWidth={true}
                  rows={2}
                  placeholder="Write something about yourself"
                />

              </Grid>
            </Grid>

            <br />
            <br />

            <Grid container justify="space-between">

              <Button onClick={this.cleaner}>
                Clear
              </Button>

              <Button color="primary"
                variant="contained"
                disableFocusRipple={false}
                onClick={this.saveChanges}>
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
