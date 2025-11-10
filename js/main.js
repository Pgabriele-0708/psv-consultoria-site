const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
const header = document.getElementById('header');


navToggle.addEventListener('click', ()=>{
mainNav.classList.toggle('open');
});


function submitForm(e){
e.preventDefault();
const f = e.target;
const nome = f.nome.value.trim();
const email = f.email.value.trim();
const mensagem = f.mensagem.value.trim();
if(!nome || !email || !mensagem){
alert('Preencha todos os campos.');
return;
}
alert('Obrigado, ' + nome + '! Sua mensagem foi enviada.');
f.reset();
}


document.getElementById('year').textContent = new Date().getFullYear();


// Header transparente que muda ao rolar
window.addEventListener('scroll', ()=>{
if(window.scrollY > 50){
header.classList.add('scrolled');
} else {
header.classList.remove('scrolled');
}
});


// Efeito fade-in ao rolar
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.3, rootMargin: '0px 0px -50px 0px' };
const appearOnScroll = new IntersectionObserver(function(entries, observer){
entries.forEach(entry => {
if(!entry.isIntersecting) return;
entry.target.classList.add('visible');
observer.unobserve(entry.target);
});
}, appearOptions);


faders.forEach(fader => { appearOnScroll.observe(fader); });

// Detecta elementos com a classe .fade-up e aplica a animação ao rolar
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // anima apenas uma vez
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});
// Seleciona o formulário
const form = document.querySelector('.contato-form');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // impede o recarregamento da página

  // Pega os valores digitados
  const nome = form.querySelector('input[name="nome"]').value.trim();
  const email = form.querySelector('input[name="email"]').value.trim();
  const mensagem = form.querySelector('textarea[name="mensagem"]').value.trim();

  // Verifica se está tudo preenchido
  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos antes de enviar.");
    return;
  }

  // Monta a mensagem para o WhatsApp
  const texto = `Olá, sou ${nome}!%0A` +
                `Meu e-mail: ${email}%0A%0A` +
                `Mensagem:%0A${mensagem}`;

  // 👉 Número principal da empresa (coloque o que preferir)
  const numeroWhatsApp = "5521969190435"; // formato: 55 + DDD + número (sem espaços)
  const link = `https://wa.me/${numeroWhatsApp}?text=${texto}`;

  // Abre o WhatsApp em nova aba
  window.open(link, "_blank");

  // Limpa o formulário após o envio
  form.reset();
});

