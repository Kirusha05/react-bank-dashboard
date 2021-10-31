import React from "react";

const DashboardTableHeader = () => {
  return (
    <div className="t-row px-8 bg-gray-100 py-5 uppercase text-gray-400 text-xs font-bold rounded-l-3xl lg:rounded-bl-none lg:rounded-t-3xl grid grid-rows-5 grid-flow-col w-36 gap-3 lg:gap-0 lg:w-auto lg:grid-flow-row lg:grid-rows-none lg:grid-cols-custom items-center border-gray-200">
      <p className="text-left">Description</p>
      <p className="text-left">Type</p>
      <p className="text-left">In (£)</p>
      <p className="text-left">Out (£)</p>
      <p className="text-left">Balance (£)</p>
    </div>
  );
};

export default DashboardTableHeader;