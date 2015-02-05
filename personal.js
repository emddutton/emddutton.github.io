/**
 * Created by emddutton on 1/1/2015.
 */
$(function() {
    $('.menu').on("click", function(){
        $('.menu').removeClass('active');
        $('.content').removeClass('active');

        $(this).addClass("active");



    });


});