import React from 'react'
import {Routes, Route } from 'react-router-dom'
import HomeStudent from '../Pages/Student/HomeStudent'
import LoginStudent from '../Pages/Student/LoginStudent'

const StudentRoutes = () => {
  return (
    <Routes>

        <Route path="/" element={<LoginStudent/>} ></Route>
        
        <Route path="/home" element={<HomeStudent/>} ></Route>

    </Routes>
  )
}

export default StudentRoutes
