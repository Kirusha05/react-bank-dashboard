import React from "react";
import Logo from "../../assets/simsec-logo.png";
import { MdMenu } from "react-icons/md";

const MobileNav: React.FC<{ toggleMenu: () => void }> = (props) => {
  return (
    <div
      className="h-16 flex px-8 items-center justify-between border-b border-gray-200 md:hidden"
      onClick={props.toggleMenu}
    >
      <img src={Logo} className="h-8" alt="SimSec logo" />
      <MdMenu className="text-3xl cursor-pointer" />
    </div>
  );
};

export default MobileNav;
