import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
//import PropTypes from 'prop-types';
//import _isEqual from 'lodash.isequal';
//import { withStyles } from 'material-ui/styles';
import logo from '../../img/logo.svg';
import '../../css/App.css';
import { Component as MainActionBar } from '../MainActionBar/sync'

//const styles = () => ({});

export default class App extends Component {  
  // static propTypes = {}  
  // static defaultProps = {}

  constructor(props) {
    super(props);
    this.fileIdentifier = 'App.jsx';
    this.state = {};
  }

  shouldRenderNull = () => false;

  render = () => {
    return (    
      <MuiThemeProvider>  
        <div>         
          <MainActionBar/>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>   
      </MuiThemeProvider>   
    );
  }
}
