import React from "react";
import { useState } from "react";
import data from "../services/dataAddress"
import { addTolocalStorage } from "../services/localStorage";

function SelectDepartament() {

    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [locationSelected, setLocationSelected] = useState('');

    const availableLocation = data.find(dep => dep.nombre === selectedDepartment)?.localidades || []


    const handleSelectedDepartment = (event) => {
        const newDepertment = event.target.value;
        setSelectedDepartment(newDepertment);
        setLocationSelected('');

    }

    const handleSelectedLocation = (event) => {
        const newLocation = event.target.value;
        setLocationSelected(newLocation)

    }








    return (

        <>
            <div className="field is-horizontal">
                <div className="field-label"></div>
                <div className="field-body">
                    <div className="field is-narrow w-5">
                        <label className="label is-small">Departamento</label>
                        <div className="control is-expanded">
                            <div className="select is-fullwidth">
                                <select value={selectedDepartment} onChange={handleSelectedDepartment}>
                                    <option>Seleccione un Departamento</option>
                                    {data.map((departamento) => (
                                        <option key={departamento.nombre} value={departamento.nombre}>
                                            {departamento.nombre}
                                        </option>

                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field is-narrow w-5">
                        <label className="label is-small">Ciudad</label>
                        <div className="control is-expanded">
                            <div className="select is-fullwidth">
                                <select >
                                    <option value="">Seleccione una Ciudad</option>
                                    {availableLocation.map((location) => (
                                        <option key={location} value={location}>
                                            {location}
                                        </option>
                                    ))}


                                </select>
                            </div>
                        </div>
                    </div>

                    

                </div>



            </div>

        </>
    )
}

export default SelectDepartament