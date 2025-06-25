document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const errorMessage = document.getElementById('errorMessage');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    // Function to show error message
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.classList.add('show');
    }

    // Function to hide error message
    function hideError() {
        errorMessage.textContent = '';
        errorMessage.classList.remove('show');
    }

    // Basic email validation regex (can be more robust)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    registerForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        hideError(); // Clear any existing errors

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value; // Passwords are not trimmed for security reasons (leading/trailing spaces can be valid)
        const confirmPassword = confirmPasswordInput.value;

        // --- Client-side Validation ---

        if (username.length < 4) {
            showError('Username must be at least 4 characters long.');
            return;
        }

        if (!emailRegex.test(email)) {
            showError('Please enter a valid email address.');
            return;
        }

        if (password.length < 8) {
            showError('Password must be at least 8 characters long.');
            return;
        }

        if (password !== confirmPassword) {
            showError('Passwords do not match.');
            return;
        }

        console.log('Attempting registration with:', { username, email, password });

        try {
            // Simulate a network request delay (e.g., 2 seconds)
            await new Promise(resolve => setTimeout(resolve, 2000));

            console.log('Registration successful (simulated)!');
            alert('Registration successful! You can now log in.');
            // Redirect to the login page after successful registration
            window.location.href = 'index.html';


        } catch (error) {
            console.error('Network or server error during registration:', error);
            showError('Could not connect to the server. Please try again later.');
        }
    });

    // Optional: Clear error message when user starts typing again
    usernameInput.addEventListener('input', hideError);
    emailInput.addEventListener('input', hideError);
    passwordInput.addEventListener('input', hideError);
    confirmPasswordInput.addEventListener('input', hideError);
});