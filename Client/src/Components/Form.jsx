import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Ensure you have installed emailjs-com
import { ArrowUpRight } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_6hecu6p', // EmailJS service ID
        'template_0rbavtj', // EmailJS template ID
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message,
        },
        'gThWRRtokMwL2sGwr' // EmailJS public key
      )
      .then((response) => {
        console.log('Email sent successfully!', response);
        setFormData({ firstName: '', lastName: '', email: '', message: '' }); // Reset form
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <div className="inline-block px-4 py-1 rounded-full bg-gray-100 font-semibold text-sm mb-4">
          • Contact Me
        </div>
        <h1 className="text-3xl md:text-4xl font-medium mb-4">
          Get in Touch with Rachit Jain
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          I’d love to connect with you! Whether you have a project in mind, need development advice, or want to collaborate, feel free to reach out by filling out the form below.
        </p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="firstName" className="block text-sm mb-2">
            First name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
            required
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm mb-2">
            Last name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Last name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="rachitjainjaipur@gmail.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Leave a message..."
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition group"
        >
          Send Message
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;