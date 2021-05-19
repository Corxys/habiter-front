import React from 'react';
import { Route } from 'react-router-dom';

import './styles.scss';

const Habiter = () => {
  return (
    <div className="container">
      <Route exact path="/">
        TODO: ici la page des interviews
      </Route>
      <Route exact path="/à-propos-du-projet">
        TODO: ici la page "à propos du projet"
      </Route>
      <Route exact path="/à-propos-des-artistes">
        TODO: ici la page "à propos des artistes"
      </Route>
      <Route exact path="/ressources">
        TODO: ici la page "ressources"
      </Route>
    </div>
  )
};

export default Habiter;