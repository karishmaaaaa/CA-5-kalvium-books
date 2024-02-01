import React, { useState } from 'react';


function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
  });
  const [formError, setFormError] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (formData.name.length < 3 || formData.name.length > 30) {
      setFormError('Name should be between 3 and 30 characters');
    } else if (!formData.email.includes('@')) {
      setFormError('Invalid email address');
    } else if (formData.password.length < 10 || !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(formData.password)) {
      setFormError('Password should be at least 10 characters long and contain at least one special character');
    } else if (formData.password !== formData.repeatPassword) {
      setFormError('Passwords do not match');
    } else {
      console.log('Form submitted:', formData);
      setFormData({
        name: '',
        email: '',
        password: '',
        repeatPassword: ''
      });
      setFormError('');
    }
  };

  


  return (
    <div className='account'>
      <h1 className='ca'>Create account</h1>
      <form className='box' onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Your Email Id:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div>
          <label>Repeat Your Password:</label>
          <input type="password" name="repeatPassword" value={formData.repeatPassword} onChange={handleChange} />
        </div>
        <button onClick={() =>{window.location.reload()}} type="submit" disabled={!formData.name || !formData.email || !formData.password || !formData.repeatPassword}>Sign up</button>
        {formError && <p>{formError}</p>}
      </form>
    </div>
  );
}

export default RegisterForm;
