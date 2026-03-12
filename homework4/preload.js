// Error message information
const errorData = {
    first_name: {
        id: "first-name-error",
        message: "At least leave your first initial."
    },
    last_name: {
        id: "last-name-error",
        message: "At least leave your last initial."
    },
    email: {
        id: "email-error",
        message: "Please enter a valid email address."
    },
    message: {
        id: "message-error",
        message: "The message cannot be blank."
    }
};

// Add error messages to the DOM
function addErrorMessage(field, input, errorInfo) {
    // If there is no error message, add one
    if (!field.querySelector('.error-message')) {
        // Create an invisible grouping tag
        const errorContainer = document.createElement('div');
        errorContainer.classList.add('error-message');
        
        // Create the paragraph element that holds the error message
        const errorMessage = document.createElement('p');
        errorMessage.setAttribute('role', 'alert');
        errorMessage.setAttribute('id', errorInfo.id);
        errorMessage.classList.add('critical');
        errorMessage.textContent = errorInfo.message;

        // Add the error icon to the grouping tag
        const errorIconCopy = errorIconTemplate.content.cloneNode(true);
        errorContainer.appendChild(errorIconCopy);

        // Add the error message to the grouping tag
        errorContainer.appendChild(errorMessage);

        // Add the completed grouping tag to the DOM
        field.appendChild(errorContainer);

        // Update aria attributes for the input field
        input.setAttribute('aria-describedby', errorMessage.id);
        input.setAttribute('aria-invalid', 'true');
    }
}

// Remove error messages from the DOM
function removeErrorMessage(field, input) {
    // Find the error message grouping tag
    const errorContainer = field.querySelector('.error-message');

    // If the error message exists, then remove it
    if (errorContainer) {
        errorContainer.remove();

        // Update aria attributes for the input field
        input.removeAttribute('aria-invalid');
        input.removeAttribute('aria-describedby');
    }
}
