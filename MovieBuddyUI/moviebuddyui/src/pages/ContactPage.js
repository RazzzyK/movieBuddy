import React from 'react';
import '../css/StaticPage.css'

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p>If you have any questions, feedback, or inquiries, please don't hesitate to reach out to us.</p>
        <p>You can contact us via email or through our social media channels:</p>
        <ul>
          <li>Email: contact@yourmovieproject.com</li>
          <li>Twitter: @YourMovieProject</li>
          <li>Facebook: /YourMovieProject</li>
          <li>Instagram: @YourMovieProject</li>
        </ul>
      </div>
      <div className="contact-form">
        <h1>Send Us a Message</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
