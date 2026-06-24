import React from 'react';
import { Link } from 'react-router'; 
import { IoLocationOutline } from 'react-icons/io5';
// {
//     "bookId": 1,
//     "bookName": "The Great Gatsby",
//     "author": "F. Scott Fitzgerald",
//     "image": "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
//     "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
//     "totalPages": 192,
//     "rating": 4.5,
//     "category": "Classic",
//     "tags": ["Fiction", "Romance"],
//     "publisher": "Scribner",
//     "yearOfPublishing": 1925
//   },
const Wishdata = ({wishbook}) => {

    return (
        <div className="card lg:card-side bg-base-100 border border-gray-100 shadow-xs p-6 flex flex-col lg:flex-row gap-6 items-center rounded-3xl max-w-5xl mx-auto my-4 text-left">
            
            
            <div className="w-full lg:w-56 h-48 bg-gray-50 flex items-center justify-center rounded-2xl p-4 flex-shrink-0">
                <img 
                    className="h-full object-contain rounded-md" 
                    src={wishbook.image} 
                    alt={wishbook.bookName} 
                />
            </div>

           
            <div className="flex-grow w-full">
               
                <h2 className="text-2xl font-bold font-serif text-gray-900 mb-1">{wishbook.bookName}</h2>
                
               
                <p className="text-gray-600 font-medium text-sm mb-4">By : {wishbook.author}</p>

               
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm mb-4">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-800">Tag</span>
                        {wishbook.tags.map((tag, index) => (
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
                        <span>Year of Publishing: {wishbook.yearOfPublishing}</span>
                    </div>
                </div>

                
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-medium pb-4 mb-4 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">👥</span> {/* অথবা <FiUsers /> */}
                        <span>Publisher: {wishbook.publisher}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-lg">📄</span> {/* অথবা <MdOutlineFindInPage /> */}
                        <span>Page {wishbook.totalPages}</span>
                    </div>
                </div>

                
                <div className="flex flex-wrap items-center gap-3">
              
                    <span className="bg-blue-50 text-blue-500 font-medium px-5 py-2 rounded-full text-sm">
                        Category: {wishbook.category}
                    </span>
                    
                
                    <span className="bg-orange-50 text-orange-500 font-medium px-5 py-2 rounded-full text-sm">
                        Rating: {wishbook.rating}
                    </span>
                    
                   
                    <Link 
                        to={`/books/${wishbook.bookId}`} 
                        className="btn btn-success text-white font-semibold rounded-full min-h-0 h-10 px-6 hover:bg-green-600 border-none ml-auto lg:ml-0"
                    >
                        View Details
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Wishdata;