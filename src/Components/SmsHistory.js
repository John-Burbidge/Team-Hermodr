import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { withRouter, Route } from 'react-router';
import chatHistoryStyle from '../Styles/ChatHistoryStyle.scss';
var classNames = require('classnames');
import balloon from '../../node_modules/balloon-css/src/balloon.scss';
import moment from 'moment';
import fontAwesome from '../../node_modules/font-awesome/css/font-awesome.css';
const queryString = require('query-string');

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
          
        }, 2 * 1000 ); 
       
  
     
    }
    getMessages(name){
		const parsedQuery = queryString.parse(location.href);
        const props = this.props;
        const smsHistoryStore = props.smsHistoryStore;
        Visualforce.remoting.Manager.invokeAction(
            'HackathonCtrl.getMsgs', name, parsedQuery.id,
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
                    <ul id="ui-list">
                        {
                            smsHistoryStore.sortedMessages.map((msg, i) => {
                            const msgStyling = classNames({
                                    'client': msg.fromClient,
                                    'client-no-bubble': msg.mediaUrl !== undefined && msg.mediaUrl.length > 0,
                                    'rba': !msg.fromClient,
                                    'rba-no-bubble': msg.mediaUrl !== undefined && msg.mediaUrl.length > 0,
                                    'message': true,

                                });
                                const direction = classNames({
                                    'right': msg.fromClient,
                                    'left': !msg.fromClient,
                                
                                });
                            const date = moment(msg.date).format('MMM Do YYYY, h:mm:ss a');
                            return <li key={"sms-msg-" + i} className={msgStyling} data-balloon-pos={direction} data-balloon={date}>
                                        { msg.mediaUrl !== undefined && msg.mediaUrl.length > 0 ? <img className="received-imgs" onClick={() => smsHistoryStore.onClickOfImgUrl(msg.mediaUrl)} src={msg.mediaUrl} /> : msg.message}
                                    </li>    
                            })
                        }
            
                        
                    </ul>
            </div>
        )
    }
}