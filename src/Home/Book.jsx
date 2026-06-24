import React, { use } from 'react';
import { useParams } from 'react-router';
const singlebookdata=fetch('/booksData.json').then(res=>res.json())
const Book = () => {
    const {id }=useParams();
    const singlebook=use(singlebookdata)
    console.log(singlebook)
    const onebook=singlebook.find(book=>book.bookId===Number(id))
    console.log(onebook)
    return (
       <div className="card lg:card-side bg-base-100 shadow-sm container mx-auto">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
    );
};

export default Book;