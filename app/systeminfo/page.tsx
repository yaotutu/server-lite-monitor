'use client'
import React, { useEffect } from 'react'
import { getCpuCurrentLoad } from '../lib/systeminfo';

export default function SysteminfoPage() {

  useEffect(() => {

    getCpuCurrentLoad().then((data:any) => {
      console.log(data);
    })
  }, [])
  return (
    <div>SysteminfoPage</div>
  )
}
