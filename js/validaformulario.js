/*
quiero una funcion  que se encargue de validar la entrada
de los datos para que el usuario deba de escribir mas de
 5 caracteres dentro del campo nombre
*/

function validar(formulario){
    alert("hola");
    if (formulario.nombre.value.length < 5){
        alert("Escriba poor lo menos 5 caracteres dentro del campo nombre")
        formulario.nombre.focus();
        return false;
    }
}


