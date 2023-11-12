import React from "react";
import ItemOrder from "./itemOrder";
import { useState, useEffect } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { getFromLocalStorage, deleteToLocalStorage } from '../services/localStorage'
import { useSharedValue } from "../../contexts/products";


import "./Order.css"


function Order({ closeModal }) {

    const [cart, setCart] = useState(false);
    const [products, setProducts] = useState([])
    const [priceTotal, setPriceTotal] = useState([])
    const { setSharedValue } = useSharedValue()


    useEffect(() => {

        getFromLocalStorage('Productos').then((data) => {
            setProducts(data)
            setSharedValue(data)

        }).catch(e => {
            console.error('Error al obtener prodctos', e)
        })


        const total = products.reduce((accumelator, product) => accumelator + product.price, 0);
        const totalFormatted = total.toLocaleString();
        setPriceTotal(totalFormatted)

        if (products) {
            setCart(true)
        } else {
            setCart(false)
        }
    }, [cart])

    const deleteItem = (index) => {
        deleteToLocalStorage('Productos', index).then((response) => {
            setCart(state => !state)

        })

    }




    return (


        <>


            <div className="is-hidden-mobile">
                <div className="modal-conatiner-desktop">
                    <div className="columns box container is-max-desktop box-container">

                        <div className="column  summary-products pr-6">
                            <div className="">

                                {cart ? (products.map((product, index) => (
                                    <ItemOrder key={index} title={product.title} price={product.price} index={index}
                                        deleteItem={deleteItem} />
                                ))
                                ) : (<p>Carrito vacio</p>)
                                }

                            </div>
                        </div>
                        <div className="column is-one-third is-min-width pt-5 ">
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">Resumen de Compras</p>
                                </header>

                                <div className="card-content">
                                    <div className="content">
                                        <div className="is-flex is-justify-content-space-between mb-2 mt-2">
                                            <p>Productos</p>
                                            <p>$ {priceTotal}</p>
                                        </div>
                                        <div className="is-flex is-justify-content-space-between pt-2">
                                            <p className="has-text-black is-size-5">Total</p>
                                            <p className="has-text-black is-size-5">$ {priceTotal}</p>
                                        </div>

                                        <div className="mt-5 is-container-button">
                                            <button className="button bg-button-modal-buy " >Continuar Compra</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="is-position" onClick={closeModal}>
                            <RiCloseCircleLine size={38} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="is-hidden-tablet">
                <div className="modal-conatiner-desktop">

                    <div className="box container box-container-mobile">
                        <div className="is-position-shopping" onClick={closeModal}>
                            <RiCloseCircleLine size={38} />
                        </div>
                        <div className="summary-products-mobile mb-4 mt-5">
                            <div className="">
                                <ItemOrder />
                                <ItemOrder />
                                <ItemOrder />
                                <ItemOrder />

                            </div>

                        </div>

                        <div className="">
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">Resumen de Compras</p>
                                </header>
                                <div className="card-content">
                                    <div className="content">
                                        <div className="is-flex is-justify-content-space-between mb-2 mt-2">
                                            <p>Productos</p>
                                            <p>$xxx.xxx</p>
                                        </div>
                                        <div className="is-flex is-justify-content-space-between pt-2">
                                            <p className="has-text-black is-size-5">Total</p>
                                            <p className="has-text-black is-size-5">$xxx.xxx</p>
                                        </div>
                                        <div className="mt-5 button-mobile-buy ">
                                            <button className="button bg-button-modal-buy"  >Comprar ahora </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order