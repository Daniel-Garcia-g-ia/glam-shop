import React from "react";
import Imagen from "../../assets/images/editada.webp";
import { BsFillCartPlusFill } from "react-icons/bs"
import "./Card.css"

function Card() {

    return (
        <>
            <div className="bg box my-6 media is-hover" >
                <div class="image-container">
                    <img src={Imagen} alt="Product Image" />
                </div>
                <div className="px-6 py-4 ">
                    <p className="is-size-5">
                        ✨Gran Combo! Regalo 
                    </p>
                    <div className="px-2 pt-6">
                        <span className="has-text-dark is-size-3" >$10.000</span>
                    </div>

                    <div className="mt-5 is-container-button">
                        <button className="button bg-button"  >Agregar al Carrito </button>
                        <span><BsFillCartPlusFill size={30} /></span>
                    </div>








                </div>
            </div >
        </>
    )

}

export default Card