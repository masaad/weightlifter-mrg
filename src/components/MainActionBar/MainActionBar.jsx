import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _isEqual from 'lodash.isequal';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Switch from 'material-ui/Switch';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Menu, { MenuItem } from 'material-ui/Menu';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MainActionBar extends Component {
  // static propTypes = {}
  // static defaultProps = {}

  constructor(props) {
    super(props);
    this.fileIdentifier = 'MainActionBar.jsx';
    this.state = {
      auth: true, 
      anchorEl: null,
      anchorMainEl: null, 
    };
  }

  handleChange = (event, checked) => {
    this.setState({ auth: checked }); 
  }

  handleProfileMenu = event => {
    this.setState({ anchorEl: event.currentTarget }); 
  }

  handleMainMenu = event => {
    this.setState({ anchorMainEl: event.currentTarget }); 
  }

  handleMainClose = event => {
    this.setState({ anchorMainEl: null });
  }

  handleClose = () => {
    this.setState({ anchorEl: null }); 
  }

  shouldRenderNull = () => false;

  render = () => {
    if (this.shouldRenderNull()) return null;
    const { classes } = this.props; 
    const { auth, anchorEl, anchorMainEl } = this.state; 
    const open = Boolean(anchorEl); 
    const openMain = Boolean(anchorMainEl);
    
    return (
      <div className={classes.root}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
            }
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup>
        <AppBar position="static">
          <Toolbar>
            
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon aria-owns={openMain ? 'menu-main' : null}
                  aria-haspopup="true"
                  onClick={this.handleMainMenu}
                  color="inherit"
                />
            </IconButton>           
            <Menu
                  id="menu-main"
                  anchorEl={anchorMainEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={openMain}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleMainClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleMainClose}>My account</MenuItem>
            </Menu>
            
            <Typography type="title" color="inherit" className={classes.flex}>
              Title
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleProfileMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  };
}

export default withStyles(styles)(MainActionBar);
