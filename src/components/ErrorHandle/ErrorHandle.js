import React, { Component } from 'react';
import { OopsPage } from '../../containers';
export class ErrorHandle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      errorInfo: ''
    }
  }
  componentDidCatch = (error, info) => {
    this.setState({
      error: error,
      errorInfo: info
    })
  }
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <OopsPage />
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorHandle
