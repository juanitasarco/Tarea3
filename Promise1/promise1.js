const prenderTocadiscos = ()=>{
  console.log ("Prendi el tocadiscos")
  reproducirDisco.then((respuesta)=>{
    console.log(respuesta);
  }).catch((error)=>{
    console.log(error)
  })
  console.log("Puse un disco");
  console.log("Oprimi el boton de reproducción")
}
const reproducirDisco = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    let disco = " Origen";
    if (disco === 0){
      reject("No hay ningun disco o no se puede reproducir")
    }
  resolve("Reproduciendo el disco:"+ disco);
  }, 1000)
})

prenderTocadiscos()