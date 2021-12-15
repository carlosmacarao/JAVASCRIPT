var a = window.document.getElementById('area');
a.addEventListener('click', clicar);
a.addEventListener('mouseenter', entrar);
a.addEventListener('mouseout', sair);

function clicar() {
    
    a.innerText = 'Clicou';
    a.style.background = 'red';
}
function entrar() {
   // var a = window.document.getElementById('area');
    a.innerText = 'Entrou';
    
    
}
function sair() {
    //var a = window.document.getElementById('area');
    a.innerText = 'Saiu';
    a.style.background = 'green'
}