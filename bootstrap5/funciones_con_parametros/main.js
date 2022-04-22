function calcular_division(dato1,dato2) //Es el argumento   Esta preparada para recibir dos datos
{
    const resultado = dato1 / dato2 //Esta funcion la ejecuta calcular_division()

    return resultado
}

function mostrar_resultado() //Recolecta los datos del input
{   //El document lo guardo en una constante.
    const dato1 = document.getElementById("inp_dato1").value //Permite encontrar el input

    //Forma 2

    const dato2 = document.querySelector("#inp_dato2").value //Se pone # para buscar el id y por clase se pone "."

    //Invocamos(ejecutamos) a la funcion, pero ademas le enviamos dos parametros
    //Ademas recibimos una respuesta por parte de la funcion calcular_division()
    const respuesta = calcular_division(dato1,dato2)

    alert(respuesta)
}
