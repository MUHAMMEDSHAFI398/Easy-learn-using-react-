import React from 'react'
import Logo from '../../Office/Logo/Logo'
import './NavBar.css'
function NavBar() {

    return (
        <div className='parentNav'>
            <div className='d-flex flex-wrap justify-content-between'>
                <Logo />
                <div className=' d-flex flex-column align-items-center'>
                    <h1 className='Nav-title'>Easy learn</h1>
                    <p className='Nav-sub-title'>The right track towards the goal</p>
                </div>
                <div class="dropdown">
                    <button className='LoginButton'>Login</button>
                    <div class="dropdown-content">
                        <a href="/office">Office login</a>
                        <a href="/">Teacher login</a>
                        <a href="/">Student login</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NavBar
