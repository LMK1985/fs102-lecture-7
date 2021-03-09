$(function(){  //Initialize
    
    // Hide Show Toggle Para
    $("#hide").click(function() {
        $("p").hide(1000);          // Demo .hide()
    });
    $("#show").click(function() {
        $("p").show(1000);           // Demo .show()
    });
    $("#toggle").click(function() {
        $("p").toggle(1000);        // Demo .toggle()
    });

    // Fade In Out Toggle Div
    $("#fadeboxin").click(function() {
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
    $("#fadeboxout").click(function() {
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
    });
});