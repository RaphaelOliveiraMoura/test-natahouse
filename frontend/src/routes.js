import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '~/pages/Home';
import StarshipInfo from '~/pages/StarshipInfo';

export default function Routes() {
  return (
    <Switch>
      <Route path="/starships/:id" exact component={StarshipInfo} />
      <Route path="*" exact component={Home} />
    </Switch>
  );
}
