import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-12 h-12 border-4 border-t-teal-500 border-b-teal-500 border-l-gray-200 border-r-gray-200 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
