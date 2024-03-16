'use client'
import React from 'react'
import { Triangle} from 'react-loader-spinner'
;
const page = () => {
  return (
    <div className=' w-screen h-screen bg-white flex justify-center items-center'>
<Triangle
  visible={true}
  height="80"
  width="80"
  color="red"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  /> </div>
  )
}

export default page
