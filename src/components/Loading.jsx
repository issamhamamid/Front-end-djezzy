import React from 'react'

function Loading() {
  return (
      <div className='flex flex-wrap justify-center items-center h-[100vh] font-medium bg-red-400 text-6xl'>
          <p className='animate-pulse ease-in-out'>Chargement ...</p>
    </div>
  )
}

export default Loading