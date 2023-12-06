import { useState,useEffect} from 'react';
function useCounter(intialCount = 0){
    const [count, setCount] = useState(intialCount);
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
      document.title = `You clicked ${count} times`;
    });
    
    return [count, setCount];
  }

  export default useCounter;