const BotaoDeleta = () =>{
    const botaoDeleta = document.createElement('button');
    
    botaoDeleta.addEventListener('click', deletarTarefa);
    botaoDeleta.innerText = "Deletar";
    
    return botaoDeleta;    
}

const deletarTarefa = (evento) =>{
    const botaoDeleta = evento.target;

    const TarefaCompleta = botaoDeleta.parentElement;

    TarefaCompleta.remove();

    return botaoDeleta;
}

export default BotaoDeleta;