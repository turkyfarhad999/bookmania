import React from 'react';
import bannerImage from '../assets/hero_img.jpg'

const Banner = () => {
    return (
       <div>
            <div className="hero bg-base-200 min-h-screen max-w-[80%] mx-auto rounded-3xl my-2">
  <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between ">
    <img
      src={bannerImage}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div className='space-y-4'>
      <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
     
      <button className="btn btn-success">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;