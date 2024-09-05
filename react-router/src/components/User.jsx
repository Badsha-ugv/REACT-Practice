import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div>
      <h3>User: {userId}</h3>
    </div>
  )
}

export default User
