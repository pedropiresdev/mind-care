// Cria a varíavel do formulário de contato e recebe ele do HTML
const contactForm = document.getElementById('contact-form');

// "Escuta" a chamada da função submit(click no botão)
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário enquanto o resto da função não for executada/validada

  // Recebe os valores dos campos
  const nome = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  console.log("Entrou")
  // Verifica se todos os campos foram preenchidos
  if (nome === '' || email === '' || message === '') {
    alert('Por favor, preencha todos os campos.');
  } else {
    // Se estiverem preenchidos, emite um alerta de confirmação de envio
    alert('Mensagem enviada com sucesso! Obrigado pelo seu contato.');

    // Limpa os campos do formulário para dar um "feeling" extra de que a mensagem foi enviada e evitar duplicatas.
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }
});

