import React from 'react';
import { items } from '../component/servicesData';

const Services = () => {
  return (
    <div>
      <div className='justify-center text-center mt-6'>
        <h1 className='text-4xl font-semibold mb-6'>All Services</h1>
      </div>
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-2 my-4 mx-2'>
        {items.map((item, index) => {
          return (
            <div className='shadow-2xl' key={index}>
              <img className='w-full h-auto overflow-hidden rounded-lg' src={item.url} alt="" />
              <h1 className='text-3xl my-5 mx-2'>{item.tittle}</h1>
              <p className='text-lg mx-1'>{item.des}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
