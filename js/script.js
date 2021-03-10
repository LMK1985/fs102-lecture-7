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

    // Fade In Out Toggle To Opacity Div
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
    $("#togglebox").click(function() {
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    });
    $("#fadeto").click(function() {       // Can customize transparency, does not collapse HTML upon transparent
        $("#div1").fadeTo("slow", 0);
        $("#div2").fadeTo("slow", 0.5);
        $("#div3").fadeTo("slow", 0.7);
    });
    $("#flip").click(function() { 
        $("#panel").slideToggle("slow"); // Can also be slideDown() or slideUp() for single function
    });
    $("#animation").click(function() {
        $("#animate").animate({left: '250px'});
    });
    $("#animationmulti").click(function() {
        $("#animate").animate({
            left: '250px',
            top: '900px',
            opacity: '0.5',
            height: '150px',
            width: '300px'
        });
    });
    $("#relative").click(function() {
        $("#relativeanimate").animate({
            left: '+=50px',   // This way of css adds to the position
            height: '+=150px',
            width: '+=50px'
        });
    });
});