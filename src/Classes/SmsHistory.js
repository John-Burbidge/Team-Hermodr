import {observable, action, computed} from 'mobx';


class SmsHistory {
    @observable id
    @observable date
    @observable msg
    @observable name
    @observable fromClient


    constructor(id = '', date = '', message = '', fromClient = false, name) {
        this.id = id;
        this.date = date;
        this.message = message;
        this.fromClient = fromClient;
        this.name = name;
    }

}

export default SmsHistory;