import React from "react";
import Message from "./Message";

const Guide = ({currStep, currStepMessage}) => {

  return (
    <div className="w-full h-20 flex flex-col items-center justify-around py-8 my-4 relative">
      <div className="w-full h-1 border-[#4295e7] border-solid border-[4px] -z-10 absolute top-10"></div>
      <div className="flex flex-row items-center justify-around w-full mt-12 lg:mt-8">
        <span className={`bg-[#001F3F] w-4 h-4 flex justify-center items-center rounded-full p-4 ${currStep === 1 ? "text-white" : "text-[#001f3f]"} font-bold  border-[2px] border-[#ff0000]`}>
          1
        </span>
        <span className={`bg-[#001F3F] w-4 h-4 flex justify-center items-center rounded-full p-4 ${currStep === 2 ? "text-white" : "text-[#001f3f]"} font-bold  border-[2px] border-[#ff0000]`}>
          2
        </span>
        <span className={`bg-[#001F3F] w-4 h-4 flex justify-center items-center rounded-full p-4 ${currStep === 3 ? "text-white" : "text-[#001f3f]"} font-bold  border-[2px] border-[#ff0000]`}>
          3
        </span>
        <span className={`bg-[#001F3F] w-4 h-4 flex justify-center items-center rounded-full p-4 ${currStep === 4 ? "text-white" : "text-[#001f3f]"} font-bold  border-[2px] border-[#ff0000]`}>
          4
        </span>
      </div>
      <Message
        currStep = {currStep}
        currStepMessage = {currStepMessage}
      />
    </div>
  );
};

export default Guide;
