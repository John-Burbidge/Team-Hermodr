import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { withRouter, Route } from 'react-router';
import SmsHistory from '../Components/SmsHistory';
const queryString = require('query-string');

@withRouter
@inject('routingStore')
@observer
export default class HomeComponent extends Component {
    constructor() {
        super();
    }
    render() {
        const parsedQuery = queryString.parse(location.href);
        console.log(location.hostname);
        return (
            <div>
                <a href={`https://${location.hostname}/${parsedQuery.id}`}>Back to Contract </a>
                <SmsHistory />
            </div>
        )
    }
}