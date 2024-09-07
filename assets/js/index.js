/*document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Example of additional JavaScript functionality
    // Form validation or dynamic content can be added here

document.querySelector('.order-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted successfully!');
    // Add code here to handle form submission, e.g., AJAX request
});*/

const selectPackage = document.getElementById('package');
const additionalCheckboxes = document.querySelectorAll('.order-form input[type="checkbox"]');

function enableAdditionalServices() {
    if (selectPackage.value === "business" || selectPackage.value ===
        "pro" || selectPackage.value === "medics") {
        additionalCheckboxes.forEach(checkbox => {
            checkbox.disabled = false;
        });
    } else {
        additionalCheckboxes.forEach(checkbox => {
            checkbox.disabled = true;
        });
    }
}

selectPackage.addEventListener('change', enableAdditionalServices);

/*$(document).ready(() => {
    $("#webdev").show();
    $("#e-commerce").hide();
    $("#ads").hide();
    $("#seo").hide();
});*/

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
