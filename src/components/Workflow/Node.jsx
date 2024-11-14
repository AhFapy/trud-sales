// Node.jsx
import React from "react";

const Node = React.forwardRef(({ text, className = "", style = {} }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex items-center justify-center w-32 h-20 text-white rounded-lg shadow-lg text-center ${className}`}
      style={style}
    >
      {text}
    </div>
  );
});

export default Node;
