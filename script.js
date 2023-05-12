let inicio = document.getElementById('iComeco');
let fim = document.getElementById('iFim');
let passos = document.getElementById('iPasso');

const resultado = document.getElementById('resp')
const botaoContar = document.getElementById('contar');

botaoContar.addEventListener('click', function(){
    const valor_inicio = Number(inicio.value);
    const valor_fim = Number(fim.value)
    const valor_passos = Number(passos.value)

    if(inicio.lenght == 0 || valor_fim == 0 || valor_passos == 0){
        window.alert('[ERRO] Verifique os dados inseridos')
    }

    //Enquanto o i for menor ou igual ao valor fim, o valor_passos vai somando no i e printa essa soma.
    for(let i = valor_inicio; i <= valor_fim; i += valor_passos){
        resultado.innerText += ` ${i} > ` 
    }
});