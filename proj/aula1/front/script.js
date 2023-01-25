function carregar() {
    fetch("http://localhost:3000/gestao")
        .then(response => {
            return response.json();
        })
        .then((data) => {
            data.forEach(cada => {
                let select = document.querySelector(".coisa").value

                let opn = select.cloneNode(true)

                opn.classList.remove("modelo")

                let op = opn.querySelector("#produto")

                op.innerHTML = cada.produto;

                document.querySelector(".input").appendChild(opn);
            })
        })
}
