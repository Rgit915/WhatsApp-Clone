import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login/Login';
import SignUp from './Login/SignUp';

const Views = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<SignUp/>}/>
      {/* for any unmatched route render the login page */}
      <Route path="*" element={<Login/>}/>
    </Routes>
  )
}

export default Views