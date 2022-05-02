$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.nav-bar').addClass("sticky");
        }
        else{
            $('.nav-bar').removeClass("sticky");
        }
    });
    
    });
    //toggle button//
    function animate(x){
        x.classList.toggle("change");
    }