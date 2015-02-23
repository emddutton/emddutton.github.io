/**
 * Created by emddutton on 2/18/2015.
 */
$(document).ready(function(){

    function reload(){
            if($("div").hasClass("intro")){
                $("div").removeClass("intro");
            } else {
                $(".fade").hide("fast");
            }
        }

    $(".menu").on('click', function(){
            reload();
            $(".fade." + this.id).show("slow");
    });

});