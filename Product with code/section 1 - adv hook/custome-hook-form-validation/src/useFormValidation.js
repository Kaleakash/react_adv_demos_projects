import { useState, useEffect } from 'react';

const useFormValidation = (initialState, validationRules) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    const validate = () => {
      let valid = true;
      const newErrors = {};
      for (const fieldName in validationRules) {
        if (Object.prototype.hasOwnProperty.call(validationRules, fieldName)) {
          const rules = validationRules[fieldName];
          const value = values[fieldName];
          for (const rule of rules) {
            if (rule.required && !value.trim()) {
              newErrors[fieldName] = `${fieldName} is required`;
              valid = false;
              break;
            }

            if (rule.minLength && value.length < rule.minLength) {
              newErrors[fieldName] = `${fieldName} must be at least ${rule.minLength} characters`;
              valid = false;
              break;
            }

            // Add more validation rules as needed
          }
        }
      }

      setErrors(newErrors);
      return valid;
    };

    if (isSubmitting) {
      const isValid = validate();

      if (isValid) {
        // Perform form submission, e.g., send data to server
        console.log('Form data:', values);
        setValues(initialState);
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
    }
  }, [isSubmitting, values, validationRules, initialState]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return {
    values,
    handleChange,
    handleSubmit,
    errors,
    isSubmitting,
  };
};

export default useFormValidation;
