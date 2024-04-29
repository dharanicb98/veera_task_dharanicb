import React from "react";

const PageHeader = ({ title}) => (
  <div className="flex justify-between items-center text-md md:text-xl md:w-[30%] m-3 mt-6 ">
    <h1 className="text-2xl font-semibold">{title}</h1>
  </div>
);

export default PageHeader;
