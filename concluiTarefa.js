const BotaoConclui = () =>{
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = "Concluir";

    botaoConclui.addEventListener('click', ConcluirTarefa);

    return botaoConclui;
}

const ConcluirTarefa = (evento) =>{
    const botaoConclui = evento.target;

    const Feito = botaoConclui.parentElement;

    Feito.classList.toggle('done');

}

export default BotaoConclui;