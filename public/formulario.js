function enviar_formulario() {
  console.log("error");
  let raza = document.getElementById("raza");
  let nombre = document.getElementById("nombre");
  let telfono = document.getElementById("telefono");
  console.log(raza.value + nombre.value + telfono.value);
  if (
    raza.value.length > 0 &&
    nombre.value.length > 0 &&
    telfono.value.length > 0
  ) {
    let bodyy = {
      name: nombre.value,
      phone: telfono.value,
      pet: {
        raza: raza.value,
        tipo: "Perro",
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
}
