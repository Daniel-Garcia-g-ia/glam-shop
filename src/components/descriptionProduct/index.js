import React from "react";
import { useSharedValue } from "../../contexts/products";
import { addTolocalStorage, getFromLocalStorage } from "../services/localStorage";
import { alertSuccess } from "../services/alerts";
import { RiCloseCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./descriptionProduct.css"


function DescriptionProduct({ handleClose, product }) {


    const { setSharedValue } = useSharedValue()

    const handleClickAddCar = () => {


        addTolocalStorage('Productos', product)
            .then((message) => {
                getFromLocalStorage('Productos').then((data) => {
                    setSharedValue(data)
                    alertSuccess(message)
                })

            }).catch(error => {
                console.error(error)
            })


    }

    return (
        <>
            <div className="is-hidden-mobile">
                <div className="modal-container-modal pt-6"  >
                    <div className=" box container media is-max-widescreen">
                        <div className="image-container-modal">
                            <img src={`http://localhost:3000/app/${product.fileUrl}`} alt="Product" />
                        </div>
                        <div className=" box card py-5 px-6">
                            <p className="title pb-5">{product.title}</p>
                            <p className="subtitle pb-5">
                                {product.description}
                            </p>
                            <p className="has-text-dark is-size-3 pb-5">${product.price}</p>
                            <div className="mt-5 is-container-button-modal">
                                <button className="button bg-button-modal" onClick={handleClickAddCar} >Agregar al Carrito </button>
                            </div>
                            <div className="mt-5 is-container-button-modal">
                                <Link to="/buy" className="button bg-button-modal-buy">
                                    Comprar ahora
                                </Link>
                            </div>
                        </div>
                        <div className="close-position">
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
                        <p className="has-text-dark is-size-4 pb-5">{product.title}</p>
                        <div className="image-container-modal-mobile">
                            <img src={`http://localhost:3000/app/${product.fileUrl}`} alt="Product" />
                        </div>
                        <div className="pt-2">
                            <p className="subtitle pb-1">
                                {product.description}
                            </p>
                            <p className="has-text-dark is-size-2 pb-1">${product.price}</p>
                            <div className="mt-2 is-container-button-modal-mobile">
                                <button className="button bg-button-modal" onClick={handleClickAddCar}  >Agregar al Carrito </button>
                            </div>
                            <div className="mt-2 is-container-button-modal-mobile">
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