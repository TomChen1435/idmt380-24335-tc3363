// Apply updates to the DOM

firstNameInput.addEventListener('blur', function() {
    if (this.value.length === 0) {
        addErrorMessage(firstNameField, this, errorData.first_name);
    } else {
        removeErrorMessage(firstNameField, this);
    }
});

lastNameInput.addEventListener('blur', function() {
    if (this.value.length === 0) {
        addErrorMessage(lastNameField, this, errorData.last_name);
    } else {
        removeErrorMessage(lastNameField, this);
    }
});

emailInput.addEventListener('blur', function() {
    if (this.value.length === 0 || this.validity.typeMismatch) {
        addErrorMessage(emailField, this, errorData.email);
    } else {
        removeErrorMessage(emailField, this);
    }
});

messageInput.addEventListener('blur', function() {
    if (this.value.length === 0) {
        addErrorMessage(messageField, this, errorData.message);
    } else {
        removeErrorMessage(messageField, this);
    }
});
