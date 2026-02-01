import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <ContactForm />
    </div>
  );
};

export default ContactPage;