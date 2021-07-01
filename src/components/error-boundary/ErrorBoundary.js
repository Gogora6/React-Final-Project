import React from 'react';

class ErrorBoundary extends React.Component {
  state = {
    error: null, errorInfo: null,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;
    if (errorInfo) {
      return (
        <div className="container">
          <h2 className="text-danger">Something went wrong.</h2>
          <details style={{
            whiteSpace: 'pre-wrap',
          }}
          >
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return <div className="container-fluid">{children}</div>;
  }
}

export default ErrorBoundary;
