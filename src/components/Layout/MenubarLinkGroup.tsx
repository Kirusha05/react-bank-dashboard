import React from "react";
import MenubarLink from "./MenubarLink";

import { MenuLink } from "./MenubarLink";

const MenubarLinkGroup: React.FC<{ links: MenuLink[], onClick: () => void }> = (props) => {
  return (
    <>
      {props.links.map((link) => (
        <MenubarLink
          key={link.name}
          icon={link.icon}
          name={link.name}
          to={link.to}
          unread={link.unread}
          danger={link.danger}
          onClick={props.onClick}
        />
      ))}
    </>
  );
};

export default MenubarLinkGroup;
