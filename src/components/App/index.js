import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

//importing pages
import FeedPage from "../Pages/Feed";
import LandingPage from "../Pages/Landing";

//redux
import { Provider } from "react-redux";
import store from "./../../redux/store.js";

const App = () => {
    return (
        <Router>
            <Provider store={store}>
                <Switch>
                    <Route path="/" component={LandingPage} exact />
                    <Route path="/feed" component={FeedPage} exact />
                </Switch>
            </Provider>
        </Router>
    );
}

export default App;
