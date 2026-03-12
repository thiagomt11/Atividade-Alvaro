//Fetch para o backend
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const messageDiv = document.getElementById('message');
const messageContainer = document.getElementById('message-container');
const btn = document.getElementById('login-btn');
const btn_fechar = document.getElementById('fechar-btn');

btn.addEventListener('click', async (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const senha = senhaInput.value;
    
    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha })
    });

    const data = await response.json();
    console.log(data);

    try{
         if (response.ok) {
             messageDiv.textContent = data.Message;
             messageDiv.style.color = '#00ff04ff';
         } else {
             messageDiv.textContent = data.Message;
             messageDiv.style.color = '#ff0000ff';
         }
     } catch (error) {
         console.error('Erro ao fazer login:', error);
         messageDiv.textContent = 'Erro ao fazer login. Tente novamente.';
         messageDiv.style.color = '#ff0000ff';
     }
});

//Evento para overlay ao clicar em login
btn.addEventListener('click', () => {
    document.querySelector('.overlay').classList.add('ativo');
});

//Evento para overlay ao clicar em fechar
btn_fechar.addEventListener('click', () => {
    document.querySelector('.overlay').classList.remove('ativo');
});

//Evento para clicar no botão e aparecer a mensagem
btn.addEventListener('click', () => {
    messageContainer.classList.add('show');
});

//Evento para clicar no botão fechar e desaparecer a mensagem
btn_fechar.addEventListener('click', () => {
    messageContainer.classList.remove('show');
});

