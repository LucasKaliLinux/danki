
$(window).on("load", function(){

    var mobile = $(".mobile-menu");

    mobile.click(function(){
        $(this).find("ul").slideToggle();
    });

});