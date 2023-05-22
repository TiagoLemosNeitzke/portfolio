/* Função para abrir o menu mobile */
function handleMenu() {
    let div = document.getElementById('nav')

    div.classList.remove('lg:flex')
    div.classList.remove('lg:w-96')
    div.classList.remove('lg:flex-row')
    if (div.classList.value == 'hidden') {
        div.classList.remove('hidden')
    } else {
        div.classList.add('hidden')
    }
}

