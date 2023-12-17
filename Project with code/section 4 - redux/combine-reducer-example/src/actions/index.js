//this function will be used by our /reducers/counter.js file
export const increment = (num) => {
    return {
        //we could name type key anything we want but we shouldnt
        type: 'INCREMENT',
        payload: num
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const handleLoggin = () => {
    return{
        type: "SIGN_IN"
    }
}