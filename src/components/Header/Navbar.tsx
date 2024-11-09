import List from "./List";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import './navbar.css'

export default function Navbar(){
    const isDesktop = useMediaQuery({ minWidth: 768 })
    const [ isMenuOpen, setIsMenuOpen ]= useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            {isDesktop ? (
                <nav className="navbar_desktop">
                    <List customClassName="list_desktop"/>
                </nav>
            ) : (
                <nav className="navbar_mobile">
                    <div className="menu_icon" onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <span className="close_icon"><img src="src/assets/xmark.svg"/></span>
                        ) : (
                            <span className="hamburguer_icon"><img src="src/assets/hamburguer1.svg"/></span>
                        )}
                    </div>

                    <div className={`menu_list ${isMenuOpen ? "menu_open" : ""}`}>
                        <List customClassName="list_mobile"/>
                    </div>
                </nav>
            )}
        </>
    )
}