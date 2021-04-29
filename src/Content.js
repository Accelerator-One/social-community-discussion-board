// Environment dependencies
import React from 'react';
import { withRouter } from 'react-router-dom';

// Page component(s)
import Home from './pages/Home.js';
import Settings from './pages/Settings.js';

// Content panel
class Content extends React.Component {

  // TODO: Initialize 'react-redux' store via stub
  constructor(props) {
    super(props);
    this.state = {};
  }

  // REASON: Support for branched paths on 'gh-pages'
  conditionalRouter = () => {

    const path = String(this.props.location.pathname);
    if (path.endsWith('/settings'))
      return <Settings />;

    return <Home />;
  }

  render() {
    return (<> { this.conditionalRouter()} </>);
  }
};

export default withRouter(Content);
