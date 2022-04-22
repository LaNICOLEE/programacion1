
function mostrar() {
    //Declaramos una variable
    let numero = 15;
    //Se imprime en la consola del navegador
    console.log(numero)
}

function evaluar() {
    let dato = 22;
    //condicion
    if(dato > 10) {
        let dato = 77
        console.log(dato)
    }
    console.log(dato)
}

function validar() {
    const valor = prompt('Ìngrese calificacion');
    //forma 1
    /*if(valor >= 7){
        alert('Estas aprobado!')
    } else{
        alert('Nos vemos en Diciembre!')
    }*/
  //Expresion ternaria
  (valor >= 7) ? alert('Estas aprobado') : alert('Desaprobado')
} 
//Invocamos la funcion validar
//validar()

function calcular() {
    //forma 1
   const dato =  document.getElementById("inp_dato1").value 
    //forma 2
   //const dato = document.querySelector("#inp_dato1").value

   const resultado = dato * 10;

   alert(resultado)
}


