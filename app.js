const box2 = document.getElementById('form_box')
const box1 = document.getElementById('form_box_log')
const sign = document.getElementById('sign')
const log = document.getElementById('log')
const close1 = document.getElementById('close1')
const close2 = document.getElementById('close2')
const already = document.getElementById('already')
const register = document.getElementById('register')
const paraShow = document.getElementsByClassName('para_show')
const expand = document.getElementsByClassName('expand')


log.addEventListener('click', () => {
    box1.style.display = 'flex';
})

close1.addEventListener('click', () => {
    box1.style.display = 'none';
})

sign.addEventListener('click', () => {
    box2.style.display = 'flex';
})

close2.addEventListener('click', () => {
    box2.style.display = 'none';
})

already.addEventListener('click', () => {
    box2.style.display = 'none';
    box1.style.display = 'flex';
})

register.addEventListener('click', () => {
    box1.style.display = 'none';
    box2.style.display = 'flex';
})

console.log(expand.length)

for(var i = 0 ; i < expand.length ; i++){
    expand[i].addEventListener('click', () => {
        paraShow[i].classList.toggle("active");
        console.log("kjh")
    })
}

