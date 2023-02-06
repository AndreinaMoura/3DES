function carregar() {
    fetch("http://localhost:3000/todososprodutos")
        .then(response => {
            return response.json();
        })
        .then((data) => {
            data.forEach(cada => {
                // let select = document.querySelector(".coisa").value

                // let opn = select.cloneNode(true)

                let selecao = document.querySelector('option')
                console.log(selecao)
                // opn.classList.remove("modelo")
                let nselecao = selecao.innerHTML()

                // let op = opn.querySelector(".produto")


                document.querySelector("select").appendChild(nselecao);
            })
        })
}
