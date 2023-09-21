import React from "react";
import "./ProductDescription.css"
import opci from "../ProductDescription/modal"
import { GrClose } from "react-icons/gr"

function ProductDescription({ onClose }) {

    const handleModal = (e) => {
        // Evita que el clic en el modal se propague al contenedor
        e.stopPropagation();
      };




    return (
        <>


            <div id="myModal" className="container-modal"  >
                <div id="modal-abiero"className="modal-prueba" onClick={handleModal}>
                    <div class="">
                        <p>texto del modal</p>
                    </div>

                </div>



            </div>


        </>

    )



}

export default ProductDescription

