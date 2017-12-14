import {observable, computed, action} from 'mobx';
import SmsHistory from '../classes/SmsHistory';

class SmsHistoryStore {
  /*  @observable messages = [
        new SmsHistory(1, '12/13/2017', "test", true)
    ] */
    @observable messages = [];

    @action createMessages(incomingMsgs){
        for(const msg of incomingMsgs){
            console.log(msg, this.messages, 'd');
            if(!this.messages.some(x => x.id === msg.Id)){
                const newMsg = new SmsHistory(msg.Id, msg.CreatedDate, msg.Message__c, msg.Is_From_Customer__c, msg.Name);
                this.messages.push(newMsg);
            }
           
        }
    }
    @computed get sortedMessages(){       
        
        const storedMessages = this.messages.sort(function(a,b){
            return new Date(a.date) - new Date(b.date)
        });
        window.scrollTo(0,document.body.scrollHeight);
        return storedMessages;
    }

}

export default SmsHistoryStore