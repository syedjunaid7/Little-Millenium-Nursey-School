import React, { useState } from "react";
import "./text.scss";

export default function Text() {
  const [selectedDiv, setSelectedDiv] = useState(null);

  const handleClick = (index) => {
    if (selectedDiv === index) {
      setSelectedDiv(null);
    } else {
      setSelectedDiv(index);
    }
  };

  return (
    <div
      className={`main-main ${
        selectedDiv === 1 || selectedDiv === 2 || selectedDiv === 3 || selectedDiv === 4 ? "main" : ""
      }`}
    >
      <div
        onClick={() => handleClick(1)}
        className={`d1 ${
          selectedDiv === 1 ? "blur" : selectedDiv === 2 || selectedDiv === 3 || selectedDiv === 4? "blur2" : ""
        }`}
      >
        Click Me
        {selectedDiv === 1 ? <button>Delete</button> : ""}
      </div>
      <div
        onClick={() => handleClick(2)}
        className={`d2 ${
          selectedDiv === 2 ? "blur" : selectedDiv === 1 || selectedDiv === 3 || selectedDiv === 4 ? "blur2" : ""
        }`}
      >
        Click Me
        {selectedDiv === 2 ? <button>Delete</button> : ""}
      </div>

      <div
        onClick={() => handleClick(3)}
        className={`d3 ${
          selectedDiv === 3 ? "blur" : (selectedDiv === 1 ||  selectedDiv === 2 || selectedDiv === 4)? "blur2" : ""
        }`}
      >
        Click Me
        {selectedDiv === 3 ? <button>Delete</button> : ""}
      </div>
      <div
        onClick={() => handleClick(4)}
        className={`d4 ${
          selectedDiv === 4 ? "blur" : (selectedDiv === 1 ||  selectedDiv === 2 || selectedDiv === 3)? "blur2" : ""
        }`}
      >
        Click Me
        {selectedDiv === 4 ? <button>Delete</button> : ""}
      </div>
    </div>
  );
}
