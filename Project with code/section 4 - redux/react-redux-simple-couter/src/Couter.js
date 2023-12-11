import {useDispatch,useSelector} from 'react-redux';
// Action Type

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Actions

const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

export const Couter = ()=> {
  const dispatch = useDispatch();
  const data = useSelector(state => state);
  
  return(
    <div>
    {data}
    <br/>
    <input type="button" value="Increment" onClick={()=>dispatch(increment())}/>
    <input type="button" value="Decrement" onClick={()=>dispatch(decrement())}/>       
    </div>
  )
}

