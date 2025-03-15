import React from 'react'

function Button({white,title})  {
  return (
    <button className={`${white ? "border-2 border-orange-200 text-black" : "bg-orange-200 text-black"} px-10 py-1 rounded-md font-medium text-sm`}
    >
    {title}
    </button>
  )
}

export default Button