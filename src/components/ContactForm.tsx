import React, { useState } from 'react';

interface ContactFormProps {
  // No props needed for now
}

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  /**
   * Validates the form values.
   * @returns {boolean} True if the form is valid, false otherwise.
   */
  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors: Partial<FormValues> = {};

    if (!formValues.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formValues.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formValues.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formValues.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionResult(null); // Reset submission result

    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In a real application, you would send the form data to your server here
      console.log('Form data:', formValues);

      setSubmissionResult('success');
      setFormValues({ name: '', email: '', message: '' }); // Clear the form
      setErrors({}); // Clear any previous errors

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmissionResult('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div>
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Your Name"
          aria-label="Name"
        />
        {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
      </div>
      <div className="mt-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Your Email"
          aria-label="Email"
        />
        {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
      </div>
      <div className="mt-4">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formValues.message}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Your Message"
          aria-label="Message"
          rows={5}
        />
        {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
      {submissionResult === 'success' && (
        <div className="mt-4 text-green-500">Thank you! Your message has been sent.</div>
      )}
      {submissionResult === 'error' && (
        <div className="mt-4 text-red-500">Oops! There was an error submitting your form. Please try again.</div>
      )}
    </form>
  );
};

export default ContactForm;