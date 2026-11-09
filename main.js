
const filmes = [
    {
        produto: "Velozes e Furiosos",
        categoria: "Ação",
        quantidade: 10,
        preco: 29.90
    },
    {
        produto: "Annabelle",
        categoria: "Terror",
        quantidade: 5,
        preco: 24.90
    },
    {
        produto: "Shrek",
        categoria: "Animação",
        quantidade: 8,
        preco: 19.90
    },
    {
        produto: "Guardiões da Galáxia",
        categoria: "Ficção científica",
        quantidade: 6,
        preco: 34.90
    }
];

const corpoTabela = document.getElementById("corpoTabela");

filmes.forEach(filme => {

    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${filme.produto}</td>
        <td>${filme.categoria}</td>
        <td>${filme.quantidade}</td>
        <td>R$ ${filme.preco.toFixed(2).replace(".", ",")}</td>
    `;

    corpoTabela.appendChild(linha);

});
