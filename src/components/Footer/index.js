import React from "react";
import { Tiktok, Instagram, Facebook, WhatsApp } from "./Logos";
import "./Footer.css";


function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container-social">
                    <h3>¡Conéctate con nosotros en las redes sociales!</h3>
                    <p>
                        En GlamShop, estamos comprometidos a ayudarte y a resaltar tu belleza.
                        Síguenos en nuestras redes sociales para estar al tanto de las últimas tendencias de belleza,
                        productos de calidad y consejos expertos que te ayudarán a lucir y sentirte mejor que nunca.

                    </p>
                    <div className="container-logos">
                        <div className="logo1">
                            <Tiktok width={80} height={80} />
                        </div>
                        <div className="logo2">
                            <Instagram width={80} height={80} />
                        </div>
                        <div className="logo3">
                            <Facebook width={120} height={100} />
                        </div>
                        <div className="logo4">
                            <WhatsApp width={80} height={80} />
                        </div>


                    </div>

                </div>
                <div className="container-explore">
                    
                    <div className="container-item">
                    <h3>Explora</h3>
                        <ul className="item">
                            <li>Home</li>
                            <li>productos</li>
                            <li>About</li>
                            <li>Pricing</li>
                        </ul>
                    </div>

                    
                    <div className="container-item">
                    <h3>Acerca de</h3>
                        <ul className="item">
                            <li>Glam Shop</li>
                            <li>Tendencias</li>
                            <li>Comprar</li>
                            <li>Vender</li>
                            <li>Developers</li>
                        </ul>
                    </div>

                </div>
            </footer>


        </>
    );
}

export default Footer;
