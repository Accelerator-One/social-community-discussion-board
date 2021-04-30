// Environment dependencies
import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

// List component(s)
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Material icon(s)
import HomeIcon from '@material-ui/icons/Home';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';

// Dialog component(s)
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import DialogContentText from '@material-ui/core/DialogContentText';

/**
 * Sidebar containing navigation links
 */
class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  /**
   * Highlights navlink for selected route
   * @param {string} path 
   * @returns boolean
   */
  isSelected = (path) => {
    return String(this.props.location.pathname).endsWith(path);
  }

  openDialog = () => {
    this.setState({ open: true });
  };

  closeDialog = () => {
    this.setState({ open: false });
  }

  render() {

    const style = {
      link: {
        'textDecoration': 'none',
        'color': 'rgba(0,0,0.87)'
      },
      flex: {
        "display": "flex",
        "justifyContent": "center"
      }
    };

    return (
      <>

        <Divider />

        <List>

          <NavLink to="./" style={style.link}>
            <ListItem button key="Home" selected={this.isSelected("/")}>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </NavLink>

          <NavLink to="./settings" style={style.link}>
            <ListItem button key="Settings" selected={this.isSelected("/settings")}>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </NavLink>

        </List>

        <Divider />

        <List>
          <ListItem button key="Logout" onClick={this.openDialog}>
            <ListItemIcon><LogoutIcon /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>

        <Dialog
          open={this.state.open}
          onClose={this.closeDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >

          <DialogContent>
            <DialogContentText style={style.flex}>
              <CircularProgress />
            </DialogContentText>
          </DialogContent>

        </Dialog>

      </>
    )
  };

};

export default withRouter(SideBar);
