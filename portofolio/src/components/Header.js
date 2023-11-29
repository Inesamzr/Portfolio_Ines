import React, {useState}  from "react";
import { Icon } from '@iconify/react';

const Header = () => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);

    return (  
            <header className="flex justify-between px-5 py-2 bg-primary text-white">
                <a href="/" className="logo text-2xl font-bold text-accent">Ines Amzert</a>
                
                {/*Desktop Nav*/}
                <nav className="hidden md:block">    
                    <ul className="flex">
                        <li className="nav-item">
                            <a href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="/#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="/#contact">Contact</a>
                        </li>
                        <li  className="nav-item">
                            <a href="/#resume">Resume</a>
                        </li>
                    </ul>
                </nav>
                {/*Mobile Nav*/}
                <nav className={ 
                    !toggle 
                    ? "mobile-nav left-[-100%]" 
                    : "mobile-nav left-0"}>    
                    <ul className="flex flex-col">
                        <li className="nav-item">
                            <a href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="/#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="/#contact">Contact</a>
                        </li>
                        <li  className="nav-item">
                            <a href="/#resume">Resume</a>
                        </li>
                    </ul>
                </nav>
                {/*Toggle button*/}
                <button onClick={handleToggle} className="block md:hidden">
                    {
                        !toggle ? <Icon icon="fa6-solid:grip-lines" size={30}/> : <Icon icon="ci:close-md"size={30} />
                    }
                </button>
            </header>
    )
}

export default Header