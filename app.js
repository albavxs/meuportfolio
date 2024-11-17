
AOS.init({ disable: "mobile" });


document.getElementById("toggleButton").addEventListener("click", function () {
  const texto1 = document.getElementById("texto1");

  const botao = this;



  texto1.classList.toggle("expande");

  if (texto1.classList.contains("expande")) {
    //se veja mais for clicado o botao agora passa ser de ocultar
    botao.innerText = "Ocultar";

   
  } else {
    botao.innerText = "Veja Mais";
    // Mostra os outros projetos novamente
 
  }
});

document.getElementById("toggleButton2").addEventListener("click", function () {
  const texto2 = document.getElementById("texto2");

  const botao = this;

  

  texto2.classList.toggle("expande");

  if (texto2.classList.contains("expande")) {
    //se veja mais for clicado o botao agora passa ser de ocultar
    botao.innerText = "Ocultar";

   
  } else {
    botao.innerText = "Veja Mais";


  }
});

document.getElementById("toggleButton3").addEventListener("click", function () {
  const texto3 = document.getElementById("texto3");

  const botao = this;

  

  texto3.classList.toggle("expande");

  if (texto3.classList.contains("expande")) {
    //se veja mais for clicado o botao agora passa ser de ocultar
    botao.innerText = "Ocultar";

  

  } else {
    botao.innerText = "Veja Mais";

    // Mostra os outros projetos novamente
   
  }
});
