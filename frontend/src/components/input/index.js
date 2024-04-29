import React from "react";

function Input({
  labeltitle,
  className,
  labelStyle,
  inputStyle,
  value,
  handleOnChange,
  type,
}) {
  return (
    <div className={`flex pb-2 mx-auto ${inputStyle}`}>
      <label className={`text-slate-700 text-sm md:text-xl ${labelStyle}`}>{labeltitle}</label>
      <p className="w-1/2">
        <input
          className={`placeholder:italic placeholder:text-slate-500 block bg-white border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm shadow-primary focus:outline-none focus:border-red-300 focus:ring-red-300 focus:ring-1 sm:text-sm ${className}`}
          type={type}
          value={value}
          onChange={(e) => handleOnChange(e.target.value)}
        />
      </p>
    </div>
  );
}

export default Input;
