import React from "react";
import Imagen from "../../assets/images/imagen1.webp";
import "./Card.css"

function Card() {

    return (
        <>

            <div className="card">

                <div className="container-image">
                    <img src={Imagen} alt="Product Image" className="image" />
                </div>

                <div className="container-description">
                    <h2 className="titulo">✨El Ramo de Belleza: Un Regalo Radiante</h2>
                    <p>
                        Este no es un regalo ordinario, es una explosión de belleza en cada pincelada.
                        El Ramo de Belleza es como un jardín secreto de glamour,
                        esperando deslumbrarte. ¿Listo para vivir una experiencia de belleza excepcional?
                    </p>
                    

                    <span>$110.000</span>
                </div>









            </div>

        </>
    )

}

export default Card