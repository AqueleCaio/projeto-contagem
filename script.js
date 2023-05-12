let inicio = document.getElementById('iComeco');
let fim = document.getElementById('iFim');
let passos = document.getElementById('iPasso');

const resultado = document.getElementById('resp')
const botaoContar = document.getElementById('contar');

botaoContar.addEventListener('click', function(){
    const valor_inicio = Number(inicio.value);
    const valor_fim = Number(fim.value)
    const valor_passos = Number(passos.value)


    for(let i = valor_inicio; i <= valor_fim; i += valor_passos){
        resultado.innerText += `${i}` 
    }

    for(let i = 0; i < valor_fim; i++){
        console.log('pau e cu, 3,50')
    }
    
    for (let i = 0; i < lista.length; i++){
        console.log(`Item ${i} --> ${lista[i]}`)
    }
    resultado.innerText = `Início: ${inicio.value} | Fim: ${fim.value} | Passos: ${passos.value}`

});