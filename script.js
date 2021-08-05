const images = document.querySelectorAll('.image')
const main = document.querySelector('.main img')



images.forEach(image =>{
    image.addEventListener('click', ()=>{
        main.src = image.src    //src - ссылка
        images.forEach(image =>image.removeAttribute('class'))
        image.classList.add('border')
    })
})



// const smallImages = document.querySelectorAll('.small-img')
// const smallWrapper = document.querySelector('.small-wrapper')
// const bigImg = document.querySelector('.big-img')
//
// smallWrapper.addEventListener('click', (e)=>{
//     if (e.target.classList[0] === 'small-img'){
//         bigImg.src = e.target.src
//         smallImages.forEach(item => item.classList.remove('active'))
//         e.target.classList.add('active')
//     }
// })