const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const year = document.getElementById("year");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const curso = document.getElementById("curso").value;

  if (!nombre || !email || !curso) {
    formMessage.textContent = "Por favor, completa todos los campos.";
    return;
  }

  formMessage.textContent = `¡Gracias, ${nombre}! Recibimos tu solicitud para ${curso}.`;
  contactForm.reset();
});

year.textContent = new Date().getFullYear();
