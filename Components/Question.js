import React from "react";

const modules = [1, 2, 3 ]
const Question = () => {
  return (
    <div>
        <div>
        {modules.map(number => (
          <div>{number}</div>
        ))}
      </div>
    </div>
  );
};
export default Question;
