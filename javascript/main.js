const scroolLado = document.querySelectorAll(".show-on-scroll");
const scrollCima = document.querySelectorAll(".show-on-scroll-cima");

const scrollBaixo = document.querySelectorAll(".show-on-scroll-baixo");

console.log(scrollBaixo);

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
