// Common functions
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

// Rules Script Start
let rulesBtn = document.querySelector('#rules-btn');
let hiddenRules = document.querySelector('.hidden');

rulesBtn.addEventListener('click', function(){

    if (hiddenRules.style.display == 'block'){
        hiddenRules.style.display = 'none';
        hiddenRules.style.opacity = '0';
        rulesBtn.innerHTML = 'Читать больше';
    }else {
        hiddenRules.style.display = 'block';
        hiddenRules.style.opacity = '1';
        rulesBtn.innerHTML = 'Читать меньше';
    }
});
// Rules Script End

// Header Script Start 
let links = document.querySelector('#links');
let burgerBtn = document.querySelector('#burger-menu');

burgerBtn.addEventListener("click", function(){
    if(this.classList.contains('animate__flipInX') == true){
        this.classList.remove('animate__flipInX');
        links.classList.add('animate__fadeOut');
        this.classList.add('animate__shakeY');
        this.classList.remove('burger-active');
        sleep(800).then(() => {
            links.classList.remove('active');
            links.classList.remove('animate__fadeIn');
            this.classList.remove('animate__shakeY');
        });
    }else {
        this.classList.add('animate__flipInX');
        this.classList.add('burger-active');
        links.classList.add('active');
        links.classList.remove('animate__fadeOut');
        links.classList.add('animate__fadeIn');
    }



    

});