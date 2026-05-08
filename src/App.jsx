export default function App() {

  const ana = {
    nome: "ana",
    idade: 20,
    ListaDeCurso: [
      { nome: "desenvolvedor", valor: "R$ 2000" },
      { nome: "cozinheiro", valor: "R$ 4000" },
      { nome: "massageador", valor: "R$ 1000" },
      { nome: "atirador", valor: "R$ 8000" }
    ],
    StatusDoCurso: true

  }
  const pedro = {
    nome: "pedro",
    idade: 22,
    ListaDeCurso: [
      { nome: "Assasino", valor: "R$ 6000" },
      { nome: "cozinheiro", valor: "R$ 4000" },
      { nome: "massageador", valor: "R$ 1000" },
      { nome: "atirador", valor: "R$ 8000" }
    ],
    StatusDoCurso: true

  }
  const dados = pedro

 const Totalinvestido = dados.ListaDeCurso.map(curso => curso);
  const soma = Totalinvestido.reduce((total, ListaDeCurso) => {
    const valorLimpo = ListaDeCurso.valor
      .replace("R$", " ")
      .replace(",", ".")
      .trim();

    return total + Number(valorLimpo);
  }, 0);

  return (
    <>
      <p>Nome: {dados.nome}</p>
      <p>Idade: {dados.idade}</p>
      <p>Status da matricula: {dados.StatusDoCurso ? <span style={{ color: "green" }}>ATIVA</span> : <span style={{ color: "red" }}>INATIVA</span>}</p>
      <p>
        Total Investido: R$ {soma}
      </p>
      <p>{soma > 2500 && <span>Parabens você é um aluno premium</span>}</p>
      <ul>
        {dados.ListaDeCurso.map(curso => (
          <li key={curso.nome}>{curso.nome}</li>
        ))}
      </ul>
    </>

  )
}
