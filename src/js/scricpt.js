const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if(event.type === "touchstart") event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

let count = 1;
document.getElementById('radio1').checked = true;

setInterval(() =>{
    nextImage();
}, 4000)

function nextImage(){
    count++;
    if(count > 4){
        count = 1;
    }
    document.getElementById(`radio${count}`).checked = true;
}