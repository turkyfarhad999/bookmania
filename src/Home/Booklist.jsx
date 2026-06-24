import React, { use } from 'react';
import Bookcollectio from './Bookcollectio';
const bookdata=fetch('/booksData.json').then(res=>res.json())
const Booklist = () => {
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
    const book=use(bookdata);
    console.log(book)
    return (
<div className='container mx-auto '>
   <h2 className='text-4xl font-bold text-center my-3'>Book list</h2>
    <div className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:flex justify-center gap-3 '>
    {book.map((bk,index)=><Bookcollectio bk={bk} key={index}></Bookcollectio>)}
 </div>
</div>
    );
};

export default Booklist;