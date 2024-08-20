document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');

    togglePassword.addEventListener('click', function () {
        if (passwordInput.getAttribute('type') === 'password') {
            passwordInput.setAttribute('type', 'text');
            eyeIcon.src = '/Content/Images/opened_eye.svg';
            eyeIcon.alt = 'Hide Password';
        } else {
            passwordInput.setAttribute('type', 'password');
            eyeIcon.src = '/Content/Images/closed_eye.svg';
            eyeIcon.alt = 'Show Password';
        }
    });
});