import React, {Component} from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  };

  componentDidCatch = (error, info) => {
    this.setState({hasError: true, errorMessage: error});
  };

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;
    }

    // this.props.children es cualquier cosa que esté wrap dentro del error boundary
    return this.props.children;
  }
}

export default ErrorBoundary;