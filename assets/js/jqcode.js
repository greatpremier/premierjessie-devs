$(document).ready(function(){
    $("#webdev").show();
    $("#e-commerce").hide();
    $("#ads").hide();
    $("#seo").hide();
});

$(document).ready(function(){
$("#webdev-button").click(function(){
    $("#webdev").show();
    $("#e-commerce").hide();
    $("#ads").hide();
    $("#seo").hide();
});

$("#ecom-button").click(function(){
    $("#webdev").hide();
    $("#e-commerce").show();
    $("#ads").hide();
    $("#seo").hide();
});

$("#ads-button").click(function(){
    $("#webdev").hide();
    $("#e-commerce").hide();
    $("#ads").show();
    $("#seo").hide();
});

$("#seo-button").click(function(){
    $("#webdev").hide();
    $("#e-commerce").hide();
    $("#ads").hide();
    $("#seo").show();
});
});
