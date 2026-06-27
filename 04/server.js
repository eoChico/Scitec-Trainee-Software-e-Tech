const express = require("express");
const path = require("path");
const app = express();
const porta = 3000;

const escalacaoBrasil = [
  { id: 1, nome: "Alisson", posicao: "Goleiro", numero: 1 },
  { id: 2, nome: "Éderson", posicao: "Meio-campo", numero: 2 },
  { id: 3, nome: "Gabriel Magalhães", posicao: "Zagueiro", numero: 3 },
  { id: 4, nome: "Marquinhos", posicao: "Zagueiro", numero: 4 },
  { id: 5, nome: "Casemiro", posicao: "Volante", numero: 5 },
  { id: 6, nome: "Alex Sandro", posicao: "Lateral Esquerdo", numero: 6 },
  { id: 7, nome: "Vinicius Júnior", posicao: "Atacante", numero: 7 },
  { id: 8, nome: "Bruno Guimarães", posicao: "Volante", numero: 8 },
  { id: 9, nome: "Matheus Cunha", posicao: "Atacante", numero: 9 },
  { id: 10, nome: "Neymar Jr.", posicao: "Atacante", numero: 10 },
  { id: 11, nome: "Raphinha", posicao: "Atacante", numero: 11 },
  { id: 12, nome: "Weverton", posicao: "Goleiro", numero: 12 },
  { id: 13, nome: "Danilo", posicao: "Lateral Direito", numero: 13 },
  { id: 14, nome: "Bremer", posicao: "Zagueiro", numero: 14 },
  { id: 15, nome: "Léo Pereira", posicao: "Zagueiro", numero: 15 },
  { id: 16, nome: "Douglas Santos", posicao: "Lateral Esquerdo", numero: 16 },
  { id: 17, nome: "Fabinho", posicao: "Volante", numero: 17 },
  { id: 18, nome: "Danilo", posicao: "Meio-campo", numero: 18 },
  { id: 19, nome: "Endrick", posicao: "Atacante", numero: 19 },
  { id: 20, nome: "Lucas Paquetá", posicao: "Meio-campo", numero: 20 },
  { id: 21, nome: "Luiz Henrique", posicao: "Atacante", numero: 21 },
  { id: 22, nome: "Gabriel Martinelli", posicao: "Atacante", numero: 22 },
  { id: 23, nome: "Ederson", posicao: "Goleiro", numero: 23 },
  { id: 24, nome: "Ibañez", posicao: "Zagueiro", numero: 24 },
  { id: 25, nome: "Igor Thiago", posicao: "Atacante", numero: 25 },
  { id: 26, nome: "Rayan", posicao: "Atacante", numero: 26 },
  { id: 27, nome: "Carlo Ancelotti", posicao: "Técnico", numero: "Téc" },
];

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/escalacao", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "escalacao.html"));
});
app.get("/contato", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contato.html"));
});

// API

app.get("/api/jogadores", (req, res) => {
  res.json(escalacaoBrasil);
});

app.get("/api/jogadores/buscar", (req, res) => {
  const nomePesquisado = req.query.nome;
  if (!nomePesquisado) return res.json({ erro: "Forneça o nome." });
  const resultado = escalacaoBrasil.filter((j) =>
    j.nome.toLowerCase().includes(nomePesquisado.toLowerCase()),
  );
  res.json(resultado.length > 0 ? resultado : { mensagem: "Não encontrado." });
});

app.get("/api/jogadores/:id", (req, res) => {
  const jogador = escalacaoBrasil.find((j) => j.id === parseInt(req.params.id));
  res.json(jogador || { erro: "Jogador não encontrado." });
});
app.listen(porta, () => {
  console.log(`Servidor rodando bonito na porta ${porta}!`);
  console.log(`Acesse: http://localhost:${porta}`);
});
