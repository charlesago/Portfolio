
const text = document.querySelector("#text")
const stars = document.querySelector("#stars")
const monn = document.querySelector("#moon")
const montainefront = document.querySelector("#moutainfront")
const montainbehind = document.querySelector("#moutainbehind")
const btn = document.querySelector('#btn')
window.addEventListener('scroll', ()=>{
    let value = window.scrollY;

   stars.style.left = value * 0.25 + 'px';
    monn.style.top = value * 1.05 + 'px';
    montainbehind.style.top = value * 0.5 + 'px';
    montainefront.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
})



