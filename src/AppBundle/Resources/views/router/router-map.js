import React from 'react'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'


import Home from '../containers/Home'
import NotFound from '../containers/404'
import Project from '../containers/Project'


class RouterMap extends React.Component {
    render() {
        return (
            <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/project/:id' component={Project} />
                <Route path='*' component={NotFound} />
            </Switch>
            </Router>
        )
    }
}

export default RouterMap