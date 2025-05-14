import headerLogo from '/imgs/Logo.svg'
import Button from './button'
import { useState } from 'react'

export default function Header(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
        <header className="header">

            <section className="header__logocontainer">
                <img src={headerLogo} alt="companyLogo" className="header__logo" />
            </section>

            <nav className="header__nav">
                <a href="#" className="header__navitem">Home</a>
                <a href="#" className="header__navitem">Service</a>
                <a href="#" className="header__navitem">Feature</a>
                <a href="#" className="header__navitem">Product</a>
                <a href="#" className="header__navitem">Testimonial</a>
                <a href="#" className="header__navitem">FAQ</a>
            </nav>

            <section className="header__login">
                < Button 
                background="#FFFFFF"
                color="#4CAF4F"
                onClick={()=> setIsLoggedIn(!isLoggedIn)}
                >
                {isLoggedIn ? "My Profile" : "Login"}
                </Button>
                < Button 
                background="#4CAF4F"
                minWidth="91px"
                className={isLoggedIn ? "header__btnhide" : ""}
                >Sign up</Button>
            </section>
            
        </header>
        </>
    )
}