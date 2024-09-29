
const correctUsername = 'yogesh';
const correctPassword = 'snehal'; 

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get entered values
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // Check if the username and password are correct
    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        messageElement.style.color = 'green';
        messageElement.innerHTML = '🎉 Happy Birthday, dear friend! 🎂 Wishing you all the best! 🎉';
    } else {
        messageElement.style.color = 'red';
        messageElement.innerHTML = 'Incorrect username or password. Please try again.';
    }
});
