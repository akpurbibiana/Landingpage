import React from 'react'

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
        <button className='bg-orange-200 text-black px-10 py-1 rounded-md font-medium'>Buy now</button>
      </header>

      {/* HERO */}
<div className='flex gap-8 bg-orange-200 h-screen items-center justify-center'>
  <div className='w-[40%]'>
    <h2>Introduce Your Product Quickly & Effectively</h2>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim</p>
  </div>
  <div className='w-[60%]'>
    <img src='/heroimage.svg' className='w-[70%] h-[350px]'/>
  </div>

</div>

    </div>
  )
}

export default App