import React from "react";

export default function App() {

  const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ];

  return (
    <ul>
      {produtos
        .filter(produto => {
          const valor = Number(
            produto.preco.replace("R$", "").trim()
          );
          return valor > 1500;
        })

        .map(produto => {
          const valor = produto.preco.replace("R$", "").trim();

          return (
            <li key={produto.id}>
              <h1>{produto.nome}</h1>
              <span>Preço: R$ {valor}</span>

              {produto.cores.map(cor => (
                <p
                  key={cor}
                  style={{
                    backgroundColor: cor,
                    color: "white"
                  }}
                >
                  {cor}
                </p>
              ))}
            </li>
          );
        })}
    </ul>
  );
}