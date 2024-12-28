import { useState } from 'react';
import { useForm } from '../context/FormContext';
import FormInput from "../components/common/FormInput";
import Notification from './common/Notification';

const Contact = () => {
  const {
    errors,
    isSubmitting,
    notifications,
    validateEmail,
    showNotification,
    handleError,
    clearErrors
  } = useForm();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      clearErrors();
    }
  };

  const validateForm = () => {
    let isValid = true;

    if (!formData.name.trim()) {
      handleError('name', 'Name is required');
      isValid = false;
    }

    if (!formData.email.trim()) {
      handleError('email', 'Email is required');
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      handleError('email', 'Please enter a valid email');
      isValid = false;
    }

    if (!formData.subject.trim()) {
      handleError('subject', 'Subject is required');
      isValid = false;
    }

    if (!formData.message.trim()) {
      handleError('message', 'Message is required');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      showNotification('Message sent successfully!', 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      showNotification('Failed to send message. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {notifications && (
          <div className="fixed top-4 right-4 z-50 w-full max-w-sm">
            <Notification
              message={notifications.message}
              type={notifications.type}
            />
          </div>
        )}

        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            Contact Us
          </h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-600">
            Get in touch with our team for inquiries and consultations
          </p>
        </div>

        <div className="mt-8 md:mt-12">
          <div className="max-w-3xl mx-auto">
            <form 
              onSubmit={handleSubmit}
              className="bg-white shadow-xl rounded-2xl p-6 md:p-8 lg:p-10 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  name="name"
                  label="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full"
                />

                <FormInput
                  type="email"
                  name="email"
                  label="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full"
                />
              </div>

              <FormInput
                name="subject"
                label="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Message subject"
                className="w-full"
              />

              <div className="space-y-2">
                <label 
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message<span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  className={`
                    w-full px-4 py-3 border rounded-lg shadow-sm resize-none
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    transition-colors duration-200
                    ${errors.message ? 'border-red-500' : 'border-gray-300'}
                  `}
                  required
                ></textarea>
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    w-full md:w-auto px-8 py-3 text-base font-medium text-white
                    bg-blue-600 rounded-lg shadow-md
                    hover:bg-blue-700 focus:outline-none focus:ring-2
                    focus:ring-blue-500 focus:ring-offset-2
                    transition-all duration-200 ease-in-out
                    ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:transform hover:-translate-y-1'}
                  `}
                >
                  <span className="flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;