import {observable, action, computed} from 'mobx';


class SmsHistory {
    @observable id
    @observable date
    @observable msg
    @observable fromClient


    constructor(id = '', date = '', message = '', fromClient = false) {
        this.id = id;
        this.date = date;
        this.message = message;
        this.fromClient = fromClient;
    }

}

export default SmsHistory;