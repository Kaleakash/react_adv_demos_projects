import React from 'react';
import useFormValidation from './useFormValidation'; // Import the custom hook

const LoginPage = () => {
  const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
  };

  const VALIDATION_RULES = {
    username: [{ required: true, minLength: 3 }],
    email: [{ required: true }],
    password: [{ required: true, minLength: 6 }],
  };

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    isSubmitting,
  } = useFormValidation(INITIAL_STATE, VALIDATION_RULES);

  return (
    <div className='container'>
 
    <form onSubmit={handleSubmit}>
    <div className='row'>
        <div className='col-4 offset-2'>
        <input
        type="text"
        name="username"
        value={values.username}
        onChange={handleChange}
        placeholder="Username"
      />
        </div>
        <div className='col-6'>
        {errors.username && <span style={{"color":"red"}}>{errors.username}</span>}
        </div>
    </div>

    <div className='row'>
    <div className='col-4 offset-2'>
    <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />
      </div>
        <div className='col-6'>
        {errors.email && <span style={{"color":"red"}}>{errors.email}</span>}
        </div>
    </div>


    <div className='row'>
    <div className='col-4 offset-2'>
    <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Password"
      />
      </div>
        <div className='col-6'>
        {errors.password && <span style={{"color":"red"}}>{errors.password}</span>}
        </div>
    </div>
    
    <div className='row'>
    <div className='col-4 offset-2'>
    <button type="submit" disabled={isSubmitting} className='btn btn-success'>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </div>
    </div>


      

      
    </form>
    </div>
  );
};

export default LoginPage;
