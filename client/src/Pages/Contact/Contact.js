import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Fade from 'react-reveal/Fade'; // Import Fade from react-reveal
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://portfolioback-81am.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(data.message); // Show success toast
        // Reset the form
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        toast.error(errorData.message); // Show error toast
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      toast.error('An error occurred while submitting the form.'); // Show error toast
    }
  };

  return (
    <>
      <div className='container contact'>
        <h1 className='col-12 mt-3 mb-1 text-center'>Contact Me</h1>   
        <hr/>
        <p className='pb-3 text-center'>👉 I'd love to hear from you! Please fill out the form below:</p>

        <ToastContainer /> {/* Toast container for notifications */}

        <Fade bottom> {/* Apply fade bottom effect here */}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="form-control" 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="form-control" 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                className="form-control" 
                rows="4"
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </Fade> {/* End fade effect */}
      </div>
    </>
  );
};

export default Contact;
