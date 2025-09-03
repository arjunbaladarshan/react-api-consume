import React, { useEffect, useState } from 'react'

function DemoEffect() {
  const [number, setNumber] = useState(0);

  useEffect(()=>{
    let intervalId = setInterval(()=>{
      setNumber(number+1);
    },1000);
    console.log(intervalId)

    return () => clearInterval(intervalId)
  })

  return (
    <h1>DemoEffect = {number}</h1>
  )
}

export default DemoEffect