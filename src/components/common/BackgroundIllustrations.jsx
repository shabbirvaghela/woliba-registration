import React from "react";
import vector1 from "../../assets/bg-vector-1.svg";
import vector2 from "../../assets/bg-vector-2.svg";
import vector3 from "../../assets/bg-vector-3.svg";
import vector4 from "../../assets/bg-vector-4.svg";
import vector5 from "../../assets/bg-vector-5.svg";
import vector6 from "../../assets/bg-vector-6.svg";
import vector7 from "../../assets/bg-vector-7.svg";
import vector8 from "../../assets/bg-vector-8.svg";
function BackgroundIllustrations() {
  return (
    <div className="pointer-events-none">
      <img
        src={vector1}
        alt="Background Vector"
        className="absolute top-[3%] left-1/3 w-[11%]"
      />
      <img
        src={vector2}
        alt="Background Vector"
        className="absolute top-[3%] left-[65%] w-[11%]"
      />
      <img
        src={vector3}
        alt="Background Vector"
        className="absolute top-[20%] left-0 w-[12%]"
      />
      <img
        src={vector4}
        alt="Background Vector"
        className="absolute top-[40%] right-[11%] w-[11%]"
      />
      <img
        src={vector5}
        alt="Background Vector"
        className="absolute right-0 bottom-0 w-[11%]"
      />
      <img
        src={vector6}
        alt="Background Vector"
        className="absolute top-[40%] left-1/12 w-[13%]"
      />
      <img
        src={vector7}
        alt="Background Vector"
        className="absolute bottom-0 left-0 w-[13%]"
      />
      <img
        src={vector8}
        alt="Background Vector"
        className="absolute top-[30%] right-0 w-[12%]"
      />
    </div>
  );
}

export default BackgroundIllustrations;
