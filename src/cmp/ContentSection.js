import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Content panel
class ContentSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  // TODO: Replace with page components
  render() {
    return (
      <Switch>
        <Route path='/settings' exact> Settings </Route>
        <Route path='/' > Home </Route>
      </Switch>
    )
  }
};

export default ContentSection;
