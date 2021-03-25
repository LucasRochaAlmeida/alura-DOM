const criarTarefa = (evento) => { // oq o evento vai fazer
    evento.preventDefault() // impede que o form haja como formulario mesmo, não realizando POST ao clicar

    const lista = document.querySelector('[data-list]') // selecionando elemento 

    const input = document.querySelector('[data-form-input]') // selecionando o input
    const valor = input.value // extraindo o valor do input
    
    const tarefa = document.createElement('li') // criando o elemento li (lista)
    tarefa.classList.add('task') //add o elemento a sua classe para pegar as configurações do CSS
    const conteudo = `<p class="content">${valor}</p>` // conteudo que será adicionado

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConcui()) //dentro do item da lista 'li' vai junto tbm criar um botão de confirmação

    lista.appendChild(tarefa)
    
    input.value = " " //esvazia o campo depois
}

const novaTarefa = document.querySelector('[data-form-button]') //selecionando o elemento que vai receber o evento

novaTarefa.addEventListener('click', criarTarefa) //click é o evento e criarTarefa é oq ele vai fazer (reação)


const BotaoConcui = () => {
    const botaoConclui = document.createElement('button') //cria o elemento botão

    botaoConclui.classList.add('check-button') 
    botaoConclui.innerText = 'Concluir' //texto do botão

    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui
}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target

    const tarefaCompleta = botaoConclui.parentElement

    tarefaCompleta.classList.toggle('done')

}