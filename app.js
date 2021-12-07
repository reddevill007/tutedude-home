const box2 = document.getElementById('form_box')
const box1 = document.getElementById('form_box_log')
const sign = document.getElementById('sign')
const log = document.getElementById('log')
const close1 = document.getElementById('close1')
const close2 = document.getElementById('close2')
const already = document.getElementById('already')
const register = document.getElementById('register')


log.addEventListener('click', ()=>{
    box1.style.display = 'flex';
})

close1.addEventListener('click', ()=>{
    box1.style.display = 'none';
})

sign.addEventListener('click', ()=>{
    box2.style.display = 'flex';
})

close2.addEventListener('click', ()=>{
    box2.style.display = 'none';
})

already.addEventListener('click', (e)=>{
    box2.style.display = 'none';
    box1.style.display = 'flex';
})

register.addEventListener('click', (e)=>{
    box1.style.display = 'none';
    box2.style.display = 'flex';
})

