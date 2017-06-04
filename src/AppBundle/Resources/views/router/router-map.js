import React from 'react'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'


import Home from '../pages/home'
import NotFound from '../pages/404'


class RouterMap extends React.Component {
    render() {
        return (
            <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='*' component={NotFound} />
            </Switch>
            </Router>
        )
    }
}

export default RouterMap