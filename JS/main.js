const button = document.querySelector('.bbtn')
const arms = document.querySelectorAll('.arm')
const head = document.querySelector('#head')
const header = document.querySelector('.header')

button.addEventListener('click', ()=>{
    if(head.classList.contains('hShow')){
        head.classList.remove('hShow')
    }else {
        header.style.display = 'relative'
        head.classList.add('hShow')
    }
})

arms.forEach(arm => {
    arm.addEventListener('click', () =>{
        head.classList.remove('hShow')
    })   
});