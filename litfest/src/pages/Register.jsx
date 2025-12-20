import { Link } from 'react-router-dom'
import React from 'react'
import Header from '../components/Header/Header'

const Register = () => {
    return (
        <div>
        <Header />
        <Link to="registration-form">Registration Form</Link>
    </div>
  )
}

export default Register