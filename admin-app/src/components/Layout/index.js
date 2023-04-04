<<<<<<< HEAD
import React from 'react';
import Header from '../Header';
import {Container} from 'react-bootstrap';
const Layout = (props) => {
    return (
        <>
        <Header/>
        {props.children}
        </>
    );
}

export default Layout;
=======
import React, { useLayoutEffect } from 'react'
import Header from '../Header';
/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <>
        <Header />
        {props.children}
    </>
   )

 }

export default Layout;
>>>>>>> adff7bed8222a481dd268f859feb43ade255dc1c
