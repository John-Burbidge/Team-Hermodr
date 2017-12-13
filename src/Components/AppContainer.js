import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import {withRouter, Route} from 'react-router'
import SmsDashboard from '../Components/SmsDashboard';

@withRouter
export default class AppContainer extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                 <Route  path='/' component={SmsDashboard}/>
                 
            </div>
        )
    }
}