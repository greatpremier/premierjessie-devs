const select = document.getElementById('form')
const additional = document.getElementById('add')

function Select(){
    if(select.value === "business" || select.value === "pro" || select.value === "medics"){
        additional.disabled = false;
    }else{
        additional.disabled = true;
    }
}

$(document).ready(() => {
    $("#webdev").show();
        $("#e-commerce").hide();
        $("#ads").hide();
        $("#seo").hide();
})

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
})
