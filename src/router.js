import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Home from "./components/Home";
import HotelListing from "./components/HotelListing";
import NotFound from "./components/NotFound";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="hotelSearch" component={HotelListing}>
        <Route path="/hotelSearch/:fromDate/:toDate" component={HotelListing}/>
      </Route>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
