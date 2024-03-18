import React from "react";

const Ask = () => {
  return (
    <div className="h-10 bg-gray-400 flex flex-wrap justify-evenly items-center w-[100vw]">
      <div className="w-[75%] bg-gray-800 rounded-md">
        {" "}
        this is the message line
      </div>
      <button>Send</button>
    </div>
  );
};

export default Ask;
