function calcular_raices(A,B,C){
    const parte1= Math.pow(B,2)-(4*A*C)
    const parte2= (-B + Math.sqrt(parte1) ) / (2 * A)
    const parte3= (-B - Math.sqrt(parte1) ) / (2 * A)

    return 'Raiz 1 = '+parte2.toFixed(2) + "    |    Raiz 2 = " + parte3.toFixed(2)
}

function mostrar()
{
    const A= document.getElementById("A").value
    const B= document.getElementById("B").value
    const C= document.getElementById("C").value

    const resultado= calcular_raices(A,B,C)

    alert (resultado)
}