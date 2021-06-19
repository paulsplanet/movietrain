import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "../Routes/Home/HomePresenter";
import TV from "../Routes/TV/TVPresenter";
import Search from "../Routes/Search/SearchPresenter";
import Header from "./Header";
import Detail from "../Routes/Detail/DetailPresenter";


const Navi = () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tv" exact component={TV} />
                <Route path="/search" component={Search} />
                <Route path="/movie/:id" component={Detail} />
                <Route path="/show/:id" component={Detail} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
);

export default Navi;