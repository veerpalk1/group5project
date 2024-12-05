import React , { useState } from 'react'; // Import React and useState
import Calculate from './Calculate'; // Import the Calculate component

function App() {
  const [count, setCount] = useState(0); // Initialize state variable count

  return (
    <>
      <Calculate /> {/* Include the Calculate component */}
      <h1>Hello!, This is group5 project</h1>
      <h2>This is first React Vite project for learning Git workflow</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <p>Current Count: {count}</p>
    </>
  );
}

export default App;
