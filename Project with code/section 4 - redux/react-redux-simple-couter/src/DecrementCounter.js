import {useDispatch} from 'react-redux';
// Action Type
const DECREMENT = 'DECREMENT';

// Actions
const decrement = () => ({ type: DECREMENT });

export const DecrementCounter = ()=> {
  const dispatch = useDispatch();

  
  return(
    <div>
          <h3>Decrement Component</h3>
    <input type="button" value="Decrement" onClick={()=>dispatch(decrement())}/>       
    </div>
  )
}

