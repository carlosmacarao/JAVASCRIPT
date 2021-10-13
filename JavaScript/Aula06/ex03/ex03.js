var nome = window.prompt("Qual o seu nome? ");

document.write(`Olá, <strong>${nome}!</strong> Seu nome tem ${nome.length} letras. 
</br> Seu nome em minusculas é <strong>${nome.toLowerCase()}</strong> 
</br> Seu nome em maiusculas é <strong>${nome.toUpperCase()}</strong>`);