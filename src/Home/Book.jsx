import React, { use } from 'react';
import { useParams } from 'react-router';
const singlebookdata=fetch('/booksData.json').then(res=>res.json())
// "bookId": 1,
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
const Book = () => {
    const {id }=useParams();
    const singlebook=use(singlebookdata)
    console.log(singlebook)
    const onebook=singlebook.find(book=>book.bookId===Number(id))
    console.log(onebook)
    return (
       <div className="card lg:card-side bg-base-100 shadow-sm container mx-auto flex max-w-[60%]">
 <div className='flex-1 flex justify-center items-center'>
   <figure className='max-w-[70%] h-[300px] rounded-3xl ' >
    <img
      src={onebook.image}
      alt="Album" />
  </figure>
 </div>
  <div className="card-body flex-1">
    <h2 className="card-title text-4xl">{onebook.bookName}</h2>
    <p className='border-b border-dashed border-gray-700 text-[20px] font-semibold font-sans py-2'>By: {onebook.author}</p>
    <p className='border-b border-dashed border-gray-700 font-semibold font-sans py-2'>{onebook.category}</p>
    <p className='font-semibold font-sans py-2'>Review: {onebook.review}</p>
    <p className='border-b border-dashed border-gray-700 py-5 font-semibold '>Tags {onebook.tags.map((tag,index)=><span className='mx-3 text-green-500 bg-green-100 rounded-3xl p-2 font-bold' key={index}>{tag}</span>)}</p>
    <div className="card-actions flex-col gap-3 ">
      <pre className='font-bold'>Number of pages:          {onebook.totalPages}</pre>
      <pre className='font-bold'>publisher:                         {onebook.publisher}</pre>
      <pre  className='font-bold'>year Of Publishing:        {onebook.yearOfPublishing}</pre>
      <pre className='font-bold'>Rating:                                {onebook.rating}</pre>
      <div className='flex gap-2'>
        <button className="btn btn-outline btn-primary">Read</button>
        <button className="btn btn-info">Wishlist</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Book;