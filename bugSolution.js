```javascript
import { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [isUnmounted, setIsUnmounted] = useState(false);

  useEffect(() => {
    // Cleanup function
    return () => {
      console.log('Component unmounted');
      setIsUnmounted(true);
    };
  }, []);

  useEffect(() => {
    console.log('Component rendered:', count);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>Component unmounted: {isUnmounted ? 'true' : 'false'}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default MyComponent;
```