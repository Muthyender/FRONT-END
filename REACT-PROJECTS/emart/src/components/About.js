import React from 'react'
import about from '../assets/images/about.jpg'

function About() {
    return (
        <div className='container my-4'>
            <div className="row">
                <div className="col-lg-6">
                    <h1 className='text-primary display-4 fw-bold'>About Us</h1>
                    <p className="lead my-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia aut maiores dolorem, hic nemo praesentium magni a totam itaque, optio ab debitis consequatur error architecto ipsam deleniti fugiat, neque eveniet fugit iure quasi possimus. Consectetur beatae obcaecati maxime dolorem culpa error voluptates aspernatur architecto, ratione fugiat eveniet, suscipit exercitationem nam itaque, ea sed. Illum qui minima repellendus placeat expedita adipisci voluptas earum aliquid molestias velit numquam, corrupti repudiandae! Incidunt dolorum laborum ipsum numquam accusantium ducimus, maxime dicta ad, odit rem veniam dolorem, atque vitae sed minima? Neque iure aspernatur maxime sapiente soluta, dolores in nam suscipit ducimus corporis accusantium assumenda!
                    </p>       
                </div>
                <div className="col-lg-6 m-auto">
                    <img src={about} width='100%' alt="About" />
                </div>
            </div>
        </div>
    )
}

export default About