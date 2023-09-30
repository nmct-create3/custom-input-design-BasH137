// Define the function to handle the password switcher
const handlePasswordSwitcher = function () {
    const passwordInput = document.querySelector('.js-password-input');
    const passwordToggleCheckbox = document.querySelector('.js-password-toggle-checkbox');
  
    // Add an event listener to the checkbox
    passwordToggleCheckbox.addEventListener('change', function () {
      // Check the state of the checkbox
      if (passwordToggleCheckbox.checked) {
        // If checked, change the input type to 'text' (show password)
        passwordInput.type = 'text';
      } else {
        // If not checked, change the input type to 'password' (hide password)
        passwordInput.type = 'password';
      }
    });
  };
  
  // Initialize the password switcher
  const init = function () {
    console.log('Script loaded!');
  
    // Initialize password switcher
    handlePasswordSwitcher();
  
    // Other initialization code here
  };
  
  // Call the init function to start the script
  init();
  