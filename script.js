const images = document.querySelectorAll('.image')
const main = document.querySelector('.main img')

images.forEach(image =>{
    image.addEventListener('click', ()=>{
        main.src = image.src    //src - ссылка
        images.forEach(image =>image.removeAttribute('class'))
        image.classList.add('border')
    })
})