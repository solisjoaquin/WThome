import React from "react";

const modules = [1, 2, 3, 4, 5];

const SideContainer = () => {
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
export default SideContainer;
