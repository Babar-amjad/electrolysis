import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className=' grid-cols-1 md:grid-cols-2 mx-8 '>
        
        <div className="md:mt-6 mt-4 w-full md:mx-6 mx-2">
            <h1 className='md:text-4xl text-3xl font-semibold '> Electrolysis clinic</h1>
            <p className='md:text-xl text-sm my-6 md:mx-2 mx-0'>Electrolysis hair removal is a popular method of hair removal that has been used for over 100 years. It works by using a small needle to deliver an electric current to the hair follicle. This current destroys the hair follicle, which prevents the hair from growing back.It is less expensive than IPL or Laser treatment. It causes permanent destruction of the hair, so results are excellent. It can be used on fine hair. Effective on light-colored hair. Ideal for facial hair, for example : Eye-brows, upper lips, cheeks, chins, hairline, bridge of the nose, between the eye brows and side burns. Also, on parts of the neck, shoulders, arms, under-arms and abdomen. It is widely used for the removal of awkward hair on moles etc.</p>
            <h1 className='md:text-4xl text-xl font-normal '> Advantages of Electrolysis :</h1>

             <div className='mx-auto my-6'>
          
            <li>It is less expensive than IPL or Laser treatment.</li>
            <li>It causes permanent destruction of the hair, so results are excellent.</li>
            <li>Effective on light-colored hair..</li>
            <li>Ideal for facial hair, for example : Eye-brows, upper lips, cheeks, chins, hairline.</li>
            <li>It is widely used for the removal of awkward hair on moles etc.</li>
          
        </div> 
           <div className='mx-auto my-6'>
           <h1 className='text-2xl font-semibold'>Types of electrolysis clinic</h1>
            <li className='mx-2 text-xl font-semibold my-4'> Galvanic Electrolysis</li>
            <p className='text-xl'>Galvanic electrolysis is the oldest type for of this hair removal. The direct current used extremely effective but very slow.  It creates a chemical change in the follicle to disable the root.This uses direct current electrolysis, which means a direct electric current is passed down a needle into the hair follicle where it creates a chemical reaction. This reaction converts tissue saline into sodium hydroxide, a caustic agent that then destroys the hair bulb</p>
            <li className='mx-2 text-xl font-semibold my-4'> Thermolysis Electrolysis </li>
            <p className='text-xl'>Thermolysis uses shortwave radio frequency or AC current.  Thermolysis causes the water molecules by your hair to rapidly vibrate, which produces heat. When enough heat is created, thermolysis damages the cells that cause hair growth</p>
            <li className='mx-2 text-xl font-semibold my-4'> Blend Electrolysis </li>
            <p className='text-xl'> True to its name, blend combines both galvanic and thermolysis in one treatment. If one type of electrolysis doesn’t kill your unwanted hair the other will. Dana is at an expert level in all modalities.Blend electrolysis involves the application of both direct current and high-frequency current to the hair follicle, creating a dual-action process that targets the root of the hair.</p>
           </div>
        </div>
       
       <div className='mx-auto flex-row'>
        <h1 className='text-2xl font-semibold'>ELECTROLYSIS IS THE ONLY MEDICALLY APPROVED FORM OF PERMANENT HAIR REMOVAL.</h1>
        <img className='justify-center text-center mx-auto my-6' src="https://electrolysis.com.pk/images/electrolysis_steps.jpg" alt="this is an image" srcset="" />
        <p className='mx-6 text-xl w-full'>Your dermatologist or a specially trained technician will insert a thin wire into each of your hair follicles (but not through your skin) in the area you want treated. Then, they'll send a current of electricity down the wire, which heats up and kills the hair follicle as well as the root itself.Electrolysis can be used on any part of the body. No type or volume of body hair is too stubborn for treatment and no body part too embarrassing. Treatment areas include all facial areas, legs, bikini line, chest, nipples, back, abdomen, underarms, fingers, toes and eye brows.</p>
      
       </div>
        {/* <div className="right w-full md:mt-8 mt-4 md:mx-4 mx-1">
            <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwW_Qjch7M1qyjT0J63APZDJm3A08Wp0tnlA&usqp=CAU" alt="" srcset="" />
        </div> */}
       
      </div>
    </div>
  )
}

export default Hero
