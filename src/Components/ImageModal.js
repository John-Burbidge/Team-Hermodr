import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { withRouter, Route } from 'react-router';


@withRouter
@inject('routingStore', 'smsHistoryStore')
@observer
export default class ImageModal extends Component {
    constructor() {
        super();
    }
    render() {
        const props = this.props;
        const smsHistoryStore = props.smsHistoryStore;
        return (
            <div id="myModal" className="modal">
                    <span className="close" onClick={() => smsHistoryStore.closeImg()}>&times;</span>

                    <img className="modal-content" src={smsHistoryStore.selectedImgUrl} />

                    <div id="caption"></div>
            </div>
                )
    }
}