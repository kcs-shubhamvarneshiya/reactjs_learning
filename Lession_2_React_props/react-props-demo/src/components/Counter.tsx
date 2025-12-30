import React from "react";

const Counter = ({ initialCount = 0 }: { initialCount?: number }) => {
  const [count, setCount] = React.useState<number>(initialCount);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
