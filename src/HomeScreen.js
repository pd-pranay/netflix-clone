import React from 'react'
import Banner from './Banner'
import './HomeScreen.css'
import NavBar from './NavBar'
export default function () {
    return (
        <div className='homeScreen'>
            <NavBar />
            <Banner />
            {/* ROWS */}
        </div>
    )
}
