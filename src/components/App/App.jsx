import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import _isEqual from 'lodash.isequal';
//import { withStyles } from 'material-ui/styles';
import logo from '../../img/logo.svg';
import '../../css/App.css';

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
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>      
    );
  }
}
