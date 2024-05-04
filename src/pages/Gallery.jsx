import React from 'react';

const Gallery = () => {
  const gallery = [
    {
      url: 'https://www.royalcosmeticsurgery.com.pk/wp-content/uploads/2022/07/Best-Electrolysis-Hair-Removal-in-Islamabad-1.jpg',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4vcEmjHLJK1olWx3CgvfL0Mn4qKQZWJQkkmpyEmpf_ROkfF7QZcWPvmHuf2m6zeMEOas&usqp=CAU',
    },
    {
      url: 'https://media.istockphoto.com/id/2063090596/photo/beautician-doing-epilation-procedure-for-unwanted-hair-wax-epilation-in-female-hand.jpg?s=612x612&w=0&k=20&c=YAzOOQ_b6rJodpgvwjzqtFMntin_NSR7-XJKneK1CSc=',
    },
    {
      url: 'https://electrolysis.com.pk/images/beforeafter/ba3.jpeg',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY64zLcqP9706JYlzE4hM7q0YHKmDbceIRMA&s',
    },
    {
      url: 'https://media.istockphoto.com/id/1397420669/photo/young-man-coming-to-otorhinolaryngologist-with-complaints.jpg?s=612x612&w=0&k=20&c=cQzhZIiQt0Z18oJANUfaVzCNI6ssRR9nOezb_GIcMP0=',
    },
    {
      url: 'https://media.istockphoto.com/id/1300477379/photo/young-woman-is-having-hair-removal-treatment-with-medical-laser-on-woman-arm.jpg?s=612x612&w=0&k=20&c=-93sCCfEvx-uJsrn_CkWhdqUqYaEfuyNrX8Huo6pyeY=',
    },


    {
      url: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
    },


    {
      url: 'https://images.unsplash.com/photo-1610402601271-5b4bd5b3eba4?dpr=1&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8TV9iWUVSV29NUUV8fGVufDB8fHx8fA%3D%3D',
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1661645574574-d8d7d2a6d5d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wzfHx8ZW58MHx8fHx8',
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1661668784711-347edb32b641?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGVsZWN0cmVvbHlzaXMlMjBjbGluaWMlMjBmYWNpYWx8ZW58MHx8MHx8fDA%3D',
    },

  ];

  return (
    <div className='mx-1'>
      
      <div className='grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-2 '>
        {gallery.map((pic, index) => (
          <img className=' w-full h-webkit-fill-available mt-2' key={index} src={pic.url} alt={`Gallery ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
