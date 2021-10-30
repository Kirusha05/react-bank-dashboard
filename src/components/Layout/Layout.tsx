import React from 'react'
import Menubar from './Menubar'

const Layout: React.FC = (props) => {
  return (
    <>
      <Menubar />
      <main className="ml-60"> 
        {props.children}
      </main>
    </>
  )
}

export default Layout;
