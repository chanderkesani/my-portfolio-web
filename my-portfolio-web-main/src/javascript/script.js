
// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM Elements
    const header = document.querySelector('header');
    const signupButton = document.querySelector('.signup');
    const loginButton = document.querySelector('.login');
    const navLinks = document.querySelectorAll('nav ul li a');
    
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
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - header.offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(15, 12, 41, 0.95)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
            header.style.padding = '10px 80px';
        } else {
            header.style.background = 'linear-gradient(135deg, #0f0c29, #302b63)';
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
            header.style.padding = '15px 80px';
        }
    });
    
    // Update active navigation based on scroll position
    window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            if (section.offsetTop - header.offsetHeight <= scrollPosition && 
                section.offsetTop + section.offsetHeight > scrollPosition) {
                
                const targetLink = document.querySelector(`nav ul li a[href="#${section.id}"]`);
                
                navLinks.forEach(link => link.classList.remove('active'));
                
                if (targetLink) {
                    targetLink.classList.add('active');
                }
            }
        });
    });
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    // Observe elements with animation classes
    document.querySelectorAll('.card, .vip-card, .about-text, .section-title').forEach(el => {
        observer.observe(el);
    });
    
    // Handle auth buttons click events
    signupButton.addEventListener('click', function(e) {
        e.preventDefault();
        showAuthForm('signup');
    });
    
    loginButton.addEventListener('click', function(e) {
        e.preventDefault();
        showAuthForm('login');
    });
    
    // Function to show auth forms
    function showAuthForm(formType) {
        const existingForm = document.querySelector('.auth-form-container');
        
        if (existingForm) {
            existingForm.remove();
        }
        
        const formContainer = document.createElement('div');
        formContainer.classList.add('auth-form-container');
        
        const formHTML = `
            <div class="auth-form">
                <button class="close-btn">&times;</button>
                <h2>${formType === 'signup' ? 'Sign Up' : 'Login'}</h2>
                <form id="${formType}-form">
                    ${formType === 'signup' ? `
                        <div class="form-group">
                            <label for="name">Full Name</label>
                            <input type="text" id="name" required>
                        </div>
                    ` : ''}
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" required>
                    </div>
                    <button type="submit" class="form-btn">${formType === 'signup' ? 'Sign Up' : 'Login'}</button>
                </form>
                <div class="success-message">Success! ${formType === 'signup' ? 'Account created successfully.' : 'Logged in successfully.'}</div>
                <div class="error-message"></div>
                <div class="switch-form">
                    ${formType === 'signup' ? 'Already have an account?' : 'Don\'t have an account?'} 
                    <a href="#" class="switch-form-link">${formType === 'signup' ? 'Login' : 'Sign Up'}</a>
                </div>
            </div>
        `;
        
        formContainer.innerHTML = formHTML;
        document.body.appendChild(formContainer);
        
        // Show form with animation
        setTimeout(() => {
            formContainer.classList.add('active');
        }, 10);
        
        // Close button event
        const closeBtn = formContainer.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => {
            formContainer.classList.remove('active');
            setTimeout(() => {
                formContainer.remove();
            }, 500);
        });
        
        // Switch form link event
        const switchFormLink = formContainer.querySelector('.switch-form-link');
        switchFormLink.addEventListener('click', (e) => {
            e.preventDefault();
            formContainer.classList.remove('active');
            setTimeout(() => {
                formContainer.remove();
                showAuthForm(formType === 'signup' ? 'login' : 'signup');
            }, 500);
        });
        
        // Form submission
        const form = formContainer.querySelector(`#${formType}-form`);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = form.querySelector('#email').value;
            const password = form.querySelector('#password').value;
            
            const errorMessage = formContainer.querySelector('.error-message');
            const successMessage = formContainer.querySelector('.success-message');
            
            // Reset messages
            errorMessage.style.display = 'none';
            successMessage.style.display = 'none';
            
            if (formType === 'signup') {
                // Firebase signup
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                        // Signup successful
                        successMessage.style.display = 'block';
                        form.reset();
                        
                        // Close form after delay
                        setTimeout(() => {
                            formContainer.classList.remove('active');
                            setTimeout(() => {
                                formContainer.remove();
                            }, 500);
                        }, 2000);
                    })
                    .catch((error) => {
                        // Handle errors
                        errorMessage.textContent = error.message;
                        errorMessage.style.display = 'block';
                    });
            } else {
                // Firebase login
                firebase.auth().signInWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                        // Login successful
                        successMessage.style.display = 'block';
                        form.reset();
                        
                        // Close form after delay
                        setTimeout(() => {
                            formContainer.classList.remove('active');
                            setTimeout(() => {
                                formContainer.remove();
                            }, 500);
                        }, 2000);
                    })
                    .catch((error) => {
                        // Handle errors
                        errorMessage.textContent = error.message;
                        errorMessage.style.display = 'block';
                    });
            }
        });
    }
    
    // Check authentication state changes
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in
            console.log("User is signed in:", user.email);
            // Update UI for signed-in user
            updateUIForSignedInUser(user);
        } else {
            // User is signed out
            console.log("User is signed out");
            // Update UI for signed-out user
            updateUIForSignedOutUser();
        }
    });
    
    // Update UI for signed-in user
    function updateUIForSignedInUser(user) {
        const authButtons = document.querySelector('.auth-buttons');
        
        // Clear the auth buttons area
        authButtons.innerHTML = '';
        
        // Create user profile button
        const profileButton = document.createElement('a');
        profileButton.href = '#';
        profileButton.className = 'btn profile';
        profileButton.textContent = user.email.split('@')[0]; // Display username
        
        // Create logout button
        const logoutButton = document.createElement('a');
        logoutButton.href = '#';
        logoutButton.className = 'btn logout';
        logoutButton.textContent = 'Logout';
        
        // Add buttons to auth area
        authButtons.appendChild(profileButton);
        authButtons.appendChild(logoutButton);
        
        // Add event listener to logout button
        logoutButton.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Sign out from Firebase
            firebase.auth().signOut()
                .catch((error) => {
                    console.error("Error signing out:", error);
                });
        });
    }
    
    // Update UI for signed-out user
    function updateUIForSignedOutUser() {
        const authButtons = document.querySelector('.auth-buttons');
        
        // Reset to original auth buttons
        authButtons.innerHTML = `
            <a href="#" class="btn signup">Sign Up</a>
            <a href="#" class="btn login">Login</a>
        `;
        
        // Re-add event listeners
        const newSignupButton = authButtons.querySelector('.signup');
        const newLoginButton = authButtons.querySelector('.login');
        
        newSignupButton.addEventListener('click', function(e) {
            e.preventDefault();
            showAuthForm('signup');
        });
        
        newLoginButton.addEventListener('click', function(e) {
            e.preventDefault();
            showAuthForm('login');
        });
    }
});
