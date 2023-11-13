import React from "react";
import DescriptionProduct from "../descriptionProduct";
import { addTolocalStorage, getFromLocalStorage } from "../services/localStorage";
import { useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { alertSuccess } from "../services/alerts";
import { useSharedValue } from "../../contexts/products";

import "./Card.css";



function Card({ product }) {

    const [VisibleModal, setVisibleModal] = useState(false)
    const { setSharedValue } = useSharedValue()



    const handleClickCard = () => {
        setVisibleModal(state => !state)

    }

    const handleClickAddCar = () => {
        setVisibleModal(state => !state)

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

            {VisibleModal && (<DescriptionProduct handleClose={handleClickCard} product={product} />
            )}
            <div className="is-hidden-mobile" >
                <div className="bg box my-6 media is-hover is-two-thirds-tablet" onClick={handleClickCard}  >
                    <div className="image-container">
                        <img src={`http://localhost:3000/app/${product.fileUrl}`} alt="Product" />


                    </div>
                    <div className="px-6 py-4 ">
                        <p className="is-size-5">
                            {product.title}
                        </p>
                        <div className="px-2 pt-6">
                            <span className="has-text-dark is-size-3" >${product.price}</span>
                        </div>

                        <div className="mt-5 is-container-button">
                            <button className="button bg-button " onClick={handleClickAddCar} >Agregar al Carrito </button>
                            <span onClick={handleClickAddCar}><BsFillCartPlusFill size={30} /></span>
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
                                    <img src={`http://localhost:3000/app/${product.fileUrl}`} alt="Product" />
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
                        <button className="button bg-button" onClick={handleClickAddCar} >Agregar al Carrito </button>
                        <span onClick={handleClickAddCar}><BsFillCartPlusFill size={30} /></span>
                    </div>

                </div>




            </div>


        </>
    )

}

export default Card