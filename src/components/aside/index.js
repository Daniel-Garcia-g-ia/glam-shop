import React from "react";
import { useState, useEffect } from "react";
import Card from "../card"
import getProducts from "../services/getProducts"



function Aside() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    // Esta función se ejecutará al abrir la página por primera vez
    const fetchData = async () => {
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
        console.log(products)
      } catch (error) {
        console.error('Error al obtener productos', error);
      }
    };

    fetchData();
  }, []);





  return (
    <div className="container py-6 is-max-desktop">
      <div className="columns is-centered  has-text-centered-mobile">
        <div className="column">
          <div className="is-mobile mx-3">
            {products.map((product, index) => (
              <Card key={index} product={product} />
            ))}

          </div>

        </div>
      </div>
    </div>
  );
}

export default Aside