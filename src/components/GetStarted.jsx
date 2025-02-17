import React from 'react'
import { useNavigate } from 'react-router-dom'

const GetStarted = () => {
    const navigate = useNavigate();
  return (
    <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
        <button className='btn btn-outline-primary me-3'
        onClick={() => navigate('/signup')}
        > Signup </button>
        <button className='btn btn-outline-primary ms-3'
        onClick={() => navigate('/signin')}
        > SignIn </button>
    </div>
  )
}

export default GetStarted