export default function App() {
  // const nome = "Lucas Assis Cosme"
  // const valor1 = 10
  // const valor2 = 20
  // const soma = valor1 + valor2
  // const ativo = false
  function meuNome() {
    return 'Lucas Assis'
  }
  function quadrado(x) {
    return x * x
  }
  const carro = {
    rodas: 4,
    modelo: 'Ford'
  }
  const estiloH1 = {
    color: "blue",
    fontsize: "20px",
    fontFamily: "Helvetica"
  }
  const murilo = {
    temFalcudade: true,
    nome: "Murilo"
  }
  // Mostre os dados da aplicação, como aprensetado no vídeo
  // Não utilize CSS externo, use o style para mudar as cores
  // Se a situação estiver ativa pinte de verde, inativa vermelho
  // Se o gasto for maior que 10000 mostre uma mensagem
  const luana = {
    cliente: 'Luana',
    idade: 27,
    totalCompras: 15000,
    ativa: true,
  };

  const mario = {
    cliente: 'Mario',
    idade: 31,
    totalCompras: 20000,
    ativa: false,
  };
  const kayler = {
  cliente: 'Kayler',
  idade: 29,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const josemar = {
  cliente: 'Josemar',
  idade: 35,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};
const soma = josemar.compras.reduce((total, compra) => {
  const valorLimpo = compra.preco
    .replace("R$", "")
    .replace(",", ".")
    .trim();

  return total + Number(valorLimpo);
}, 0);
  const dados = luana;
  return (
    <>

      {/* <p>Ola {nome}, sabia que {valor1} + {valor2} = {soma}</p> */}
      {/* <p className={ativo? 'Ativo' : 'Inativo'}>Estoque</p> */}
      <p>{'Eu sou maravilhoso'.toLowerCase()}</p>
      <p>{30 * 2}</p>
      <p>{true}</p>
      <p>{undefined}</p>
      <p>{meuNome()}</p>
      <p>{quadrado(2)}</p>
      <p>{quadrado(2) === 4 ? "Fórmula correta" : "Fórmula Incorreta"}</p>
      <p>{quadrado(2) === 4 && "Fórmula correta"}</p> {/*so vai passra do && se for verdadeiro*/}
      <p>{new Date().getFullYear()}</p>
      {/*Ex 1*/}
      <h1 style={estiloH1}>LUCAS ASSIS</h1>
      {/*Ex 2*/}
      <h1 style={{ color: "#e56", fontSize: "20px" }}>Vurso Fullstack</h1>
      {/*Ex 3 - tem condição*/}
      <p style={{ color: false ? 'red' : "Blue" }}>Possui Carro</p>
      {/*Ex 4*/}
      <p> MURILO {murilo.temFalcudade ? <span style={{ color: "green" }}>SIMMMMMM</span> : <span style={{ color: "red" }}>NAAAOOOO</span>}</p>
      <h1 style={{ color: murilo.temFalcudade ? 'red' : 'black' }}>MURILO</h1>
      {/* luana */}
      <p>Nome: {luana.cliente}</p>
      <p>Idade: {luana.idade}</p>
      <p>Total de valor gastado: {luana.totalCompras}</p>
      <p>Ativa? {luana.ativa ? <p style={{ color: "green" }}>SIM</p> : <p style={{ color: "red" }}>NÃO</p>}</p>
      <p>Gasta Muito? {luana.totalCompras > 10000 ? <p style={{ color: "green" }}>NÃO</p> : <p style={{ color: "red" }}>SIM</p>}</p>
      {/* mario */}
      <p>Nome: {mario.cliente}</p>
      <p>Idade: {mario.idade}</p>
      <p>Total de valor gastado: {mario.totalCompras}</p>
      <p>Ativa? {mario.ativa ? <p style={{ color: "green" }}>SIM</p> : <p style={{ color: "red" }}>NÃO</p>}</p>
      <p>Gasta Muito? {mario.totalCompras > 10000 ? <p style={{ color: "green" }}>NÃO</p> : <p style={{ color: "red" }}>SIM</p>}</p>
      {/* dados */}
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>Total de valor gastado: {dados.totalCompras}</p>
      <p>Ativa? {dados.ativa ? <p style={{ color: "green" }}>SIM</p> : <p style={{ color: "red" }}>NÃO</p>}</p>
      <p>Gasta Muito? {dados.totalCompras > 10000 ? <p style={{ color: "green" }}>NÃO</p> : <p style={{ color: "red" }}>SIM</p>}</p>
      {/* Kayler */}
      <p>Nome: {kayler.cliente}</p>
      <p>Idade: {kayler.idade}</p>
      <p>Ativa? {kayler.ativa ? <p style={{ color: "green" }}>SIM</p> : <p style={{ color: "red" }}>NÃO</p>}</p>
      <p>
  Gasta Muito? {" "}
  {soma > 10000 ? (
    <span style={{ color: "green" }}>NÃO</span>
  ) : (
    <span style={{ color: "red" }}>SIM</span>
  )}
</p>
       

    </>
  )
}
