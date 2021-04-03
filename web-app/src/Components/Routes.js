import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Images from "./Pages/Images";
import Favorites from "./Pages/Favorites";
import About from "./Pages/About";
import AboutPexels from "./Pages/AboutPexels";
import Error404 from "./Pages/Error404";


function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/images" component={Images}/>
            <Route exact path="/favorites" component={Favorites}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/about-pexels" component={AboutPexels}/>
            <Route exact path="/*" component={Error404}/>
        </Switch>
    )
}

export default Routes;
