$(document).ready(function(){
    $("#navside1").hide();
    $("#a01").click(function(){
      $("#navside1").fadeToggle();
    });

    /*================FAQ=============*/
    $("#testQuestion, #testQuestion2,#testQuestion3,#testQuestion4,#testQuestion5,#testQuestion6,#testQuestion7,#testQuestion8,#testQuestion9,#testQuestion10,#testQuestion11,#testQuestion12,#testQuestion13,#testQuestion14,#testQuestion15").click(function(){
      $(this).find('i').toggleClass('fa fa-plus').css("color","#33ccff");
      $(this).find('i').toggleClass('fa fa-minus').css("color","#33ccff");
    });
});
