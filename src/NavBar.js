import React, { useEffect, useState } from 'react'
import './NavBar.css'
import Netflix from './img/netflix.png'
function NavBar() {

    const [show, handleShow] = useState(true);
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(false);
        } else {
            handleShow(true);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className='nav_contents'>
                <img
                    className='nav_logo'
                    src={Netflix}
                    alt='netflix-logo'
                />
                <img
                    className='nav_avatar'
                    src='https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png'
                    alt='netflix-avatar'
                />
            </div>
        </div>
    )
}

export default NavBar