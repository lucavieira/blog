let newPostButton = document.querySelector('#novo-post')
let main = document.querySelector('main')
let heartButtons = document.getElementsByClassName('botao-gostei')
let trashButtons = document.getElementsByClassName('botao-deletar')

const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

newPostButton.addEventListener('click', newPost)

for(let i = 0; i < localStorage.length; i++) {
    if(localStorage.key(i).includes('Post')) {
        main.insertAdjacentHTML('beforeend', localStorage.getItem(localStorage.key(i)))
    }
}

for(let button = 0; button < heartButtons.length; button++) {
    heartButtons[button].addEventListener('click', () => like(heartButtons[button].id))
    trashButtons[button].addEventListener('click', () => deletePost(trashButtons[button].id))
}

function like(id) {
    let likeButton = document.getElementById(`${id}`)
    if(likeButton.getAttribute('src') == './assets/images/heart-icon.svg') {
        likeButton.setAttribute('src', './assets/images/heart-icon-colored.svg')
    } else {
        likeButton.setAttribute('src', './assets/images/heart-icon.svg')
    }
}

function deletePost(id) {
    console.log(id)
}

function newPost() {
    let postData = `${new Date().getDate()} de ${months[new Date().getMonth()]}, ${new Date().getFullYear()}`
    let postTitle = prompt('Titulo da Postagem: ')
    let postDescription = prompt('Descrição da Postagem: ')

    let post = document.createElement('div')
    post.classList.add('posts')

    // Informações
    let information = document.createElement('div')
    information.classList.add('informacoes')

    let createdData = document.createElement('small')
    createdData.classList.add('data-publicacao')
    createdData.innerHTML = postData

    let containerButtons = document.createElement('div')
    containerButtons.classList.add('container-botoes')

    let heartButton = document.createElement('img')
    heartButton.setAttribute('src', './assets/images/heart-icon.svg')
    heartButton.classList.add('botao-gostei')
    heartButton.id = randomID()
    heartButton.onclick = () => like(heartButton.id)

    let deleteButton = document.createElement('img')
    deleteButton.id = randomID()
    deleteButton.classList.add('botao-deletar')
    deleteButton.onclick = () => deletePost(deleteButton.id)
    deleteButton.setAttribute('src', './assets/images/trash-icon.svg')

    containerButtons.appendChild(heartButton)
    containerButtons.appendChild(deleteButton)

    information.appendChild(createdData)
    information.appendChild(containerButtons)
    // information.appendChild(heartButton)

    // Conteúdo
    let content = document.createElement('div')
    content.classList.add('conteudo')

    let title = document.createElement('h2')
    title.classList.add('titulo-post')
    title.innerHTML = postTitle

    let description = document.createElement('p')
    description.classList.add('descricao-post')
    description.innerHTML = postDescription

    content.appendChild(title)
    content.appendChild(description)

    post.appendChild(information)
    post.appendChild(content)

    main.appendChild(post)

    localStorage.setItem(`Post-${heartButton.id}`, post.outerHTML)
}

function randomID(min=0, max=5000) {
    let listButtons = document.getElementsByClassName('botao-gostei')
    let id = Math.floor(Math.random() * (max - min) + min)
    
    if(listButtons.length == 0) {
        return 0
    } else {
        for(let i = 0; i < listButtons.length; i++) {
            if(listButtons[i].id != id) {
                return id
            } else {
                randomID()
            }
        }
    }
}