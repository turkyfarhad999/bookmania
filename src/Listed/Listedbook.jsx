import React from 'react';
import { NavLink, Outlet } from 'react-router';

const Listedbook = () => {
    return (
        <div>
            <div className='bg-gray-300 container mx-auto py-10 text-center font-bold text-4xl my-2 rounded-2xl'>
                Books
            </div>
            <div className='container mx-auto flex justify-center items-center my-10'>
                <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="btn m-1">Sort By</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Pages</a></li>
    <li><a>Rating</a></li>
  </ul>
</div>
            </div>
           <div className='container mx-auto flex gap-2'>
            <NavLink className="btn btn-neutral btn-outline">Read Books</NavLink>
            <NavLink to={'wishlist'} className="btn btn-neutral btn-outline">Wishlist Book</NavLink>
           </div>
         <Outlet></Outlet>
        </div>
    );
};

export default Listedbook;