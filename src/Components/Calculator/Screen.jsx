import React from "react";

const Screen = () => {
  return (
    <form className="w-full px-4">
      <div className="flex flex-row mb-2 w-full items-center md:text-2xl lg:text-4xl h-8 md:h-12 ">
        <select
          name=""
          id=""
          className="bg-[#808080] w-1/5 md:text-2xl lg:text-4xl h-full"
          style={{ borderRadius: "0.5rem 0rem 0rem 0.5rem" }}
        >
          <option value="" className="">
            COP
          </option>
        </select>
        <input
          type="text"
          className="bg-[#808080] w-4/5 text-right px-4 text-white md:text-2xl lg:text-4xl  font-mono h-full"
          style={{ borderRadius: "0 0.5rem 0.5rem 0" }}
        />
      </div>
      <div className="flex flex-row mb-2 w-full items-center md:text-2xl lg:text-4xl h-8 md:h-12">
        <select
          name=""
          id=""
          className="bg-[#808080] w-1/5 md:text-2xl lg:text-4xl h-full"
          style={{ borderRadius: "0.5rem 0rem 0rem 0.5rem" }}
        >
          <option value="" className="">
            Bs
          </option>
        </select>
        <input
          type="text"
          className="bg-[#808080] w-4/5 text-right px-4 text-white md:text-2xl lg:text-4xl font-mono h-full"
          style={{ borderRadius: "0 0.5rem 0.5rem 0" }}
        />
      </div>
    </form>
  );
};

export default Screen;
