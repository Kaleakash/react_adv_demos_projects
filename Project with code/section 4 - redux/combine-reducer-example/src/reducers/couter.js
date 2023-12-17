 // counter REDUCER
//takes care of all the action related to our counter
// this will take 2 argument
const counterReducer = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + action.payload
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}
export default counterReducer