import React from 'react';
import { Route } from 'react-router';

export default (
    <Route>
      <Route path="/" />
      <Route path="/about-the-exhibition" />
      <Route path="/about-the-artists" />
      <Route path="/resources" />
      <Route path="/interviews/:id" />
    </Route>
);