import React from "react";
import { Tiktok, Instagram, Facebook, WhatsApp } from "./Logos";
import "./Footer.css";


function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="content has-text-centered ">
                    <h3>¡Conéctate con nosotros en las redes sociales!</h3>
                    <p>
                        En GlamShop, estamos comprometidos a ayudarte y a resaltar tu belleza.
                        Síguenos en nuestras redes sociales para estar al tanto de las últimas tendencias de belleza,
                        productos de calidad y consejos expertos que te ayudarán a lucir y sentirte mejor que nunca.

                    </p>
                    <div className="columns is-centered">
                        <div className="logo1 icon is-large">
                            <Tiktok width={80} height={80}/>
                        </div>
                        <div className="logo2 icon is-large">
                            <Instagram width={80} height={80} />
                        </div>
                        <div className="logo3 icon is-large">
                            <Facebook  width={80} height={80}/>
                        </div>
                        <div className="logo4 icon is-large">
                            <WhatsApp width={80} height={80} />
                        </div>


                    </div>

                </div>
                
            </footer>


        </>
    );
}

export default Footer;
