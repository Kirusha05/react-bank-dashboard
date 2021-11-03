import React from "react";
import { RiHome2Line } from "react-icons/ri"; // Home Icon
import { VscGraph } from "react-icons/vsc"; // Transactions Icon
import { FiMessageCircle } from "react-icons/fi"; // Messages Icon
import { BiBookmarks } from "react-icons/bi"; // Offers Icon
import { HiOutlineUsers } from "react-icons/hi"; // Profile Icon
import { FiSettings } from "react-icons/fi"; // Settings Icon
import { IoMdNotificationsOutline } from "react-icons/io"; // Notifications Icon
import { HiOutlineUser } from "react-icons/hi"; // Account Icon
import { RiLogoutBoxLine } from "react-icons/ri"; // Logout Icon
import { MdClose } from "react-icons/md"; // Logout Icon

import Logo from "../../assets/simsec-logo.png";
import MenubarLinkGroup from "./MenubarLinkGroup";

import { MenuLink } from "./MenubarLink";

interface MenuLinksConfig {
  main: MenuLink[];
  control: MenuLink[];
  account: MenuLink[];
}

const MENU_LINKS_CONFIG: MenuLinksConfig = {
  main: [
    { icon: RiHome2Line, name: "Dashboard", to: "/" },
    { icon: VscGraph, name: "Transactions", to: "/transactions" },
    { icon: FiMessageCircle, name: "Messages", to: "/messages", unread: 6 },
    { icon: BiBookmarks, name: "Offers", to: "/offers" },
    { icon: HiOutlineUsers, name: "Profile", to: "/profiles" },
  ],
  control: [
    { icon: FiSettings, name: "Settings", to: "/settings" },
    {
      icon: IoMdNotificationsOutline,
      name: "Notifications",
      to: "/notifications",
      unread: 23,
      danger: true,
    },
  ],
  account: [
    { icon: HiOutlineUser, name: "Account", to: "/account" },
    { icon: RiLogoutBoxLine, name: "Logout", to: "/logout" },
  ],
};

interface MenuProps {
  showMenu: boolean;
  toggleMenu: () => void;
}

const Menubar: React.FC<MenuProps> = (props) => {
  return (
    <div className={`fixed z-50 top-0 left-0 h-screen w-full md:w-60 border-r border-gray-200 flex flex-col justify-start bg-white px-12 sm:px-24 pb-20 md:pb-2 md:px-0 ${props.showMenu ? '' : 'hidden'} md:flex`}>
      <MdClose className="md:hidden absolute top-10 right-12 sm:right-24 text-3xl cursor-pointer" onClick={props.toggleMenu} />
      {/* Main Logo */}
      <div className="w-full py-8 ml-12">
        <img src={Logo} className="h-12" alt="SimSec logo" />
      </div>
      {/* Main Links (Dashboard, Messages) */}
      <nav className="w-full" aria-label="Main links">
        <MenubarLinkGroup onClick={props.toggleMenu} links={MENU_LINKS_CONFIG.main} />
      </nav>
      {/* Separator */}
      <div className="mx-6 mt-3 mb-6 w-auto h-px bg-gray-200"></div>
      {/* Control links */}
      <nav className="w-full" aria-label="Control links">
        <MenubarLinkGroup onClick={props.toggleMenu} links={MENU_LINKS_CONFIG.control} />
      </nav>
      {/* Account links */}
      <nav
        className="w-full flex-1 flex flex-col justify-end"
        aria-label="Control links"
      >
        <MenubarLinkGroup onClick={props.toggleMenu} links={MENU_LINKS_CONFIG.account} />
      </nav>
    </div>
  );
};

export default Menubar;
