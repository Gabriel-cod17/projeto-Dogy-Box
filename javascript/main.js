// busca de todos os elementos dom da página

const scroolLado = document.querySelectorAll(".show-on-scroll");
const scrollCima = document.querySelectorAll(".show-on-scroll-cima");
const scrollBaixo = document.querySelectorAll(".show-on-scroll-baixo");
const seg_Sex = document.getElementById("seg_Sex");
const sab = document.getElementById("sab");
const tabela_Horarios = document.getElementById("tabela_Horarios");
const tabela_Horarios_Sab = document.getElementById("tabela_Horarios_Sab");
const carregando = document.getElementById("carregando");
const menu_Mobile_A = document.querySelectorAll(".menu_Mobile_A");
const site = document.querySelectorAll(".site");
const img_Menu_Mobile = document.getElementById("img_Menu_Mobile");
const mobile = document.getElementById("mobile");
const img_Menu_Aberto = document.getElementById("img_Menu_Aberto");

// configuração da parte do menu

img_Menu_Mobile.addEventListener("click", () => {
  if (img_Menu_Aberto.classList.contains("fechado")) {
    img_Menu_Aberto.src = "../assets/img/botao-fechar.png";
    img_Menu_Aberto.classList.toggle("aberto");
    img_Menu_Aberto.classList.remove("fechado");
    mobile.style.display = "flex";
  } else {
    img_Menu_Aberto.src = "../assets/img/menu-aberto.png";
    img_Menu_Aberto.classList.add("fechado");
    img_Menu_Aberto.classList.remove("aberto");
    mobile.style.display = "none";
  }
});

// Configuração de quanto clicar no itens do menu ele fecha o menu e vai para a aba
menu_Mobile_A.forEach((a) => {
  a.addEventListener("click", () => {
    if (img_Menu_Aberto.classList.contains("fechado")) {
      img_Menu_Aberto.src = "../assets/img/botao-fechar.png";
      img_Menu_Aberto.classList.toggle("aberto");
      img_Menu_Aberto.classList.remove("fechado");
      mobile.style.display = "flex";
    } else {
      img_Menu_Aberto.src = "../assets/img/menu-aberto.png";
      img_Menu_Aberto.classList.add("fechado");
      img_Menu_Aberto.classList.remove("aberto");
      mobile.style.display = "none";
    }
  });
});

// função para quando entrar na página, as div se movem para a esquerda, para cima e para baixo

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

const observerTop = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("entrou");
    }
  });
});

scrollCima.forEach((item) => {
  observerTop.observe(item);
});

scroolLado.forEach((item) => {
  observer.observe(item);
});

scrollBaixo.forEach((item) => {
  observerTop.observe(item);
});

// Evento de click para a tabela de horários, fazem a troca da tabela de segunda a sexta para sábado e de sábado para segunda e sexta

sab.addEventListener("click", (e) => {
  setTimeout(() => {
    tabela_Horarios.classList.add("clicou");
    tabela_Horarios.classList.add("display_none");
  }, 1000);

  setTimeout(() => {
    tabela_Horarios_Sab.classList.add("display");
    tabela_Horarios_Sab.classList.remove("display_none");
    tabela_Horarios_Sab.classList.remove("clicou");
  }, 1100);
});

seg_Sex.addEventListener("click", () => {
  setTimeout(() => {
    tabela_Horarios_Sab.classList.add("clicou");
    tabela_Horarios_Sab.classList.add("display_none");
  }, 1000);
  setTimeout(() => {
    tabela_Horarios.classList.add("display");
    tabela_Horarios.classList.remove("display_none");
    tabela_Horarios.classList.remove("clicou");
  }, 1100);
});

// Quando a página carregar completamente ele sai da logo e vai para a página completa, evento de LOAD

window.addEventListener("load", () => {
  setTimeout(() => {
    carregando.style.display = "none";
    site.forEach((s) => {
      s.classList.remove("escondido");
    });
  }, 5000);
});
