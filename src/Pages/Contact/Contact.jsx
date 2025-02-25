import React from 'react';
import './Contact.css'; // Import the CSS file for styling

function Contact() {
  return (
    <div className="container">
      <div style={{ textAlign: 'center' }}>
        <h2>Contact Us</h2>
        <p>Swing by for a cup of coffee, or leave us a message:</p>
      </div>
      <div className="row">
        <div className="column">
          <img src="download (5).jpeg" alt="Map" style={{ width: '100%' }} />
        </div>
        <div className="column">
          <form action="/action_page.php">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
            
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
            
            <label htmlFor="country">Country</label>
            <select id="country" name="country">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
            
            <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '170px' }}></textarea>
            
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
