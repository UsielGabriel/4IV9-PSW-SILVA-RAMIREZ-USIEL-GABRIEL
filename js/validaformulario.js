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



    var checkOK="abcdefghijklmnñopqrstuvwxyz" + "ABCDEFGHIJKLMNñOPQRSTUVWXYZ";

    var checkStr = formulario.nombre.value;

    var allvalid = true;

    for(var i=0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for (var j = 0; j < checkOK.length; j++)
        if (ch == checkOK.charAt(j))
            break;


        if (j == checkOK.length){
            allvalid = false;
            break;
        }
    }
        

    if(!allvalid){
        alert("Escriba solo letras en el campo nombre")
        formulario.nombre.focus();
        return false;
    }

    

    var checkOK="123456789";

    var checkStr = formulario.edad.value;

    var allvalid = true;

    for(var i=0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for (var j = 0; j < checkOK.length; j++)
        if (ch == checkOK.charAt(j))
            break;


        if (j == checkOK.length){
            allvalid = false;
            break;
        }
    }
        

    if(!allvalid){
        alert("Escriba numeros en el campo edad")
        formulario.edad.focus();
        return false;
    }


    var txt = formulario.email.value;
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

    alert("Email "+(b.test(txt)?"":"no")+" valido");

    return b.test(txt);



}

