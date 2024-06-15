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

    const nextButton = document.querySelector('.next-button');
    nextButton.addEventListener('click', function() {
        const city = selectElement.options[selectElement.selectedIndex].text;
        let selectedService = '';
        let selectedAmount = '';
        checkboxElements.forEach(checkbox => {
            if (checkbox.checked) {
                selectedService = checkbox.nextElementSibling.textContent;
                selectedAmount = checkbox.closest('tr').querySelector('.service-amount').textContent;
            }
        });
        const hours = document.getElementById('hours').value;

        const confirmationMessage = `Please confirm your booking:\n\nCity: ${city}\nService: ${selectedService}\nHours: ${hours || 'N/A'}`;
        if (confirm(confirmationMessage)) {
            window.location.href = 'confirmation.html'; // Change this to the actual URL of your next HTML page
        }
    });
});
