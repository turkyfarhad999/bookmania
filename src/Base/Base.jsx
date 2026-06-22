import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';

const Base = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Base;