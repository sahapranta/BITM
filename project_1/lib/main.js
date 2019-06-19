window.onload = ()=>{
    let toggler = document.querySelector('.nav-toggle');
    toggler.addEventListener('click', function(){
        this.nextElementSibling.classList.toggle('menu'); 
    });
}