
$(window).on("load", function(){
    
    var nav = $("nav").find("a");
    var btn = $(".btn").find("a");

    nav.add(btn).click(function(e){
        e.preventDefault();

        var href = $(this).attr("href");
        var offsetTop = $(href).offset().top;

        $('html,body').animate({
            "scrollTop":offsetTop
        });
    });

    

});