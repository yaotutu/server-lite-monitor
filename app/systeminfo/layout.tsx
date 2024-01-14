import React from 'react'

export default function Layout({ children, cpuWiget }: { children: React.ReactNode, cpuWiget: React.ReactNode }) {

  return (

    <div className='flex flex-row bg-gray-50 w-screen h-screen'>
      <div className='h-screen w-1/3 bg-green-200'>
        <div className='h-1/2 bg-yellow-100'>
          cpuWiget
        </div>
        <div>network wiget</div>
      </div>
      <div className='h-screen w-1/3 bg-red-50'>
        <div>
          cpuWiget
        </div>
        <div>network wiget</div>
      </div>
    </div>
  )
}
