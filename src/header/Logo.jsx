import React from "react";
import ImgLogo from "../images/web-logo.svg";

const Logo = () => {
  return (
    <div className="flex justify-start items-center">
      <div className="md:w-[185px] md:h-[44px] w-[134px] h-[34px]">
        <img src={ImgLogo} alt="Logo" />
      </div>
    </div>
  );
};

export default Logo;
