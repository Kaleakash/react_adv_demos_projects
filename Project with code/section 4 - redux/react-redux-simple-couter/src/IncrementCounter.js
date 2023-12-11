import {useDispatch} from 'react-redux';
// Action Type
const INCREMENT = 'INCREMENT';
// Actions
const increment = () => ({ type: INCREMENT });

export const IncrementCounter = ()=> {
  const dispatch = useDispatch();  
  return(
    <div>
        <h3>Increment Component</h3>
    <input type="button" value="Increment" onClick={()=>dispatch(increment())}/>
    </div>
  )
}

