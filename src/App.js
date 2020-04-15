import React from 'react';
import { Router, Switch } from 'react-router-dom';
import Map1 from './Map1';
import Map2 from './Map2';
import SearchableMap from './SearchableMap';
//import SearchableMap2 from './SearchableMap2';
import Navbar from './Navbar';
import Home from './components/Home';
import Restaurants from './components/Restaurants';
import LocalFoodPlaces from './components/LocalFoodPlaces';
import { useAuth0 } from './react-auth0-spa';
import history from './utils/history';
import PrivateRoute from './components/PrivateRoute';
import { About } from './components/About';

export default () => {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router history={history}>
      <div>
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/about" component={About} />
          <PrivateRoute path="/map" component={Map1} />
          <PrivateRoute path="/map2" component={Map2} />
          <PrivateRoute path="/searchablemap" component={SearchableMap} />
          <PrivateRoute path="/restaurants" component={Restaurants} />
          <PrivateRoute path="/localfoodplaces" component={LocalFoodPlaces} />
        </Switch>
      </div>
    </Router>
  );
};

//<Route exact path="/" component={Home} />
