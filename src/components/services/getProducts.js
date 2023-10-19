import axios from 'axios'

function getProducts() {
    return axios.get('http://localhost:3000/app/v1/products')
      .then(response => {
       
        return response.data.body;
      })
      .catch(error => {
        console.error("Error al realizar solicitud de productos", error);
        throw error; // Rechaza la Promesa en caso de error
      });
  }





/* function getProducts(){
    axios.get('http://localhost:3000/app/v1/products')
    .then (response =>{
        console.log('desde la peticion get',response.data.body)
        
        return response.data.body
    }).catch(error=>{
        console.error("Error al realizar solicitud de productos", error)
    })
} */


export default getProducts

