import React from 'react'
import './Section1.css'

function Section1() {
    return (
        <div className='bg1'>
            <img className='instituteImage' src="/images/institute.jpg" alt="" />
            <div className='paraentSection1 d-flex flex-wrap justify-content-between'>
                <div className='para1'>
                    <h3>
                        Education is the most powerful weapon <br />
                        which you can use to change the world.
                    </h3>
                    <p className='mt-3 quote1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                        Curabitur sagittis ornare ligula, eu pellentesque nibh <br />
                        blandit volutpat. Praesent euismod gravida erat, quis <br />
                        lobortis odio laoreet sed. Pellentesque enim leo, ornare <br />
                        sed ligula sit amet, semper tristique tortor. Morbi egestas, <br />
                        lectus in ultrices volutpat, metus enim auctor dolor, <br />
                        sed ligula sit amet, semper tristique tortor. Morbi egestas,<br />
                        ut placerat tortorb
                    </p>
                </div>
                <img className='image1' src="/images/event-left.png" alt="couldn't load" />
            </div>
        </div>

    )
}

export default Section1
