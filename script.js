document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarLinks = document.querySelector('.navbar-links');

    navbarToggle.addEventListener('click', function() {
        navbarLinks.classList.toggle('active');
    });
    $(document).ready(function() {
        $('#contact-form').submit(function(event) {
            event.preventDefault();
            var name = $('#name').val();
            var email = $('#email').val();
            var hp = $('#hp').val();
            var message = $('#message').val();

            $('.error').remove();

            if (name.length < 1) {
                $('#name').after('<span class="error">Name is required</span>');
            }
            if (!isValidEmail(email)) {
                $('#email').after('<span class="error">Please enter a valid email address</span>');
            }
            if (!isValidPhoneNumber(hp)) {
                $('#hp').after('<span class="error">Please enter a valid phone number</span>');
            }

        });

        function isValidEmail(email) {

            return email.length > 0 && email.includes('@');
        }

        function isValidPhoneNumber(phoneNumber) {
            if (phoneNumber.length < 6 || phoneNumber.length > 12) {
                $('#hp').after('<span class="error">Phone number must be between 6 and 12 digits</span>');
                return false;
            }
            if (!(/^\d+$/.test(phoneNumber))) {
                $('#hp').after('<span class="error">Phone number must contain only digits</span>');
                return false;
            }
            return true;
        }
    });


});