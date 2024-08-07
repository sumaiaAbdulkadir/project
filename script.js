const form = document.getElementById('form');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            // Check if the email has @ symbol
            if (!email.includes('@')) {
                alert('Please enter a valid email address.');
                return;
            }

            // Check if password and confirm password match
            if (password !== confirmPassword) {
                alert('Passwords do not match. Please try again.');
                return;
            }
            else{
                window.location.href = "index2.html";
            }

            alert('Form submitted successfully!');
           
            
        });
   


        