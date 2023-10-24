$(function(){

    var imageActor = $(".sobre-autor .img-autor");
    var bg = $(".bg");
    
    abrirImage();
    fecharImage();

    function abrirImage(){
        imageActor.click(function(e){
            e.stopPropagation();

            var imageAtual = $(this).css("background-image");

            bg.fadeIn();
            bg.find(".image-bg").css("background-image", imageAtual);
        });
    }

    function fecharImage(){
       
        $("body").click(function(){
            bg.fadeOut();
        })
    }

});