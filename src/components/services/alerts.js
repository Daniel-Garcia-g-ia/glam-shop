import Swal from "sweetalert2";


function alertSuccess (title){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: title,
        showConfirmButton: false,
        timer: 1500
      })
}

export{
    alertSuccess
}