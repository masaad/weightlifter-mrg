import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _isEqual from 'lodash.isequal';
import { withStyles } from 'material-ui/styles';

const styles = () => ({});

class <%= pascalEntityName %> extends Component {
  // static propTypes = {}
  // static defaultProps = {}

  constructor(props) {
    super(props);
    this.fileIdentifier = '<%= pascalEntityName %>.jsx';
    this.state = {};
  }

  shouldRenderNull = () => false;

  render = () => {
    if (this.shouldRenderNull()) return null;
    return <div className="<%= pascalEntityName %>"><%= pascalEntityName %></div>;
  };
}

export default withStyles(styles)(<%= pascalEntityName %>);
