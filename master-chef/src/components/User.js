import React, { useEffect } from 'react'

const User = ({name}) => {

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("UseEffect Interval");
    }, 1000);

    //UNMOUNTING 
    return () => {
      clearInterval(timer);
      console.log("UseEffect Return");
    }
  },[])

  return (
    <div className='user-card'>
        <h2>Name: {name}</h2>
        <h3>Location: Noida</h3>
        <h4>Contact: @umeshpal</h4>
    </div>
  )
}

export default User;
