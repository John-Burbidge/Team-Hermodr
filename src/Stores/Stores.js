import {RouterStore} from 'mobx-react-router';
import SmsHistoryStore from './SmsHistoryStore';

const routingStore = new RouterStore();
const smsHistoryStore = new SmsHistoryStore();


const stores = {
    routingStore,
    smsHistoryStore
}

export default stores;