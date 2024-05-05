import React from 'react';
import backgroundImage from './background.jpg'; // Import image directly from the same folder

const Carousel = () => {
  return (
    <div className="bg-cover bg-center h-screen" style={{backgroundImage: `url('${backgroundImage}')`}}>
     <div>
      <div className="right mx-4">
        <h1 className='md:text-4xl text-2xl md:pt-24 pt-1 mx-4 font-semibold text-orange-300'>Electrolysis Clinic</h1>
        <li className='text-orange-200 md:my-4 my-2 mx-4'>Electrolysis has long been helping people solve the problem of unwanted, even embarrassing, facial and body hair.</li>
        <li className='text-orange-200 md:my-4 my-2 mx-4'>Electrolysis involves using electrical currents to remove hair permanently.</li>
        <li className='text-orange-200 md:my-4 my-2 mx-4'>Clinics equipped with advanced electrolysis technology can offer more efficient and comfortable treatments, often leading to better results</li>
        <li className='text-orange-200 md:my-4 my-2 mx-4'>A welcoming and comfortable environment can make a significant difference in your overall experience during treatments.</li>
        <li className='text-orange-200 md:my-4 my-2 mx-4'>Building a long-term relationship with a trusted electrolysis clinic can ensure ongoing support and maintenance for your hair removal needs.</li>

      </div>
      <div className="left"></div>
     </div>
    </div>
  );
};

export default Carousel;
