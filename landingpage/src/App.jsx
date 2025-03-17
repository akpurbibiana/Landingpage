import React from 'react'
import Button from './components/button'

const App = () => {
  return (
    <div>
      <header className='flex justify-between items-center px-24 py-4'>
        <div className='flex space-x-8'>
          <h1 className='text-orange-300 text-lg font-normal'>Home</h1>
          <h1 className='text-orange-300 text-lg font-normal'>About</h1>
          <h1 className='text-orange-300 text-lg text-normal'>Contact</h1>
        </div>
        <h1 className='text-black-800 font-extrabold'>Landing</h1>
      <Button title="Buy now"/>
      </header>
       {/* BACKGROUND IMAGE */}
       <img src='/herobackground.svg'
        className="w-[50%] object-cover absolute right-0 top-0"
        alt="backgroundimage"
      />
 
      {/* HERO */}
<div className='flex gap-8 h-screen items-center justify-center'>
  {/* INFO */}
  <div className='w-[40%] flex flex-col items-start justify-center px-24'>
    <h2 className='text-3xl text-[#091133] font-semibold'>Introduce Your Product Quickly & Effectively</h2>
    <p className='text-sm text-[#091133] font-medium'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
    mus.</p>
    <p className='text-sm text-[#091133] font-medium py-4'>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim</p>
    <div className='space-x-4 flex items-center'>
    <Button title="Purchase UI Kit"/>
    <Button title="Learn More" white/>
  </div>
  </div>
  
  <div className='w-[60%] flex items-center justify-center'>
    <img src='/heroimage.svg' className='w-[70%] h-[80vh] object-cover alt="hero image"'/>
  </div>

</div>
{/* SECTION TWO */}
<div className='flex gap-8 h-[80vh] items-center justify-center px-24'>
  {/* IMAGE */}
<div className='w-[50%] flex items-center justify-center relative'>
  <img src='/section2image.svg' 
  className='w-[60%] object-cover absolute right-24'/>
</div>
{/* INFO */}
<div className='w-[50%] flex flex-col items-start justify-center'>
  <h2 className='text-3xl text-black font-semibold'>Light, Fast & Powerful</h2>
  <p className='text-sm text-[#091133] font-medium py-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
</div>
</div>

    </div>
  )
}

export default App