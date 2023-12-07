const btn = document.getElementById('btn');
function meche(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}
btn.addEventListener('click', meche);