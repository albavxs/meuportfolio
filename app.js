
document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});

let trilho = document.getElementById("trilho");

let body = document.querySelector("body");

trilho.addEventListener("click", () => {
  trilho.classList.toggle("light");

  body.classList.toggle("light");
});

document.getElementById("toggleButton").addEventListener("click", function () {
  const texto1 = document.getElementById("texto1");

  const botao = this;

  const projeto2 = document.querySelector(".projeto2");

  const projeto3 = document.querySelector(".projeto3");

  texto1.classList.toggle("expande");

  if (texto1.classList.contains("expande")) {
    //se veja mais for clicado o botao agora passa ser de ocultar
    botao.innerText = "Ocultar";

    projeto2.classList.add("ocultar"); //e projetos 2 e 3 são ocultados

    projeto3.classList.add("ocultar");
  } else {
    botao.innerText = "Veja Mais";
    // Mostra os outros projetos novamente
    projeto2.classList.remove("ocultar");
    projeto3.classList.remove("ocultar");
  }
});

document.getElementById("toggleButton2").addEventListener("click", function () {
  const texto2 = document.getElementById("texto2");

  const botao = this;

  const projeto1 = document.querySelector(".projeto1");

  const projeto3 = document.querySelector(".projeto3");

  texto2.classList.toggle("expande");

  if (texto2.classList.contains("expande")) {
    //se veja mais for clicado o botao agora passa ser de ocultar
    botao.innerText = "Ocultar";

    projeto1.classList.add("ocultar"); //e projetos 1 e 3 são ocultados

    projeto3.classList.add("ocultar");
  } else {
    botao.innerText = "Veja Mais";

    // Mostra os outros projetos novamente
    projeto1.classList.remove("ocultar");

    projeto3.classList.remove("ocultar");
  }
});

document.getElementById("toggleButton3").addEventListener("click", function () {
  const texto3 = document.getElementById("texto3");

  const botao = this;

  const projeto1 = document.querySelector(".projeto1");

  const projeto2 = document.querySelector(".projeto2");

  texto3.classList.toggle("expande");

  if (texto3.classList.contains("expande")) {
    //se veja mais for clicado o botao agora passa ser de ocultar
    botao.innerText = "Ocultar";

    botao.classList.toggle("novaCor");

    projeto1.classList.add("ocultar"); //e projetos 1 e 2 são ocultados

    projeto2.classList.add("ocultar");
  } else {
    botao.innerText = "Veja Mais";

    // Mostra os outros projetos novamente
    projeto1.classList.remove("ocultar");

    projeto2.classList.remove("ocultar");
  }
});
