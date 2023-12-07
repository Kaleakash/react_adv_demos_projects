import useCounter from "./userCouter";
function CouterExample() {
    // Call custom hook `useCounter` to reuse Counter logic
    const [count, setCount] = useCounter(0);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

  export default CouterExample;
