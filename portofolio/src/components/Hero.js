import React from 'react'
import Heroimg from "../assets/Heroimg.png"


const Hero = () => {
    return (
        <section> 
            <div className="hero-info">
                <h1>
                    Hi, <br/>
                    I am <span className="text-accent">i</span>nes <br/>
                    Engineering school student
                </h1>
                <p>
                    Passionnate gamer 
                </p>
                <button>See Projects</button>
            </div>
            <div className='Heroimg'>
            <img src={Heroimg} alt="coding illustration"/>
            </div>
        </section>
    )
}

export default Hero