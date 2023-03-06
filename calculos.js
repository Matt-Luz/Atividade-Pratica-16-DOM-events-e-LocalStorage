/* Desenvolva aqui a rotina */

let valorBase;
let valorTransporte;
let valorAlimentacao;
let receitaTotal;

let valorAutomovel;
let faltas;
let descontoTotal;

let valorTotal;


window.addEventListener('load', function () {
   
    // Receitas:
    valorBase = document.getElementById('valorBase');
    valorTransporte = document.getElementById('valorTransporte');
    valorAlimentacao = document.getElementById('valorAlimentacao');

    //Receita total:
    receitaTotal = document.getElementById('receitaTotal');

    //Descontos:
    valorAutomovel = document.getElementById('valorAutomovel');
    faltas = document.getElementById('faltas');

    //Desconto total:
    descontoTotal = document.getElementById('totalDescontos');

    //Resultado final:
    valorTotal = document.getElementById('valorTotal');

    // Para calcular automaticamente descomentar abaixo

    // document.getElementById('btnCalcular').addEventListener('click', function () {
    //     calcular();
    // });

    //

    const inputs = document.getElementsByTagName('input');
    for (const input of inputs) {
        input.addEventListener ('blur', function () {
            calcular();
        })
    }

    //Buscar valores salvos no LocalStorage:

    lerLocalStorage();

});

//Função para buscar no LocalStorage:

function lerLocalStorage() {
    const inputs = document.getElementsByTagName('input');

    for (const input of inputs) {
        const valor = localStorage.getItem(input.id);

        //Se existe valor atualizamos se não existe mantém 0.
        if (valor) {
            input.value = valor;
        } else {
            input.value = 0;
        }
    }
}

//Função para salver no LocalStorage:

function salvarLocalStorage() {

    //const inputUsandoQuerySelector = document.querySelectorAll('input);
    const inputs = document.getElementsByTagName('input');

    for (const input of inputs) {
        localStorage.setItem(input.id, input.value)
    }

}

function calcular() {
    //Soma das receitas

    const totalReceitas = parseFloat(valorBase.value) + parseFloat(valorTransporte.value) + parseFloat(valorAlimentacao.value);

    //Atualiza o total do campo receita em tela:

    receitaTotal.value = totalReceitas;

    //Soma dos descontos:

    const totalDescontos = parseFloat(valorAutomovel.value) + parseFloat(faltas.value);

    //Atualiza o campo desconto em tela:

    descontoTotal.value = totalDescontos;

    //Resultado final:

    const total = totalReceitas - totalDescontos;

    //Atualiza o campo total em tela:

    valorTotal.value = total;

    //Salvar no LocalStorage:
    salvarLocalStorage();
}
