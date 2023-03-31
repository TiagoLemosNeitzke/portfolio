const observer = new IntersectionObserver(entries => {

    /*criando a class do tailwind dinâmicamente*/
    let width = entries[0].target.attributes.style.value
    width = width.split('width: ')
    width = width[1].split('%')
    let percent = width[0]
    let partialProperty = "animate-progressBar"
    let property = partialProperty + percent
    entries[0].target.classList.add(property)
}, {
    threshold: 1
})

Array.from(document.querySelectorAll('.animate')).forEach(el => {
    observer.observe(el)
})
observer.observe(document.querySelector('.animate'))
const animate = new IntersectionObserver(entries => {
    /*criando a class do tailwind dinâmicamente*/
    let width = entries[0].target.attributes.style.value
    width = width.split('width: ')
    width = width[1].split('%')
    let percent = width[0]
    let partialProperty = "animate-progressBar"
    let property = partialProperty + percent

    entries[0].target.classList.add(property)
}, {
    threshold: 1
})

Array.from(document.querySelectorAll('.animate')).forEach(el => {
    animate.observe(el)
})
animate.observe(document.querySelector('.animate'))

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

