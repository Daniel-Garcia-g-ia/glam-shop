
//Funcion para agregar local

function addTolocalStorage(key, data) {

    return new Promise((resolve, reject) => {
        try {

            getFromLocalStorage(key)
                .then((currentData) => {
                    const updateData = Array.isArray(currentData) ? currentData : []
                    updateData.push(data)
                    const dataString = JSON.stringify(updateData);
                    localStorage.setItem(key, dataString);
                    resolve("Producto se Agregó Correctamente")

                }).catch(e => {
                    console.error("error", e)
                })

        } catch (error) {

            reject('Error almacenar producto', error)
        }
    })





}

/**
 * 
 * @param {string} key la clave bajo la que se alamcenan los datos en el Local Starage
 * @returns {Promise<any>} Una promesa que se resuelve con los datos alamcenados en el Local Storage,
 * o rechaza con el mesaje de error si ocurre algun problema
 * 
 * 
 */
function getFromLocalStorage(key) {
    return new Promise((resolve, reject) => {
        try {
            const dataString = localStorage.getItem(key);

            if (!dataString) {
                resolve(null)
            }
            const data = JSON.parse(dataString)
            resolve(data)
        } catch (error) {
            reject("Error al obtener productos", error)

        }
    })
}

function deleteToLocalStorage(key, index) {
    return new Promise((resolve, reject) => {
        try {
            getFromLocalStorage(key).then((currentData) => {
                const updateData = currentData
                updateData.splice(index, 1)
                const dataString = JSON.stringify(updateData);
                localStorage.setItem(key, dataString);
                resolve('Prodcuto se Elimino Correctamente')

            }).catch(error =>{
                console.error("error", error)

            })

        } 


         catch (error) {
        reject('Error al Eliminar productos', error)
    }
})

}

export {
    addTolocalStorage,
    getFromLocalStorage,
    deleteToLocalStorage
}