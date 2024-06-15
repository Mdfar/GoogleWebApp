document.addEventListener("DOMContentLoaded", function() {
    const selectElement = document.getElementById("city");

    selectElement.addEventListener("change", function() {
        if (this.value) {
            this.classList.add("valid");
        } else {
            this.classList.remove("valid");
        }
    });

    const checkboxElements = document.querySelectorAll('.service-checkbox');
    const hoursContainer = document.getElementById('hours-container');

    checkboxElements.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            checkboxElements.forEach(cb => {
                if (cb !== this) {
                    cb.checked = false;
                }
            });

            hoursContainer.style.display = this.checked ? 'block' : 'none';
        });
    });
});