console.log("peticion")
lista();
function lista(){
    console.log("ryrtrv")
    let lista = document.getElementById("list");
    axios.get("http://localhost:8080/user")
    .then(response => {
        for(let i=0; i<response.data.length; i++){
          
            let li = document.createElement("li");
            let div1 = document.createElement("div");
            let div2 = document.createElement("div");
            let span = document.createElement("span");
            let text1 = document.createTextNode("Mascota: "+response.data[i].pet.tipo);
            let text2 = document.createTextNode("Jefe: "+response.data[i].name);
            let text3 = document.createTextNode(response.data[i].pet.raza);
            div1.classList.add('ms-2','me-auto');
            div2.classList.add('fw-bold');
            span.classList.add('badge','bg-primary','rounded-pill')
            div2.appendChild(text1);
            div1.appendChild(text2);
            div1.appendChild(div2);
            span.appendChild(text3);
            li.classList.add('list-group-item','d-flex','justify-content-between','align-items-start','bg-light')
            li.appendChild(div1);
            li.appendChild(span)
            lista.appendChild(li);

        }
    })
    .catch(e => {
        console.log("error")
    })
}