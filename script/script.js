$(document).ready(function () {

    $(".menu__mobile").click(function () {
        console.log($(".mobile__list").height());
        $(".menu__mobile").toggleClass("menu__active");
        $(".mobile").toggleClass("mobile__height");
    });


/* */
    $(function () {

        var item__image = $(".item__image img");
       
        $(item__image).each(function (index, value) {

            if ($(this).height() > 400) {
                $(this).next().css( "top", "82%" )
            }
            
            if ($(this).height() > 500) {
                $(this).find(".share").css( "top", "88%" )
            }
            
        });
    });




});
