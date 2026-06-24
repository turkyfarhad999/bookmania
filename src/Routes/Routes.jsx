import { createBrowserRouter, Link } from "react-router";
import Base from "../Base/Base";
import Home from "../Home/Home";
import Error from "../Error/Error";
import Book from "../Home/Book";

export const router=createBrowserRouter([
  {
  path: '/', Component:Base,
  errorElement:<div className="min-h-screen flex flex-col items-center justify-center bg-base-100 font-sans text-center px-4">
            <h1 className="text-9xl font-black text-gray-300">404</h1>
            <p className="text-2xl font-bold mt-4 text-base-content">
                Oops! Page Not Found
            </p>
            <p className="text-gray-500 mt-2 max-w-sm">
                Apni je page-ti khujchhen ta ekhone nai ba URL-e kono vul ache.
            </p>
            <Link to="/" className="btn btn-success text-white mt-6 px-6">
                Back to Home
            </Link>
        </div>,
  children:[
    {
     index:true, Component:Home,
     },
     {
         path:"/bo", element:"book"
     },
     {
        path:"/books/:id", Component:Book
     }
     
  ],

 
}
])