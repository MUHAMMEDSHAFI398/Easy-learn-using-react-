import React from 'react'
import Logo from '../../Office/Logo/Logo'
import './NavBar.css'
function NavBar() {

    return (
        <div className='parentNav'>
            <div className='d-flex justify-content-between'>
                <Logo />
                <div className=' d-flex flex-column align-items-center'>
                    <h1 className='Nav-title'>Easy learn</h1>
                    <p className='Nav-sub-title'>Re-accredited by NAAC with 'A+' grade</p>
                </div>
                <div class="dropdown">
                    <button className='LoginButton'>Login</button>
                    <div class="dropdown-content">
                        <a href="#">Option</a>
                        <a href="#">Option</a>
                        <a href="#">Option</a>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default NavBar
