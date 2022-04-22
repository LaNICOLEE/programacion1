function calcular() {
    const base1 =  document.getElementById("base1").value 
    const base2 =  document.getElementById("base2").value
    const altura =  document.getElementById("altura").value

    const resultado = (parseInt(base2) + parseInt(altura) * parseInt(base1) / 2);

   alert(resultado)
}