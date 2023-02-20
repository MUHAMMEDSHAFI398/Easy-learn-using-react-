import React from 'react'
import './Section3.css'

function Section3() {
    return (
        <div className='bg3'>
            <div className='d-flex justify-content-center mt-5'>
                <h3>Gallary</h3>

            </div>
            <div className='paraentSection3 d-flex flex-wrap justify-content-between mt-3 mb-5 '>
                <img className='gallary-image' src="/images/lab.jpeg" alt="" />
                <img className='gallary-image' src="/images/library.jpeg" alt="" />
                <img className='gallary-image' src="/images/pic5.jpeg" alt="" />
                <img className='gallary-image' src="/images/convo.jpeg" alt="" />
                <img className='gallary-image' src="/images/pic1.jpeg" alt="" />
                <img className='gallary-image' src="/images/pic2.jpeg" alt="" />
                <img className='gallary-image' src="/images/pic3.jpeg" alt="" />
                <img className='gallary-image' src="/images/pic4.jpeg" alt="" />
            </div>
        </div>
    )
}

export default Section3

