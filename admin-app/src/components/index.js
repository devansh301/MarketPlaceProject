import React, { useLayoutEffect } from 'react'

/**
* @author
* @function Header
**/

export const Layout = (props) => {
  return(
    <>
        <Header />
        {props.children}
    </>
   )

 }

 export default Layout;