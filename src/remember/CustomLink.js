import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import {logger} from "redux-logger/src";


function CustomLink(props) {
    return (
        <Router>
            <div>
                <OldSchoolMenuLink
                    activeOnlyWhenExact={true}
                    to="/"
                    label="Home"
                />
                <OldSchoolMenuLink to="/about" label="About" />

                <hr />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}


function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });
    // console.log(match)
    return (
        <div>
            {match && ">> "}
            <Link to={to}>{label}</Link>
        </div>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}



export default CustomLink;
