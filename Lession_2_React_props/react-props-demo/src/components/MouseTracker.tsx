import React from "react";

type MouseTrackerProps = {
  render: (position: { x: number; y: number }) => React.ReactNode;
};

const MouseTracker = ({ render }: MouseTrackerProps) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  return (
    <div
      style={{ height: "100vh", border: "1px solid black" }}
      onMouseMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}
    >
      {render(position)}
    </div>
  );
};

export default MouseTracker;
