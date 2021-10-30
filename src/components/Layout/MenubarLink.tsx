import React from "react";
import { NavLink as Link } from "react-router-dom";
import { MenuLink as Props } from "./Menubar";

const MenubarLink: React.FC<Props> = (props) => {
  const Icon = props.icon;

  return (
    <Link
      exact
      to={props.to}
      className="text-sm w-full px-6 py-2 mb-2 text-gray-700 font-bold flex outline-none transition-colors ease-in hover:bg-gray-50"
      activeClassName="border-l-2 border-blue-500 text-blue-500 bg-gray-50"
    >
      <div className="mr-4 text-gray-700">
        <Icon className="h-full" />
      </div>
      <h3>{props.name}</h3>
      {props.unread && (
        <div className="flex-1 flex justify-end">
          <div
            className={`rounded-full px-3 h-full ${
              props.danger ? "bg-red-100 text-red-500" : "bg-indigo-50"
            }`}
          >
            {props.unread}
          </div>
        </div>
      )}
    </Link>
  );
};

export default MenubarLink;
