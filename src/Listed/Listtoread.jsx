import React, { useContext } from 'react';
import { DataContext } from '../Context';
import Readlist from './Readlist';

const Listtoread = () => {
    const {readlisted}=useContext(DataContext)
    console.log(readlisted)
    if(readlisted.length==0){
        return(

        <div className='font-bold text-5xl container mx-auto text-center p-40 bg-gray-200 my-3 rounded-4xl'>No book added to read list</div>
        );
    }
   else {return (
        <div className='container mx-auto'>
           {readlisted.map((readbook,index)=><Readlist readbook={readbook} key={index}></Readlist>)}
        </div>
    );}
};

export default Listtoread;