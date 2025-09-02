import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks.jsx";
import { BrowserRouter } from "react-router-dom";

const HeaderContainer = () => {
  return (
    <BrowserRouter>
      <section className="bg-[black] flex h-full">
        <div className="flex justify-center fixed top-1 left-1/2 -translate-x-1/2 z-50 w-[87%] max-w-[1100px]">
          <div className="w-[1200px] px-6 h-[80px] bg-[black] rounded-[16px] shadow-[0_0_20px_0_#FFFFFF1A] flex items-center justify-between">
              <div className="flex items-center gap-x-12">
              <Logo />
              <NavLinks />
            </div>
            <div className="md:w-[200px] md:h-[auto]">
              <div className="hidden lg:flex justify-center bg-[#58595B] text-[white] w-[132px] h-[49px] rounded-[16px] text-[20px] hover:shadow-[0px_4px_50px_0px_#FFFFFF80] transition-all duration-300 hover:bg-[#ffffff] hover:text-[#58595B]">
                <button>Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BrowserRouter>
  );
};

export default HeaderContainer;