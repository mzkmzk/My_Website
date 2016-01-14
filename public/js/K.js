var one =true;
document.querySelector('.menu .bt').addEventListener('click',function(){
    console.log('menu bt click');
    var $content = document.getElementsByClassName('show-button')[0];

        $content.setAttribute('style','display:inherit');

    $content.classList.toggle('slideOutDown');
    $content.classList.toggle('slideInDown');
},false);