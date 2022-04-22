let facturas = ['cara sucia', 'Media-lunas dulces', 'cañoncito de dulce de leche', 'Cañoncito de crema pastelera']

//Como condeguir la longitud de un arreglo
//Es la cantidad de elementos de un arreglo
const longitud = facturas.length
console.log('longitud: ' + longitud)

//Como acceder a un elemento del array mediante su indice
let primero = facturas[0]
console.log('El primer elemento es: ' + primero)

//Como acceder al ultimo elemento de un arreglo 
const ultimo = facturas[longitud - 1]
console.log('El ultimo elemento del arreglo: ' + ultimo)

//Como recorrer un array haciendo uso de foreach
facturas.forEach( (Element, index) => (
console.log(index + '-' + Element)
));

//Comoo agregar un nuevo elemnto al final de un arreglo
facturas.push('Rosquitas')
console.log(facturas)

//Como eliminamos al ultimo elemento de un arreglo (adios rosquitas)
facturas.pop()
console.log(facturas)

//Como agregar un elemento al inicio de un arreglo 
facturas.unshift('Rosquitas')
console.log(facturas)

//Como eliminar el primer elemento de un arreglo
facturas.shift()
console.log(facturas)

//Como obtener el indice de un elemento
const indice = facturas.indexOf('cañoncito de dulce de leche')
console.log('El indice de cañoncito de dulce de leche es: ' + indice) 

//Commo eliminar un elemento del arreglo haciendo de su indice 
facturas.splice(indice, 1)
console.log(facturas)

//Como eliminar mas de un elemento de un arreglo
const indice_ml = facturas.indexOf('Media-lunas dulces')
//Ademas de quitar elementos tambien nos informa de los elementos eliminados 
const eliminados =  facturas.splice(indice_ml, 2)
console.log('Eliminados: ' + eliminados)
console.log(facturas)

//Como generar una copia de un arreglo
const copiafacturas = facturas.slice() 
copiafacturas.push('Rosquitas', 'cañoncitos de dulce de leche', 'churros')

console.log('copia: ' + copiafacturas)
console.log('original: ' + facturas)

//Como agregar elementos en medio de un arreglo
copiafacturas.splice(2, 0, "Biscochitos")
console.log(copiafacturas)
