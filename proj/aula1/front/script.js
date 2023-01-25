function carregar() {
    fetch("http://localhost:3000/gestao")
        .then(response => {
            return response.json();
        })
        .then((data) => {
            data.forEach(cada => {
                let select = document.querySelector("#coisa")

                let novoItem = itemFilme.cloneNode(true)
                let opn = select.cloneNode(true)

                novoItem.classList.remove("modelo")
                opn.classList.remove("modelo")

                let imagem = novoItem.querySelector(".imagem")
                let op = opn.querySelector("#produto")

                imagem.src =  cada.imagem;
                op.innerHTML = cada.produto;

                document.querySelector("main").appendChild(novoItem);
            })
        })
}
