import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import {withRouter, Route} from 'react-router'
import SmsDashboard from '../Components/SmsDashboard';

@withRouter
export default class AppContainer extends Component {
    constructor() {
        super();
    }
    componentDidMount() {  
        Visualforce.remoting.Manager.invokeAction(
            'HackathonCtrl.sendMessages',
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