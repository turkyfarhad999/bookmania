import React, { useContext } from 'react';
import { DataContext } from '../Context';
import Wishdata from './Wishdata';

const Wish = () => {
   const{wishlisted}=useContext(DataContext)
   console.log("wished",wishlisted)
   if(wishlisted.length==0){
        return(

        <div className='font-bold text-5xl container mx-auto text-center p-40 bg-gray-200 my-3 rounded-4xl'>No book added to wish list</div>
        );
    }
   else{return (
        <div className='container mx-auto'>
           {wishlisted.map((wishbook,index)=><Wishdata wishbook={wishbook} key={index}></Wishdata>)}
        </div>
    );}
};

export default Wish;