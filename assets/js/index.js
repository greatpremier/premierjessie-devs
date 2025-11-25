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

