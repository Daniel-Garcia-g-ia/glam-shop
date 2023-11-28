import React from "react";
import AddAddress from "./addAddress"
import { GoLocation } from "react-icons/go";
import { useState } from "react";

import "./Buy.css"

function Buy() {
    const [openModal, setOpenModal] = useState(false)

    const handledOpenModal = () => {
        setOpenModal(state => !state)

    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }




    return (


        <>

            {/*  {openModal && (<AddAddress closeModal={handleCloseModal} />)} */}





            <section className="hero pt-6">


                <div className="hero-body">
                    <p className="title">
                        Continua tú Compra
                    </p>
                    <p className="subtitle">
                        Validar productos e información
                    </p>
                </div>

                <div className="container pb-6 pt-6 is-fluid">
                    <div className="">
                        <div className="colums box box-buy">
                            <div className="column bg-color is-half">

                                <div className="data-location">
                                    <p className="title is-6">Dirección de envío</p>
                                    <span> <GoLocation size={30} />   </span>
                                    <div className="add-address">
                                        <p className="title is-6" onClick={handledOpenModal}>
                                            <small>+ Agregar una dirección</small>
                                        </p>
                                    </div>
                                    <div >
                                        <p className="subtitle is-6 mb-0">Nombre Apellido1 Apellido2</p>
                                        <p className="subtitle is-6 mb-0">Calle xxx # 123-123 xx,conjunto torre apt</p>
                                        <p className="subtitle is-6 mb-0">Barrio</p>
                                        <p className="subtitle is-6 mb-0">Teléfono: 310xxxxxx</p>
                                    </div>




                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </section>
            <div className={`${openModal ? 'active' : 'disable'}`} >
                <div className="columns">
                    <div className="column is-half">
                        <AddAddress />


                    </div>

                </div>


            </div>


        </>


    )
}

export default Buy