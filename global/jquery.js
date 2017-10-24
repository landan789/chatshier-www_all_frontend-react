$(function(){
$("#slideshowapple > div:gt(0)").hide();

setInterval(function() {
  $('#slideshowapple > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshowapple');
},  7000);
});


$(document).ready(function(){
    $("#navside1").hide();
    $("#a01").click(function(){
      $("#navside1").fadeToggle();
    })
});

/*================FAQ=============*/
// toggle +
$(function(){
  $("#testQuestion, #testQuestion2,#testQuestion3,#testQuestion4,#testQuestion5").click(function(){
    $(this).find('i').toggleClass('fa fa-plus').css("color","#33ccff");
    $(this).find('i').toggleClass('fa fa-minus').css("color","#33ccff");
    });
    });


    $(document).ready(function(){
    $("#testQuestion").click(function(){

        $("#answerQuestion").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    });
    });


    $(document).ready(function(){
    $("#testQuestion2").click(function(){

    $("#answerQuestion2").fadeToggle("slow");

    });
    });



    $(document).ready(function(){
    $("#testQuestion3").click(function(){

    $("#answerQuestion3").fadeToggle("slow");

    });
    });



    $(document).ready(function(){
    $("#testQuestion4").click(function(){

    $("#answerQuestion4").fadeToggle("slow");

    });
    });

    $(document).ready(function(){
    $("#testQuestion5").click(function(){

    $("#answerQuestion5").fadeToggle("slow");

    });
    });

    $(document).ready(function(){
    $("#testQuestion6").click(function(){

    $("#answerQuestion6").fadeToggle("slow");

    });
    });


    $(document).ready(function(){
    $("#testQuestion7").click(function(){

    $("#answerQuestion7").fadeToggle("slow");

    });
    });


    $(document).ready(function(){
    $("#testQuestion8").click(function(){

    $("#answerQuestion8").fadeToggle("slow");

    });
    });


    
