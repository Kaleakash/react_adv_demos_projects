import { legacy_createStore as createStore} from 'redux';
import reducer from './employeeReducer';

const store = createStore(reducer);   


export default store;