import React from "react";
import "./descriptionProduct.css"
import Imagen from "../../assets/images/editada.webp";
import { BsFillCartPlusFill } from "react-icons/bs"
import { PiMoneyBold } from "react-icons/pi"
import { GrClose } from "react-icons/gr"
import { RiCloseCircleLine } from "react-icons/ri"


function DescriptionProduct({ handleClose }) {

    return (
        <>

            <div className="is-hidden-mobile">
                <div className="modal-container-modal pt-6"  >
                    <div className=" box container media is-max-widescreen">
                        <div class="image-container-modal">
                            <img src={Imagen} alt="Product Image" />
                        </div>
                        <div className=" box card py-5 px-6">
                            <p className="title pb-5">Titulo del Producto</p>
                            <p className="subtitle pb-5">
                                descripcion detallada del poducto, por ejemplo: frase de ventas o marca, uso, color, etc... hasta cierta cantidad de caracteres
                            </p>

                            <p className="has-text-dark is-size-3 pb-5">$xxx.xxx</p>
                            <div className="mt-5 is-container-button-modal">
                                <button className="button bg-button-modal"  >Agregar al Carrito </button>
                            </div>
                            <div className="mt-5 is-container-button-modal">
                                <button className="button bg-button-modal-buy"  >Comprar ahora </button>
                            </div>
                        </div>
                        <div>

                            <RiCloseCircleLine size={40} onClick={handleClose} />

                        </div>

                    </div>
                </div>
            </div>

            <div className="is-hidden-tablet">


                <div className="modal-container-modal">
                    <div className="box container mx-3 box-mobile">
                        <div className="container-close-mobile">
                            <RiCloseCircleLine size={40} onClick={handleClose} />
                        </div>

                        <p className="has-text-dark is-size-4 pb-5">Titulo del Producto</p>
                        <div class="image-container-modal-mobile">
                            <img src={Imagen} alt="Product Image" />
                        </div>
                        <div className="pt-2">

                            <p className="subtitle pb-2">
                                descripcion detallada del poducto, por ejemplo: frase de ventas o marca, uso, color, etc... hasta cierta cantidad de caracteres
                            </p>

                            <p className="has-text-dark is-size-2 pb-2">$xxx.xxx</p>
                            <div className="mt-5 is-container-button-modal-mobile">
                                <button className="button bg-button-modal"  >Agregar al Carrito </button>
                            </div>
                            <div className="mt-5 is-container-button-modal-mobile">
                                <button className="button bg-button-modal-buy"  >Comprar ahora </button>
                            </div>
                        </div>



                    </div>



                </div>




            </div>


        </>
    )

}

export default DescriptionProduct