function carregar() {
    fetch("http://localhost:3000/todososprodutos")
        .then(response => {
            return response.json();
        })
        .then((data) => {
            data.forEach(cada => {
                let select = document.querySelector(".coisa").value

                let opn = select.cloneNode(true)

                // opn.classList.remove("modelo")

                // let op = opn.querySelector(".produto")

                opn.innerHTML += ` <option value="${cada.produto}">${cada.produto}</option>`;

                document.querySelector(".input").appendChild(opn);
            })
        })
}
