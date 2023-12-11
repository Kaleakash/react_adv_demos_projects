// Store
import { legacy_createStore as createStore} from 'redux'
import { counterReducer } from './couterReducer';
export const couterStore = createStore(counterReducer);
