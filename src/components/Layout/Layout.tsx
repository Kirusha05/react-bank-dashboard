import React, { useState } from 'react'
import Menubar from './Menubar'
import MobileNav from './MobileNav';

const Layout: React.FC = (props) => {
  const [showMenu, setShowMenu] = useState(window.innerWidth >= 768);

  const toggleMenu = () => setShowMenu(prevShow => !prevShow);

  return (
    <>
      <MobileNav toggleMenu={toggleMenu} />
      <Menubar showMenu={showMenu} toggleMenu={toggleMenu} />
      <main className="md:ml-60"> 
        {props.children}
      </main>
    </>
  )
}

export default Layout;
