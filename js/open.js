if (window.innerWidth <= 600) {
    let textSize = document.querySelectorAll('.hello > a')
    let textSize2 = document.querySelector('.hello2 a')
    textSize.forEach((e) =>
        e.classList.remove("active"))
    textSize[1].classList.add("active")

    setTimeout(function(){textSize2.classList.add("active")}, 2000)
    
}