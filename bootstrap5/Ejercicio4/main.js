function calcular_area_circ(radio)
{
    const area= Math.PI*Math.pow(radio,2)
   return area 
}


function mostrar_area()
{
    const radio= document.getElementById("radio").value
    const resultado= calcular_area_circ(radio)
    alert (resultado)
}