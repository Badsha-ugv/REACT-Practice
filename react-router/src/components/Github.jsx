import React, { useEffect, useState } from 'react'

function Github() {

  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('https://api.github.com/users/badsha-ugv')
    .then(response=> response.json())
    .then(data => {
      
      console.log(data)
      setData(data)
    })
  },[])
  return (
    <div>
        <h3>Github Followers: {data.followers}</h3>
        <p>Github Bio: {data.bio}</p>
        <span>{data.avatar_url}</span>
        <img src="{data.avatar_url}" alt="" className='text-center' width={300} />
    </div>
  )
}

export default Github
