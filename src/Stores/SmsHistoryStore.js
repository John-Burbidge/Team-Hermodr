import {observable, computed, action} from 'mobx';
import SmsHistory from '../classes/SmsHistory';
import moment from 'moment';
const queryString = require('query-string');

class SmsHistoryStore {
    @observable messages = [
        new SmsHistory(1, '12/13/2017', "test", true, '1', ''),
        new SmsHistory(1, '12/13/2017', "test", true, '1', ''),
        new SmsHistory(1, '12/13/2017', "test", true, '1', ''),
        new SmsHistory(1, '12/13/2017', "test", true, '1', ''),
        new SmsHistory(1, '12/13/2017', "test", true, '1', ''),
        new SmsHistory(1, '12/13/2017', "test", true, '1', ''),
        new SmsHistory(1, '12/13/2017', "test", true, '1', ''),
        new SmsHistory(1, '12/13/2017', "test", true, '1', ''),
        new SmsHistory(1, '12/13/2017', "test", true, '1', ''),
        new SmsHistory(1, '12/13/2017', "test", true, '1', ''),
        new SmsHistory(1, '12/13/2017', "test", false, '1', ''),
        new SmsHistory(1, '12/13/2017', "test", false, '1', ''),
        new SmsHistory(1, '12/13/2017', "test", false, '1', ''),
    ] 
   // @observable messages = [];
    @observable selectedImgUrl = "";
    @observable newRecordValue = ""; 

    @action createMessages(incomingMsgs){
        for(const msg of incomingMsgs){
            if(!this.messages.some(x => x.id === msg.Id)){
                const newMsg = new SmsHistory(msg.Id, msg.CreatedDate, msg.Message__c, msg.Is_From_Customer__c, msg.Name, msg.MediaURL__c);
                this.messages.push(newMsg);
            }
           
        }
    }
    @action onClickOfImgUrl(url){
        console.log('url', url);
        this.selectedImgUrl = url;
    }
    @action closeImg(){
        this.selectedImgUrl = "";
    }
    @computed get sortedMessages(){       
        
        const storedMessages = this.messages.sort(function(a,b){
            return new Date(a.date) - new Date(b.date)
        });
        setTimeout(function(){ 
            const ui = document.getElementById("chat-messages");
           
            ui.scrollTop = ui.scrollHeight - ui.clientHeight;
        },50);
        return storedMessages;
    }
    @action addNewComment(event){
        const that = this;
        const parsedQuery = queryString.parse(location.href);
        Visualforce.remoting.Manager.invokeAction(
            'HackathonCtrl.newMsg', this.newRecordValue, parsedQuery.id,
            function (msg, event) {
             //   const newMsg = new SmsHistory(msg.Id, msg.CreatedDate, msg.Message__c, msg.Is_From_Customer__c, msg.Name, msg.MediaURL__c);
                that.newRecordValue =  "";
            }
        );
       
      
    }
    @action setChange(event){
         this.newRecordValue =   event.target.value;
         
        
    }
}

export default SmsHistoryStore