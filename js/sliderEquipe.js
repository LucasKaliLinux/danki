$(function(){

    var amt = $('.sobre-autor').length;

    var delay = 6000;
    
    var curIndex = 0;

    initSlider();
    alternarSlider();
    autoPlay();

    function initSlider(){
        
        var sizeContainer = 100 * amt;
        var sizeBoxSingle = 100 / amt;

        $('.scrollWraper').css('width', sizeContainer+"%");
        $('.sobre-autor').css("width", sizeBoxSingle+"%");

        for(var i = 0; i < amt; i++){
            if(i == 0)
                $(".slider-bullets").append("<span style=\"background-color: black;\"></span>");
            else
                $(".slider-bullets").append("<span></span>");
        }

    }

    function autoPlay(){
        setInterval(function(){
            curIndex++;

            if(curIndex == amt){
                curIndex = 0;
            }

            goToSlider(curIndex);

        }, delay);
    }

    function alternarSlider(){
        $(".slider-bullets span").click(function(){

            curIndex = $(this).index();

            var offSetX =  $('.sobre-autor').eq(curIndex).offset().left - $('.scrollWraper').offset().left;

            $(".slider-bullets span").css("background-color", "rgb(200, 200, 200)");
            $(this).css("background-color", "black");

            $(".scrollEquipe").stop().animate({
                "scrollLeft":offSetX
            });

        });
    }

    function goToSlider(id){
        var offSetX = $('.sobre-autor').eq(id).offset().left - $('.scrollWraper').offset().left;

        $(".slider-bullets span").css("background-color", "rgb(200, 200, 200)");
        $(".slider-bullets span").eq(id).css("background-color", "black");

        $(".scrollEquipe").stop().animate({
            "scrollLeft":offSetX
        })
    }

    $(window).resize(function(){
        $(".scrollEquipe").stop().animate({
            "scrollLeft":0
        })
    });

});