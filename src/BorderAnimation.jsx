import React from "react";

const BorderAnimation = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div
        className="w-[200px] h-[200px] relative bg-orange-300 rounded-full overflow-hidden
        before:absolute before:top-[-50%] before:bottom-[-50%] before:right-[-50%] before:left-[-50%]
        before:bg-[conic-gradient(transparent,transparent,#f0142a)] 
        animate-spin
      "
      >
        <div className="absolute w-[180px] h-[180px] bg-slate-300 rounded-full top-[10px] left-[10px]"></div>
      </div>
    </div>
  );
};

export default BorderAnimation;
