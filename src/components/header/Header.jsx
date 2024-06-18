import React from "react";
import { NavBar } from "./NavBar";
import { Carrito } from "./Carrito";
import { Link } from 'react-router-dom';
import logo from "../../images/logo.jpg";

export const Header =(props) =>
    {
        return (
            <header className="header"> 
                {/* <Link to="/algooo"><h1>negociooo</h1></Link> */}
                {/* Llamo a la imagen desde public */}
                <Link to="/"><img src={logo} className="logo" alt="logo" width={"50px"} height={"50px"}/></Link>
                <NavBar/>
                <Carrito numerito={props.numerito}/>

            </header>
        )
    }
    