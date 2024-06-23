import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'; // Impor SweetAlert

function ContactPage() {
  const [formData, setFormData] = useState({
    from_name: '',
    to_name: 'Zolla Perdana Pura Harahap',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_3xvyp0f', 'template_nzoj8ts', e.target, 'JtrvPH4wr7jtgiIMP')
      .then((result) => {
        Swal.fire({
          icon: 'success',
          title: 'Email berhasil dikirim!',
          showConfirmButton: false,
          timer: 1500
        });
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Gagal mengirim email',
          text: 'Silakan coba lagi nanti.',
          showConfirmButton: false,
          timer: 1500
        });
      });
    e.target.reset();
  };

  return (
    <div className="contact-page">
      <nav className="breadcrumb-new">
        <div className="breadcrumb-left-new">
          <h1>Contact</h1>
        </div>
        <div className="breadcrumb-right-new">
          <Link to="/">Home</Link> / <span>Contact</span>
        </div>
      </nav>
      <div className="contact-page-content">
        <form onSubmit={handleSubmit} className="contact-page-form">
          <h2>Contact Me</h2>
          <p>Jangan ragu untuk menghubungi saya kapan saja. Saya akan segera merespons secepat mungkin!</p>
          <label htmlFor="from_name">Name:</label>
          <input 
            type="text" 
            id="from_name" 
            name="from_name" 
            required 
            onChange={handleChange} 
            placeholder="Name" 
          />

          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            onChange={handleChange} 
            placeholder="Email" 
          />

          <label htmlFor="subject">Subject:</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            required 
            onChange={handleChange} 
            placeholder="Subject" 
          />

          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            required 
            onChange={handleChange} 
            placeholder="Message"
          ></textarea>

          <button type="submit">Send</button>
        </form>
        <div className="contact-page-info">
          <h3>Contact Info</h3>
          <p><i className="bi bi-telephone-fill tel"></i> <a className="contact-link" href="https://wa.me/6281312343829" target="_blank" rel="noopener noreferrer">+62 813 1234 3829</a></p>
          <p><i className="bi bi-envelope-fill"></i> zollaperdana29@gmail.com</p>
          <p><i className="bi bi-geo-alt-fill"></i> Jalan Karet Pasar Baru Barat 1, Jakarta Pusat, Indonesia</p>
          <div className="contact-page-social-links">
            <a href="https://www.facebook.com/zolla.p.harahap"><i className="bi bi-facebook"></i></a>
            <a href="https://instagram.com/zollahrp"><i className="bi bi-instagram"></i></a>
            <a href="https://x.com/zollahrp"><i className="bi bi-twitter"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;