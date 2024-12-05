import  { useState } from 'react';

function App() {
  const [count, setCount] = useState(0); // State to keep track of the count

  return (
    <div>
      <h1>Hello, Welcome to the React App!</h1>
      <h2>This is a basic React app</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <p>Current Count: {count}</p>
    </div>
  );
}

export default App;

