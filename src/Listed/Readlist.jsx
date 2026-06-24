import React from 'react';
import { Link } from 'react-router'; 
import { IoLocationOutline } from 'react-icons/io5';

const Readlist = ({readbook}) => {
    return (
        <div className="card lg:card-side bg-base-100 border border-gray-100 shadow-xs p-6 flex flex-col lg:flex-row gap-6 items-center rounded-3xl max-w-5xl mx-auto my-4 text-left">
                   
                  
                   <div className="w-full lg:w-56 h-48 bg-gray-50 flex items-center justify-center rounded-2xl p-4 flex-shrink-0">
                       <img 
                           className="h-full object-contain rounded-md" 
                           src={readbook.image} 
                           alt={readbook.bookName} 
                       />
                   </div>
       
                   
                   <div className="flex-grow w-full">
                      
                       <h2 className="text-2xl font-bold font-serif text-gray-900 mb-1">{readbook.bookName}</h2>
                       
                       
                       <p className="text-gray-600 font-medium text-sm mb-4">By : {readbook.author}</p>
       
                       
                       <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm mb-4">
                           <div className="flex items-center gap-2">
                               <span className="font-bold text-gray-800">Tag</span>
                               {readbook.tags.map((tag, index) => (
                                   <span 
                                       key={index} 
                                       className="bg-green-50 text-green-600 font-semibold px-3 py-1 rounded-full text-xs"
                                   >
                                       #{tag}
                                   </span>
                               ))}
                           </div>
                           
                           <div className="flex items-center gap-1.5 text-gray-500 font-medium">
                               <IoLocationOutline className="text-lg" />
                               <span>Year of Publishing: {readbook.yearOfPublishing}</span>
                           </div>
                       </div>
       
                       
                       <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-medium pb-4 mb-4 border-b border-gray-100">
                           <div className="flex items-center gap-2">
                               <span className="text-lg">👥</span> 
                               <span>Publisher: {readbook.publisher}</span>
                           </div>
                           <div className="flex items-center gap-2">
                               <span className="text-lg">📄</span> 
                               <span>Page {readbook.totalPages}</span>
                           </div>
                       </div>
       
                       
                       <div className="flex flex-wrap items-center gap-3">
                        
                           <span className="bg-blue-50 text-blue-500 font-medium px-5 py-2 rounded-full text-sm">
                               Category: {readbook.category}
                           </span>
                           
                         
                           <span className="bg-orange-50 text-orange-500 font-medium px-5 py-2 rounded-full text-sm">
                               Rating: {readbook.rating}
                           </span>
                           
                          
                           <Link 
                               to={`/books/${readbook.bookId}`} 
                               className="btn btn-success text-white font-semibold rounded-full min-h-0 h-10 px-6 hover:bg-green-600 border-none ml-auto lg:ml-0"
                           >
                               View Details
                           </Link>
                       </div>
                   </div>
       
               </div>
    );
};

export default Readlist;