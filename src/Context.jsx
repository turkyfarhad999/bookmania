import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
export const DataContext=createContext(null)
const Context = ({children}) => {
    const [readlisted, setReadlisted] = useState([]);
    const [wishlisted, setWishlisted] = useState([]); 
    const handleReadbook = (book) => {
        
        const isExist = readlisted.find(b => b.bookId === book.bookId);
        if (!isExist) {
            setReadlisted([...readlisted, book]);
            toast.success("added successfylly")
        } else {
            toast.error("This book is already in your read list!");
        }
    };
    const handlewishlisted = (book) => {
        const isExist = wishlisted.find(b => b.bookId === book.bookId);
        if (!isExist) {
            setWishlisted([...wishlisted, book]);
            toast.success("added successfylly")
        } else {
            toast.error("This book is already in your wishlist!");
        }
    };
    const datatosend = { 
        readlisted, 
        wishlisted, 
        handleReadbook, 
        handlewishlisted 
    };
    console.log(readlisted)
    return (
        <DataContext.Provider value={datatosend}>
            {children}
        </DataContext.Provider>
    );
};

export default Context;