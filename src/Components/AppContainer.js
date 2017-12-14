import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import {withRouter, Route} from 'react-router'
import SmsDashboard from '../Components/SmsDashboard';
const queryString = require('query-string');

@withRouter
export default class AppContainer extends Component {
    constructor() {
        super();
    }
    componentDidMount() {  
        const parsedQuery = queryString.parse(location.href);
        console.log('parsedQuery', parsedQuery);
        Visualforce.remoting.Manager.invokeAction(
            'HackathonCtrl.sendMessages', parsedQuery.shouldsend, parsedQuery.id,
            function (result, event) {
               
                console.log('result of sendMessages', result);
            }
        );
        
    }

   
    render() {
        return (
            <div>
                 <Route  path='/' component={SmsDashboard}/>
                 
            </div>
        )
    }
}