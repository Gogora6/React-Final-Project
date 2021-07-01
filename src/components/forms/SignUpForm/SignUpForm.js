import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

import { registerFunc } from '../../../services';

const SignUpForm = (props) => {
  const [message, setMessage] = useState('');
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    const { token } = await registerFunc(data);
    console.log(token);
    if (token) {
      localStorage.setItem('auth.token', JSON.stringify(token));
      history.replace('/');
    } else {
      setMessage('These credentials are incorrect!!');
    }
  };
  return (
    <main className="form-signin ">
      <h5 className="text-danger">{message}</h5>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <br />
        <br />
        <h1 className="h3 mb-3 fw-normal">Please sign UP</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            {...register('email', { required: true })}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            {...register('password', { required: true })}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <br />
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign Up
        </button>
      </form>
    </main>
  );
};

export default SignUpForm;
