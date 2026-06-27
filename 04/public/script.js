fetch("/api/jogadores")
  .then((resposta) => resposta.json())
  .then((jogadores) => {
    const container = document.getElementById("lista-jogadores");

    jogadores.forEach((jogador) => {
      const cartao = document.createElement("div");
      cartao.className = "cartao-jogador";

      cartao.innerHTML = `
                <div class="numero">${jogador.numero}</div>
                <div class="info">
                    <h3>${jogador.nome}</h3>
                    <p>${jogador.posicao}</p>
                </div>
            `;

      container.appendChild(cartao);
    });
  })
  .catch((erro) => console.error("Erro na API:", erro));
