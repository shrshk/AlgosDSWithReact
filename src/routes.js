// @flow
import React from 'react';
import { Switch, Route } from 'react-router';

import { HomePageContainer } from './resource/home/view/home-page.container';
import { graphBuilder } from './resource/graphs/graph-builder/view/graph-builder.container';

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePageContainer} />
    <Route exact path="/graph" component={graphBuilder} />
  </Switch>
);
