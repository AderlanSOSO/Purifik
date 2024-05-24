document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password123') {
        alert('Login bem-sucedido!');
        // Redirecionar para outra página ou realizar outras ações
    } else {
        alert('Usuário ou senha incorretos.');
    }
});
