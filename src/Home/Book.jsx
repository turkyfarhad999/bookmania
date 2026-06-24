import React, { use, useContext } from 'react';
import { useParams } from 'react-router';
import { DataContext } from '../Context';
const singlebookdata=fetch('/booksData.json').then(res=>res.json())

const Book = () => {
    const {id }=useParams();
    const { handleReadbook, handlewishlisted } = useContext(DataContext);
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
        <button onClick={()=>handleReadbook(onebook)} className="btn btn-outline btn-primary">Add to Readlist</button>
        <button onClick={()=>handlewishlisted(onebook)}className="btn btn-info">Add to Wishlist</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Book;