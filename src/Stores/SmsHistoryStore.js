import {observable, computed, action} from 'mobx';
import SmsHistory from '../classes/SmsHistory';

class SmsHistoryStore {
  /*  @observable messages = [
        new SmsHistory(1, '12/13/2017', "test", true)
    ] */
    @observable messages = [];
    @observable selectedImgUrl = "";

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
        setTimeout(function(){ window.scrollTo(0,document.body.scrollHeight); + 100000}, 1000);
        return storedMessages;
    }

}

export default SmsHistoryStore