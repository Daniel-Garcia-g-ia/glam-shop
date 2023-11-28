
import React from "react";
import { FaRegUser } from "react-icons/fa6";
import SelectDepartament from "./SelectDepartamenst";

import "./Buy.css";

function AddAddress({ closeModal }) {


    const handledClickAddData = () => {
        console.log('agregar datos')
    }


    return (



        <>

            <section>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Datos Personales</label>
                    </div>

                    <div className="field-body">
                        <div className="field">
                            <p className="control is-expanded has-icons-left">
                                <input className="input" type="text" placeholder="Nombre" />
                                <span className="icon is-small is-left">
                                    <i><FaRegUser /></i>
                                </span>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control is-expanded">
                                <input className="input" type="text" placeholder="Apellidos" />
                            </p>
                        </div>
                    </div>

                </div>

                <div className="field is-horizontal">
                    <div className="field-label"></div>
                    <div className="field-body">
                        <div className="field is-expanded">
                            <div className="field has-addons">
                                <p className="control">
                                    <a className="button is-static">
                                        +57
                                    </a>
                                </p>
                                <p className="control is-expanded">
                                    <input className="input" type="tel" placeholder="Teléfono Celular" />
                                </p>
                            </div>
                            <p className="help"></p>
                        </div>
                    </div>
                </div>

                <div className="field is-horizontal">
                    <div className="field-label"></div>
                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <div className="select is-fullwidth">
                                    <select>
                                        <option>Seleccione un tipo de identificación</option>
                                        <option>Cédula de Ciudadania</option>
                                        <option>Cédula de Extranjería</option>
                                        <option>Pasaporte</option>
                                        <option>Documento de identificacion extranjero</option>
                                        <option>NUIP</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <p className="control is-expanded">
                                <input className="input" type="text" pattern="[0-9]*" inputMode="numeric" placeholder="Ingresa número de docuemnto" />
                            </p>
                        </div>
                    </div>
                </div>

                <div className="field is-horizontal">
                    <div className="field-label">
                        <label className="label"> Datos de Envío</label>
                    </div>
                    <div className=" field-body">
                        <div className="field is-narrow">
                            <label className="label is-small"> Tipo de calle</label>
                            <div className="control">
                                <div className="select is-fullwidth">
                                    <select>
                                        <option>Seleccione un tipo de calle</option>
                                        <option>Avenida</option>
                                        <option>Autopista</option>
                                        <option>Calle</option>
                                        <option>Carrera</option>
                                        <option>Circunvalar</option>
                                        <option>Diagonal</option>
                                        <option>Transversal</option>
                                        <option>Troncal</option>
                                        <option>Via</option>
                                        <option>Variante</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label is-small">Número</label>
                            <p className="control">
                                <input className="input" typeof="text" placeholder="Número"></input>
                            </p>

                        </div>
                        <div className="field">
                            <label className="label is-small">Num. Secundario</label>
                            <div className="field has-addons">
                                <p className="control">
                                    <a className="button is-static">
                                        #
                                    </a>
                                </p>
                                <p className="control is-expanded">
                                    <input className="input" type="Text" placeholder="Número secundario" />
                                </p>
                            </div>
                            <p className="help"></p>
                        </div>

                        <div className="field">
                            <label className="label is-small">Complemento</label>
                            <div className="field has-addons">
                                <p className="control">
                                    <a className="button is-static">
                                        -
                                    </a>
                                </p>
                                <p className="control is-expanded">
                                    <input className="input" type="Text" placeholder="" />
                                </p>
                            </div>
                            <p className="help"></p>
                        </div>





                    </div>

                </div>

                <div className="field is-horizontal">
                    <div className="field-label"></div>
                    <div className="field-body">
                        <div className="field">
                            <label className="label is-small"> Detalle: apt / piso / casa</label>
                            <p className="control">
                                <input className="input" type="text" placeholder="ej. Edificio Rio Claro, apt 208" />

                            </p>
                        </div>

                    </div>

                </div>


                <SelectDepartament />

                <div className="field is-grouped is-grouped-right">
                    <p className="control">
                        <a className="button button-address" onClick={handledClickAddData}>
                            Agregar Datos
                        </a>
                    </p>

                </div>

            </section>










        </>

    )



}

export default AddAddress