import React from 'react';
import { withRouter } from 'react-router-dom';

// Page components
import Home from '../pages/Home.js';
import Settings from '../pages/Settings.js';

// Content panel
class ContentSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  // TODO: Replace with page components
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

export default withRouter(ContentSection);
