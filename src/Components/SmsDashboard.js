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
            <div className="chat-container">
                <div className="header">
                    <a href={`https://${location.hostname}/${parsedQuery.id}`}>Back to Contract </a>
                    <h3>Client Name: {parsedQuery.clientName}</h3>
                    <h4>Account: {parsedQuery.accountId}</h4>

                </div>
                <div id="chat-messages" className="chat-messages">
                        <SmsHistory />
                     
                </div>
                <div className="chat-buttons">
                    <textarea value={smsHistoryStore.newRecordValue}  onChange={(event) => smsHistoryStore.setChange(event) } />
                    <i className="fa fa-paper-plane-o fa-2x" aria-hidden="true" onClick={() => smsHistoryStore.addNewComment() }></i>
                </div>

                {smsHistoryStore.selectedImgUrl.length > 0 ? <ImageModal /> : null}
            </div>
        )
    }
}