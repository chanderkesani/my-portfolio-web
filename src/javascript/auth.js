
// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Firebase Configuration (Replace with your own Firebase config)
    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    };
    
    // Initialize Firebase
    try {
        firebase.initializeApp(firebaseConfig);
        console.log("Firebase initialized successfully");
    } catch (error) {
        console.error("Firebase initialization error:", error);
    }
    
    // Check if we're on the signup page
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
    
    // Check if we're on the login page
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Google Sign-in button event listener
    const googleButtons = document.querySelectorAll('.google-btn');
    googleButtons.forEach(button => {
        button.addEventListener('click', handleGoogleSignin);
    });
    
    // Forgot password link event listener
    const forgotPasswordLink = document.querySelector('.forgot-password');
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', handleForgotPassword);
    }
    
    // Handle Signup
    function handleSignup(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirm-password');
        
        const errorDisplay = document.getElementById('error-display');
        const successDisplay = document.getElementById('success-display');
        
        // Reset displays
        errorDisplay.style.display = 'none';
        successDisplay.style.display = 'none';
        
        // Validate inputs
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        
        if (!name || !email || !password || !confirmPassword) {
            displayError(errorDisplay, "All fields are required");
            return;
        }
        
        if (password !== confirmPassword) {
            displayError(errorDisplay, "Passwords do not match");
            return;
        }
        
        if (password.length < 6) {
            displayError(errorDisplay, "Password must be at least 6 characters");
            return;
        }
        
        // Create new user with Firebase
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Update profile with the name
                return userCredential.user.updateProfile({
                    displayName: name
                }).then(() => {
                    // Show success message
                    displaySuccess(successDisplay, "Account created successfully!");
                    
                    // Reset form
                    signupForm.reset();
                    
                    // Redirect to home page after delay
                    setTimeout(() => {
                        window.location.href = "../index.html";
                    }, 2000);
                });
            })
            .catch((error) => {
                // Handle errors
                displayError(errorDisplay, error.message);
            });
    }
    
    // Handle Login
    function handleLogin(e) {
        e.preventDefault();
        
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        
        const errorDisplay = document.getElementById('error-display');
        const successDisplay = document.getElementById('success-display');
        
        // Reset displays
        errorDisplay.style.display = 'none';
        successDisplay.style.display = 'none';
        
        // Validate inputs
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        
        if (!email || !password) {
            displayError(errorDisplay, "All fields are required");
            return;
        }
        
        // Sign in with Firebase
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                // Show success message
                displaySuccess(successDisplay, "Logged in successfully!");
                
                // Reset form
                loginForm.reset();
                
                // Redirect to home page after delay
                setTimeout(() => {
                    window.location.href = "../index.html";
                }, 2000);
            })
            .catch((error) => {
                // Handle errors
                displayError(errorDisplay, error.message);
            });
    }
    
    // Handle Google Sign In
    function handleGoogleSignin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        
        firebase.auth().signInWithPopup(provider)
            .then(() => {
                // Redirect to home page
                window.location.href = "../index.html";
            })
            .catch((error) => {
                // Display error in the page's error container
                const errorDisplay = document.getElementById('error-display');
                if (errorDisplay) {
                    displayError(errorDisplay, error.message);
                } else {
                    console.error("Google Sign In Error:", error);
                }
            });
    }
    
    // Handle Forgot Password
    function handleForgotPassword(e) {
        e.preventDefault();
        
        const emailInput = document.getElementById('email');
        const errorDisplay = document.getElementById('error-display');
        const successDisplay = document.getElementById('success-display');
        
        const email = emailInput.value.trim();
        
        if (!email) {
            displayError(errorDisplay, "Please enter your email address");
            return;
        }
        
        // Send password reset email
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                displaySuccess(successDisplay, "Password reset email sent! Check your inbox.");
            })
            .catch((error) => {
                displayError(errorDisplay, error.message);
            });
    }
    
    // Check authentication state
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, you can update UI accordingly
            console.log("User is signed in:", user.email);
        } else {
            // User is signed out
            console.log("User is signed out");
        }
    });
    
    // Helper functions
    function displayError(element, message) {
        element.textContent = message;
        element.style.display = 'block';
    }
    
    function displaySuccess(element, message) {
        element.textContent = message;
        element.style.display = 'block';
    }
});
