import React, { useState, useEffect } from 'react';

function StudentOutlet() {
 
  const [count, setCount] = useState(0);

  
  useEffect(() => {
    console.log(`Count is now: ${count}`);
  }, [count]); 

  
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <p>Current Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default StudentOutlet;