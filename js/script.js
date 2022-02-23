function like(elemento) {
    if (elemento.src.includes('/images/icons/like-full-icon.png')) {
        elemento.src = 'images/icons/like-icon.svg'
    } else {
        elemento.src = 'images/icons/like-full-icon.png'
    }
}