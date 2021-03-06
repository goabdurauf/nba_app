import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'


// Components
import Home from "./Component/Home/home"
import Layout from './Hoc/Layout/layout'


class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </Layout>
        )
    }
}

export default Routes