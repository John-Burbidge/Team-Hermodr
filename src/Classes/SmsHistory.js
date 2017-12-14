import {observable, action, computed} from 'mobx';


class SmsHistory {
    @observable id
    @observable date
    @observable msg
    @observable name
    @observable fromClient
    @observable mediaUrl


    constructor(id = '', date = '', message = '', fromClient = false, name, mediaUrl) {
        this.id = id;
        this.date = date;
        this.message = message;
        this.fromClient = fromClient;
        this.name = name;
        this.mediaUrl = mediaUrl;
    }

}

export default SmsHistory;