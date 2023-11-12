import React from "react";
import Logo from "./logo";
import Order from "../Order";
import { useState, useEffect } from "react";
import {getFromLocalStorage} from "../services/localStorage"
import { useSharedValue } from "../../contexts/products";



import { HiSearch } from "react-icons/hi";
import { BsFillCartCheckFill } from "react-icons/bs"

import "./Navbar.css"


function Navbar() {

  const [openOrder, setOpenOrder] = useState(false);
  const [amountProducts, setAmountProducts] = useState(0);
  const {setSharedValue} = useSharedValue()
  const {sharedValue}= useSharedValue()
  
  useEffect(()=>{
    if(sharedValue){
      setAmountProducts(sharedValue.length)           
    }else{
      getFromLocalStorage('Productos').then((data) => {        
        setSharedValue(data)

    }).catch(e => {
        console.error('Error al obtener prodctos', e)
    })
    } 


  },[sharedValue]) 



  const openModal = () => {
    setOpenOrder(true)
  }
  const closeModal = () => {
    setOpenOrder(false)
  }

  const handleClickOrder = () => {
    
    openModal()
  }


  return (
    <>

      <div id="shopping" className={`is-hidden-desktop  ${openOrder ? 'visible' : ''} `}>
        <div className="shoping-car-mobile is-medium mr-3" onClick={handleClickOrder}>
          <BsFillCartCheckFill size={50} />
          <span>1</span>
        </div>
      </div>

      <nav className="is-bg-navbar navbar is-fixed-top  " role="navigation" aria-label="main navigation">

        <div className="navbar-brand">
          <a className="navbar-item pb-0" href="#">
            <Logo width={120} heigth={40} fill="#C780FA" />
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>

          </a>

        </div>



        <div id="navbarBasic" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item custom-navbar-item">
              Home
            </a>

            <a className="navbar-item">
              Contacto
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Productos
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                  Maquillaje
                </a>
                <a className="navbar-item">
                  Sombras
                </a>
                <a className="navbar-item">
                  Promociones
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  Sorpresas
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item" >
              <input className="input is-normal is-rounded custom-input" type="text" placeholder="Busque Producto y mas..." />

              <span>
                <HiSearch size={28} />
              </span>

            </div>
            <div className="navbar-item">
              <div className="shoping-car icon is-medium mr-3" onClick={handleClickOrder}>
                <BsFillCartCheckFill size={30} />
                <span>{amountProducts}</span>
              </div>
            </div>
          </div>



        </div>

      </nav>
      {openOrder && (<Order closeModal={closeModal} />)}
    </>
  );
}

export default Navbar;
