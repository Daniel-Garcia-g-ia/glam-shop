import React from "react";
import "./Order.css"



function ItemOrder({ title, fileUrl, price, index, deleteItem }) {
    const handleClick = () => {
        
       deleteItem(index)
                
    }

    return (
        <>

            <div className=" ">
                <div className="bg box my-1 media is-hover"  >
                    <div className="image-container-modal-order">
                        <img src={`http://localhost:3000/app/${fileUrl}`} alt="Product Image" />
                    </div>
                    <div className="ml-3 media-content">
                        <div className="content">
                            <p>
                                <strong>{title}</strong>
                            </p>
                            <div className="pb-2 pt-2">
                                <span className="has-text-dark is-size-5" >Precio: ${price}</span>
                            </div>
                            <p className="pt-4">
                                <small>Cantidad: 01 </small>
                            </p>


                        </div>
                    </div>
                    <p className="delete-product" onClick={handleClick}>
                        <small>Eliminar producto</small>
                    </p>
                </div >
            </div>

        </>


    )
}

export default ItemOrder