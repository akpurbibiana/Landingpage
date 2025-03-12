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
    </div>
  )
}

export default App