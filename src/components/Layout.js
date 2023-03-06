import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const layout = () => {
    return (
        <Fragment>
            <Header />
              <Outlet />
            <Footer/>
        </Fragment>
    )
}

export default layout