import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { withRouter, Route } from 'react-router';
import SmsHistory from '../Components/SmsHistory';
const queryString = require('query-string');
import ImageModal from '../Components/ImageModal.js';


@withRouter
@inject('routingStore', 'smsHistoryStore')
@observer
export default class HomeComponent extends Component {
    constructor() {
        super();
    }
    componentDidMount() { 

     }
    render() {
        const parsedQuery = queryString.parse(location.href);
        const props = this.props;
        const smsHistoryStore = props.smsHistoryStore;
        return (
            <div>
                <a href={`https://${location.hostname}/${parsedQuery.id}`}>Back to Contract </a>
                <SmsHistory />
                {smsHistoryStore.selectedImgUrl.length > 0 ? <ImageModal /> : null}
            </div>
        )
    }
}