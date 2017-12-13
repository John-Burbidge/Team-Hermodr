import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { withRouter, Route } from 'react-router';
import SmsHistory from '../Components/SmsHistory';


@withRouter
@inject('routingStore')
@observer
export default class HomeComponent extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <a href="">Back to Contract </a>
                <SmsHistory />
            </div>
        )
    }
}