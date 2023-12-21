import React, { useState } from 'react';
import './RegisterForm.css';

const RegisterForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error message when the user starts typing in the field
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and handle form submission
    const validationErrors = validateForm();
    if (validationErrors) {
      // Display error messages
      setFormErrors(validationErrors);
    } else {
      // Save the data or perform other actions
      onRegister(formData);
      alert('Registration Successful');
    }
  };

  const validateForm = () => {
    // Implement your form validation logic
    // Set error messages for invalid fields
    const errors = {};

    if (formData.name.length < 3 || formData.name.length > 30) {
      errors.name = 'Name must be between 3 and 30 characters';
    }

    if (!formData.email.includes('@')) {
      errors.email = 'Invalid email address';
    }

    if (formData.password.length < 10 || !formData.password.includes('@')) {
      errors.password = 'Password must be at least 10 characters and contain @';
    }

    if (formData.password !== formData.repeatPassword) {
      errors.repeatPassword = 'Passwords do not match';
    }

    // Return errors object, or null if the form is valid
    return Object.keys(errors).length > 0 ? errors : null;
  };

  return (
    <div className='form-card'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className='name'>
          <label>Name:</label>
          <div>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            {formErrors.name && <div className='error-message'>{formErrors.name}</div>}
          </div>
          
        </div>
        <div className='name'>
          <label>Email:</label>
          <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && <div className='error-message'>{formErrors.email}</div>}
          </div>
          
        </div>
        <div className='name'>
          <label>Password:</label>
          <div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {formErrors.password && <div className='error-message'>{formErrors.password}</div>}
          </div>      
        </div>
        <div className='name'>
          <label>Repeat Password:</label>
          <div>
          <input
            type="password"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleChange}
          />
          {formErrors.repeatPassword && <div className='error-message'>{formErrors.repeatPassword}</div>}
          </div>
        </div>
        <div>
          <button type="submit" >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
