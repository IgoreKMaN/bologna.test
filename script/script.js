$( document ).ready(function() {
   
    $(".menu__mobile").click(function(){
         console.log($(".mobile__list").height());
        $(".menu__mobile").toggleClass("menu__active");
        $(".mobile").toggleClass("mobile__height");
    });
});