document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

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

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        hideError(); // Clear any existing errors

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

       
        if (username === '' || password === '') {
            showError('Please enter both username and password.');
            return; // Stop execution if validation fails
        }

    
        console.log('Attempting login with:', { username, password });

        try {
           
            await new Promise(resolve => setTimeout(resolve, 1500));

            
            
            if (username === 'user' && password === 'password123') {
                console.log('Login successful (simulated)!');
                alert('Welcome back to Quill Journal!');
                
            } else {
                console.log('Login failed (simulated)!');
                showError('Oops! Invalid username or password. Please try again.');
            }

        } catch (error) {
            console.error('Network or server error:', error);
            showError('Could not connect to the server. Please try again later.');
        }
    });

   
    usernameInput.addEventListener('input', hideError);
    passwordInput.addEventListener('input', hideError);
});