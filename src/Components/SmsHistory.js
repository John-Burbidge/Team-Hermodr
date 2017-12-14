import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { withRouter, Route } from 'react-router';
import chatHistoryStyle from '../Styles/ChatHistoryStyle.scss';
var classNames = require('classnames');
import balloon from '../../node_modules/balloon-css/src/balloon.scss';
import moment from 'moment';


@withRouter
@inject('routingStore', 'smsHistoryStore')
@observer
export default class SmsHistory extends Component {
    constructor() {
        super();
    }
    componentDidMount() {  
       this.getMessages('SMS-00000000');  
       const that = this;
       const smsHistoryStore = that.props.smsHistoryStore;
        setInterval(function(){ 
            const lastMsg = smsHistoryStore.sortedMessages[smsHistoryStore.sortedMessages.length -1];
            that.getMessages(lastMsg.name);

        }, 3 * 1000 ); 
     
    }
    getMessages(name){
        const props = this.props;
        const smsHistoryStore = props.smsHistoryStore;
        Visualforce.remoting.Manager.invokeAction(
            'HackathonCtrl.getMsgs', name,
            function (result, event) {
                smsHistoryStore.createMessages(result);
            }
        );
        
    }

    render() {
        const props = this.props;
        const smsHistoryStore = props.smsHistoryStore;
        return (
            <div>
                <ul>
                    {
                        smsHistoryStore.sortedMessages.map((msg, i) => {
                           const msgStyling = classNames({
                                'client': msg.fromClient,
                                'rba': !msg.fromClient,
                                'message': true
                            });
                            const direction = classNames({
                                'right': msg.fromClient,
                                'left': !msg.fromClient,
                               
                            });
                           const date = moment(msg.date).format('MMM Do YYYY, h:mm:ss a');
                           return <li key={"sms-msg-" + i} className={msgStyling} data-balloon-pos={direction} data-balloon={date}>
                                     {msg.message}
                                </li>    
                        })
                    }
          
                    
                </ul>
            </div>
        )
    }
}