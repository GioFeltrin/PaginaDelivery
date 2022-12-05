function clickMenu(){
    if(superior.style.display == 'block') {
        superior.style.display = 'none'
    } else {
        superior.style.display = 'block'
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        superior.style.display = 'block'
    } else {
        superior.style.display = 'none'
    }
}