let likeButton = document.querySelector('.botao-gostei')

likeButton.addEventListener('click', () => {
    if(likeButton.getAttribute('src') == './assets/images/heart-icon.svg') {
        likeButton.setAttribute('src', './assets/images/heart-icon-colored.svg')
    } else {
        likeButton.setAttribute('src', './assets/images/heart-icon.svg')
    }
})