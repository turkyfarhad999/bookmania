import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const Bookcollectio = ({bk}) => {
    // "bookId": 1,
    // "bookName": "The Great Gatsby",
    // "author": "F. Scott Fitzgerald",
    // "image": "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
    // "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    // "totalPages": 192,
    // "rating": 4.5,
    // "category": "Classic",
    // "tags": ["Fiction", "Romance"],
    // "publisher": "Scribner",
    // "yearOfPublishing": 1925
    return (
       <div  className="card bg-base-100 w-96 shadow-sm h-full flex flex-col justify-between"> <Link to={`/books/${bk.bookId}`}>
  <figure className='flex items-center justify-center max-w-[70%] mx-auto py-4 bg-gray-50 rounded-2xl mt-6 w-full h-[230px]'>
    <img className='h-full object-contain rounded-xl'
      src={bk.image}
      alt="Shoes" />
  </figure>
  <div className="card-body  py-0 flex flex-col flex-grow">
    <h2 className="card-title  py-0">
      {bk.tags.map((tag,index)=><div key={index} className="badge badge-secondary bg-green-100 text-green-500 border-none">{tag}</div>)}
      
    </h2>
    <p className='font-bold text-2xl  py-0'>{bk.bookName}</p>
    <p className='font-semibold text-[16px] font-sans-'>{bk.author}</p>
    <div className="card-actions justify-between border-t border-dashed border-gray-700 py-5 font-semibold font-[20px]">
      <div className=" border-none">{bk.category}</div>
      <div className="border-none flex justify-center items-center gap-1"><p>{bk.rating}</p> <FaRegStar /></div>
    </div>
  </div>
  </Link>
</div>
    );
};

export default Bookcollectio;