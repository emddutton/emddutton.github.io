/**
 * Created by emddutton on 1/1/2015.
 */
$(function() {
    $('.menu').on("click", function(){
        $('.menu').removeClass('active');
        $('.content').removeClass('active');
        $(this).addClass("active");

    if(this.id == "aboutmenu"){
        $(".fade").hide();
        $("#about").show();
    }
    else if(this.id == "portmenu"){
        $(".fade").hide();
        $("#portfolio").show();
    }
        else if(this.id == "resumemenu"){
        $(".fade").hide();
        $("#resume").show();
    }




    });


});