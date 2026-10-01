const target = document.getElementById('colecao_produto');

const novoParagrafo = document.createElement('p');
novoParagrafo.textContent = "Saldão dos consoles"
document.body.appendChild(novoParagrafo);

const colecaoProduto = [
    {
        nome: "Polystation",
        preco: 250,
        categoria: "VideoGame"
    },
    {
        nome: "Mega-Drive",
        preco: 300,
        categoria: "VideoGame"
    },
    {
        nome: "Sega-Saturno",
        preco: 450,
        categoria: "VideoGame"
    }
]

for (let i = 0; i < colecaoProduto.length; i++) {
    target.innerHTML += `<li>${colecaoProduto[i].nome} - R$ ${colecaoProduto[i].preco} - categoria ${colecaoProduto[i].categoria} </li>`
}