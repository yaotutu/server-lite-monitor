'use client'
import React, { useEffect } from 'react'
import { getSystemStaicInfo } from '../lib/systeminfo';

export default function SysteminfoPage() {

  useEffect(() => {
    console.log("run====>", window)

    getSystemStaicInfo().then((data) => {
      console.log(data);
    })
  }, [])
  return (
    <div>SysteminfoPage</div>
  )
}
