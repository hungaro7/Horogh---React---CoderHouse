import React from 'react';
//import './Footer.css'; // Asegúrate de importar el archivo CSS para los estilos

const Footer = () => {
    const handleClick = () => {
        window.location.href = 'https://www.instagram.com/deco.arte_ec/';
    };

    return (
        <footer className="footer">
            <button onClick={handleClick} className="footer-button">EC-Deco</button>
        </footer>
    );
}

export default Footer;