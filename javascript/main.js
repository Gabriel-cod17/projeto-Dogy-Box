const scroolLado = document.querySelectorAll(".show-on-scroll");
const scrollCima = document.querySelectorAll(".show-on-scroll-top");

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
      entry.target.classList.add("activee");
    }
  });
});

scrollCima.forEach((item) => {
  observerTop.observe(item);
});

scroolLado.forEach((item) => {
  observer.observe(item);
});
