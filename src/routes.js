import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';

const Greeting = () => {
  return <div>SUP DUDE</div>
}

export default (
  <Route path="/" component={App} >
    <Route path="greet" component={Greeting} />
    <Route path="greet2" component={Greeting} />
    <Route path="greet3" component={Greeting} />

  </Route>
)
