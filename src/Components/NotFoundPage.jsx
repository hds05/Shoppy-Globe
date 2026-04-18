import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

function NotFoundPage() {
  const err = useRouteError();
  console.log(err);

  return (
    <div className='flex relative justify-center items-center h-screen p-6 '>
      <div className='errMsg  shadow-[0px_5px_10px_gray] z-20 p-4 rounded-2xl text-center bg-white'>
        <img src="/404.gif" className='w-100' loading='lazy' alt="error-gif" />
        <h1 className='text-2xl'>
          {err.status}: {err.statusText}
        </h1>
        {err.error?err.error.message:'Something went worng'}
        <div className='mt-2 p-2'>
          <Link to={'/'} className='p-2 rounded-2xl bg-[rgba(9_0_31)] text-white cursor-pointer'>Back to Home</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage