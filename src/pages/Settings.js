// Environment dependencies
import React, { PureComponent } from 'react';

// Material component(s)
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import { blue } from '@material-ui/core/colors';

// Snackbar component(s)
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

// Icon component(s)
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';

// Redux store connection
import { connect } from 'react-redux';

// Style configuration
const styles = {
  paper: {
    width: '60vw',
    maxWidth: '480px',
    padding: '1.6em'
  },
  avatar: {
    backgroundColor: blue[500],
    fontSize: 'xxx-large',
    padding: '1em'
  }
};

// Settings component
class Settings extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      error: false,
      note: "",
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

  /**
   * Clean all text fields
   */
  cleaner = async () => {

    const nameRef = document.getElementById('name');
    const bioRef = document.getElementById('bio');

    nameRef.value = "";
    bioRef.value = "";

    await this.validate();
    this.openSnackBar("Fields cleared successfully");

  }

  /**
   * Save valid user profile changes to store
   * @returns null
   */
  saveChanges = async () => {

    let name = document.getElementById('name').value;
    let bio = document.getElementById('bio').value;

    if (name.length === 0) {
      this.openSnackBar("Name field cannot be empty");
      this.validate();
      return;
    }

    await this.props.updateUser(name, bio);
    this.openSnackBar("Changes saved");

  }

  /**
   * Validates required text fields
   */
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
          <Paper style={styles.paper} elevation={24}>

            <Typography variant='h5'>
              Edit Profile
            </Typography>
            <br />

            <Grid container justify="center">

              <Grid item xs={10} style={{ 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center' }}>
                <Avatar variant={"circle"} style={styles.avatar}> {this.props.name[0].toUpperCase()} </Avatar>
                <br />
              </Grid>

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
                  defaultValue={this.props.name}
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
                  defaultValue={this.props.about}
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

const mapStateToProps = (state) => {
  return state["user"];
};

const dispatchStateToProps = (dispatch) => {
  return {
    updateUser: (name, about) => dispatch({ type: { name, about }, action: "UPDATE_USER" })
  }
}

export default connect(mapStateToProps, dispatchStateToProps)(Settings);
