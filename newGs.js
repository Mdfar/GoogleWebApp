<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Moving Service Booking</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f9f9f9;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }

    .outer-container {
        width: 100%;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        margin: 10px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

    .inner-container {
        width: 100%;
        max-width: 800px;
        padding: 50px;
        background-color: #fff;
        border-radius: 10px;
      }

    header {
        display: flex;
        align-items: center;
        justify-content: flex-start; /* Change to left-align the content */
        margin-bottom: 40px;
      }

    header img {
        max-height: 50px; /* Adjust this value to make the image smaller */
        margin-right: 10px; /* Adjust spacing between image and text */
      }

    header span {
        font-size: 14px;
        vertical-align: middle;
      }

    .service-info {
        display: flex;
        margin-bottom: 20px;
        padding: 30px 60px;
        background-color: #f9f9f9;
        border-radius: 10px;
      }

    .service-info .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 0 30px 0 0;
      }

    .service-info .service-details {
        flex: 1;
      }

    .service-info .service-details h5 {
        margin: 0 0 15px 0;
        color: #e39531;
      }

    .service-info .service-details p {
        margin: 5px 0 0;
        font-size: 14px;
      }

    .step-indicator {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
      }

    .step-indicator p {
        margin: 0;
        margin-right: 10px;
        font-size: 14px;
      }

    .progress-bar {
        display: flex;
        align-items: center;
        flex: 1;
      }

    .progress-step {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #fff;
        border: 2px solid #ddd;
        position: relative;
      }

    .progress-step.completed {
        background-color: #e39531;
        border: 2px solid #e39531;
      }

    .progress-line {
        flex: 1;
        height: 2px;
        background-color: #ddd;
        position: relative;
      }

    .progress-step::after {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #ddd;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

    .progress-step.completed::after {
        border-color: #e39531;
        background-color: #fff;
      }

    .form-group {
        margin-bottom: 20px;
      }

    .form-group label {
        display: block;
        margin-bottom: 10px;
        font-size: 14px;
      }

    .form-group select {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        background-color: #ffffff; /* Background color */
        color: #b4b4b4; /* Text color */
        appearance: none; /* Remove default arrow */
        -webkit-appearance: none; /* Remove default arrow in Webkit browsers */
        -moz-appearance: none; /* Remove default arrow in Mozilla browsers */
        background-image: url('https://static.thenounproject.com/png/551749-200.png'); /* Custom arrow icon */
        background-repeat: no-repeat;
        background-position: right 10px center; /* Position of the custom arrow */
        background-size: 10px; /* Size of the custom arrow */
      }

    /* Additional styles for better appearance */
    .form-group select:hover {
        border-color: #aaa; /* Change border color on hover */
        background-color: #f1f1f1de; /* Change background color on hover */
        box-shadow: 0 0 5px rgba(245, 245, 245, 0.959); /* Add a subtle shadow on hover */
      }

    .form-group select option {
        padding: 10px;
        background-color: #ffffff;
        color: #333;
      }

    .form-group select.valid {
        color: #333; /* Change text color */
        background-color: #ffffff; /* Change background color */
      }

    .form-group input[type="checkbox"] {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
      }

    .styled-input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        background-color: #ffffff; /* Background color */
        color: #272727; /* Text color */
        appearance: none; /* Remove default arrow */
        -webkit-appearance: none; /* Remove default arrow in Webkit browsers */
        -moz-appearance: none; /* Remove default arrow in Mozilla browsers */
      }

    /* Hover effect for the input box */
    .styled-input:hover {
        border-color: #aaa; /* Change border color on hover */
        background-color: #f1f1f1de; /* Change background color on hover */
        box-shadow: 0 0 5px rgba(245, 245, 245, 0.959); /* Add a subtle shadow on hover */
      }


    .service-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 25px;
      }

    .service-table td {
        border: 1px solid #ddd; /* Apply border to all sides */
        border-left: none; /* Remove left border */
        border-right: none; /* Remove right border */
        background-color: #fdfdfd;
        padding: 15px;
        height: 40px;
      }

    .service-table th {
        background-color: #f9f9f9;
        font-weight: normal;
        color: #707070;
        border: 1px solid #ddd; /* Apply border to all sides */
        border-left: none; /* Remove left border */
        border-right: none; /* Remove right border */
        padding: 15px;
        height: 20px;
      }

    .service-table th:first-child {
        text-align: left;
      }
    .service-table th:last-child {
        text-align: right;
      }

    .service-table td {
        vertical-align: middle;
      }

    .service-table td:first-child {
        text-align: left; /* Left align the first cell */
      }

    .service-table td:last-child {
        text-align: right; /* Right align the second cell */
        color: #838383;
      }

    .service-table .old-price {
        text-decoration: line-through;
        color: rgb(255, 91, 91);
      }

    .service-table input[type="checkbox"] {
        margin-right: 10px;
        appearance: none;
        width: 15px;
        height: 15px;
        border-radius: 3px;
        border: 1px solid #ddd;
        /* cursor: pointer; */
        vertical-align: middle;
      }

    .service-table input[type="checkbox"]:checked {
        background-color: #e39531; /* Change checkbox tick color */
        border: 1px solid #e39531;
      }

    .service-table input[type="checkbox"]:checked::after {
        content: '\2714';
        color: white;
        font-size: 9px;
        display: block;
        text-align: center;
      }

    .form-navigation {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #ddd; /* Add top border */
      }

    .form-navigation .previous-button,
    .form-navigation .next-button {
        border: none;
        /* border-radius: 5px; */
        cursor: pointer;
        font-weight: bold;
        height: 30px;
      }

    .form-navigation .previous-button {
        background-color: transparent;
        font-size: 16px;
        color: #aaa; /* Light grey text color */
      }

    .form-navigation .next-button {
        background-color: transparent;
        font-size: 16px;
        color: #e39531; /* Orange text color */
      }

    .form-navigation .step-indicator {
        color: #636363; /* Darker text color */
        padding: 20px;
        font-size: 15px;
        margin: auto;
      }

    .back-button {
        display: flex;
        align-items: center;
        margin: 15px;
        align-self: flex-start;
      }

    .back-button a {
        display: flex;
        text-decoration: none;
        color: rgb(92, 92, 92);
        align-items: center;
        font-size: 14px;
        font-weight: bold;
      }

    .back-button img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        filter: grayscale(1) brightness(0) saturate(10000%) invert(31%) sepia(100%) hue-rotate(180deg) brightness(92%) contrast(84%);
      }
    </style>
</head>
<body>
    <div class="outer-container">
        <div class="back-button">
            <a href="#"><img src="https://cdn.iconscout.com/icon/free/png-256/free-back-arrow-1767515-1502579.png" alt="Back"> Back</a>
        </div>
        <div class="inner-container">
            <header>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3sDjEi5xrX1hzmqW7j2TXiLQXqhAjmosXwQ&s" alt="Logo">
                <span>Book Your Spot Now!</span>
            </header>
            <div class="service-info">
                <img src="https://honestfootcare.com/wp-content/uploads/2022/06/testimonial7.png" alt="User Avatar" class="avatar">
                <div class="service-details">
                    <h5>$30 PER HOUR MOVING SERVICE</h5>
                    <p>Hi, I am xxxxxxx. I would help you move as you desire. Kindly fill the form below so I can know your moving requirements.</p>
                </div>
            </div>
            <div class="step-indicator">
                <p>Step 1 of 5</p>
                <div class="progress-bar">
                    <div class="progress-step completed"></div>
                    <div class="progress-line"></div>
                    <div class="progress-step"></div>
                    <div class="progress-line"></div>
                    <div class="progress-step"></div>
                    <div class="progress-line"></div>
                    <div class="progress-step"></div>
                    <div class="progress-line"></div>
                    <div class="progress-step"></div>
                </div>
            </div>
            <form class="booking-form" id="booking-form">
                <div class="form-group">
                    <label for="city">Where are you booking from?</label>
                    <select id="city" name="city">
                        <option value="" disabled selected>Choose your city</option>
                        <option value="helsinki">Helsinki</option>
                        <option value="tampere">Tampere</option>
                    </select>
                </div>
                <table class="service-table">
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="checkbox" name="service" value="driver-only" class="service-checkbox">
                                <label>Driver Only</label>
                            </td>
                            <td class="service-amount">$100 / <span class="old-price">$150</span> Per hour</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" name="service" value="driver-van" class="service-checkbox">
                                <label>Driver + Van</label>
                            </td>
                            <td class="service-amount">$100 Per hour</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" name="service" value="helpers" class="service-checkbox">
                                <label>Additional Helpers</label>
                            </td>
                            <td class="service-amount">$100 Per hour</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" name="service" value="moving-boxes" class="service-checkbox">
                                <label>Moving Boxes</label>
                            </td>
                            <td class="service-amount">$100 Per hour</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" name="service" value="wrapping-materials" class="service-checkbox">
                                <label>Wrapping Materials</label>
                            </td>
                            <td class="service-amount">$100 Per hour</td>
                        </tr>                        
                    </tbody>
                </table>
                <div class="form-group" id="hours-container" style="display: none;">
                    <label for="hours">How many Hours would you Like?</label>
                    <input type="number" id="hours" name="hours" placeholder="Enter amount of hours" min="1" class="styled-input">
                </div>
                <div class="form-navigation">
                    <button type="button" class="previous-button">Previous</button>
                    <span class="step-indicator">Step 1</span>
                    <button type="button" class="next-button">Next</button>
                </div>
            </form>
        </div>
    </div>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const checkboxes = document.querySelectorAll('.service-checkbox');
            const hoursContainer = document.getElementById('hours-container');

            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    if (this.checked) {
                        checkboxes.forEach(cb => {
                            if (cb !== this) {
                                cb.checked = false;
                            }
                        });
                        hoursContainer.style.display = 'block';
                    } else {
                        const anyChecked = Array.from(checkboxes).some(cb => cb.checked);
                        if (!anyChecked) {
                            hoursContainer.style.display = 'none';
                        }
                    }
                });
            });
        });

        function submitForm() {
            const city = document.getElementById('city').value;
            let service = '';
            let amount = '';
            const checkboxes = document.querySelectorAll('.service-checkbox');
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    service = checkbox.value;
                    amount = checkbox.nextElementSibling.textContent.split(' - ')[1];
                }
            });
            const hours = document.getElementById('hours').value;

            if (!city || !service || !amount) {
                alert('Please fill in all required fields.');
                return;
            }

            const data = {
                city: city,
                service: service,
                amount: amount,
                hours: hours || 'N/A'
            };

            google.script.run
                .withSuccessHandler(function() {
                    window.location.href = 'confirmation.html';
                })
                .doPost({ postData: { contents: JSON.stringify(data) } });
        }
    </script>
</body>
</html>