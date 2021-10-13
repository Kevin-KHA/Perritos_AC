function enviar_formulario() {

  let opcion = document.getElementById("opciones");
  let raza = document.getElementById("raza");
  let nombre = document.getElementById("nombre");
  let telfono = document.getElementById("telefono");
  
 
  if (
    raza.value.length > 0 &&
    nombre.value.length > 0 &&
    telfono.value.length > 0
    && opcion.value != "Tipo de mascota"
  ) {
    let bodyy = {
      name: nombre.value,
      phone: telfono.value,
      pet: {
        raza: raza.value,
        tipo: opcion.value,
      },
    };
    axios
      .post("http://localhost:8010/add_user", bodyy)
      .then((data) => {
        swal("Correcto", "Se agrego correctamente", "success")
        .then(data => {
          location.href = "index.html"
        });
      })
      .catch((e) => console.log("error"));
  }

  else
  {
    console.log("chtm produ ouner");
  }
}
