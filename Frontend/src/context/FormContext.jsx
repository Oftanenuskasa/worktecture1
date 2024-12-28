import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const FormContext = createContext();

export function FormProvider({ children }) {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({});

  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'email':
        { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          error = 'Please enter a valid email address';
        }
        break; }
      case 'name':
        if (value.length < 2) {
          error = 'Name must be at least 2 characters long';
        }
        break;
      // Add more validation cases as needed
    }

    setErrors(prev => ({
      ...prev,
      [name]: error
    }));

    return error === '';
  };

  const updateFormData = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    validateField(name, value);
  };

  const resetForm = () => {
    setFormData({});
    setErrors({});
  };

  const value = {
    formData,
    errors,
    updateFormData,
    validateField,
    resetForm
  };

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
}
FormProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};
export function useForm() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
}
