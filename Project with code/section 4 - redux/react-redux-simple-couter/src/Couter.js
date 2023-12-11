import {useSelector} from 'react-redux';

export const Couter = ()=> {

  const data = useSelector(state => state);
  
  return(
    <div>
      <h3>Counter Component</h3>
    <p>Counter value in Counter component {data}</p>
    </div>
  )
}

