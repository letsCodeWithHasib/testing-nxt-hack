import React from "react";

const TooltipExample = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative group">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md">
          Hover Over Me
        </button>
        <div className="absolute left-1/2 -top-12 w-48 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-sm py-2 px-3 rounded-lg shadow-md">
          This is a cloudy message ☁️
        </div>
      </div>
    </div>
  );
};

export default TooltipExample;
