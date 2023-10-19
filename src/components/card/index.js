import React from "react";
import Imagen from "../../assets/images/editada.webp";
import DescriptionProduct from "../descriptionProduct";
import { useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs"
import "./Card.css"



function Card({product}) {

    const [VisibleModal, setVisibleModal] = useState(false)

    const handleClickCard = () => {
        setVisibleModal(state => !state)

    }

    return (


        <>

            {VisibleModal && (<DescriptionProduct handleClose={handleClickCard} product={product} />
            )}
            <div className="is-hidden-mobile" onClick={handleClickCard}>
                <div className="bg box my-6 media is-hover is-two-thirds-tablet"  >
                    <div className="image-container">
                        <img src={product.fileUrl} alt="Product Image" />
                        <h1>{product.fileUrl}</h1>
                    </div>
                    <div className="px-6 py-4 ">
                        <p className="is-size-5">
                           {product.title}
                        </p>
                        <div className="px-2 pt-6">
                            <span className="has-text-dark is-size-3" >${product.price}</span>
                        </div>

                        <div className="mt-5 is-container-button">
                            <button className="button bg-button " >Agregar al Carrito </button>
                            <span><BsFillCartPlusFill size={30} /></span>
                        </div>

                    </div>
                </div >
            </div>

            


            <div className="is-hidden-tablet px-4" onClick={handleClickCard}>

                <div className="bg box my-6 is-hover" >
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-flex is-justify-content-center is-align-items-center">
                                <div className="image-container-mobile ">
                                    <img src={Imagen} alt="Product Image" />
                                </div>
                            </div>

                        </div>

                    </div>
                    <p className="is-size-5 py-5">
                        {product.title}
                    </p>
                    <div className="px-2">
                        <span className="has-text-dark is-size-3" >${product.price}</span>
                    </div>
                    <div className="mt-5 is-container-button-mobile">
                        <button className="button bg-button"  >Agregar al Carrito </button>
                        <span><BsFillCartPlusFill size={30} /></span>
                    </div>

                </div>




            </div>


        </>
    )

}

export default Card