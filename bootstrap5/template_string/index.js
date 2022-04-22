function mostrar() {
  const nombre_apellido = `Delfor Alegandro Villegas`
  console.log(`Nombre y Apellido: `+ nombre_apellido +` - DNI 46175193`)
}

function mostrar2() {
    const nombre_apellido = `Delfor Alegandro Villegas`

    //template sting - backtick de javascript
    console.log(`
         Nombre y Apellido: $(nombre_apellido)
         DNI: 46175193
         Correo: nicksva15@gmail.com
    `)
}