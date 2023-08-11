import { useRef } from 'react';
import { nanoid } from 'nanoid';
import { Section } from '../components/Section';

const Login = () => {
  const emailInputId = useRef(nanoid());
  const passwordInputId = useRef(nanoid());

  return (
    <Section title="Login">
      <form className="form-control">
        <label htmlFor={emailInputId.current} className="label">
          <span className="label-text">Your email</span>
        </label>
        <input
          id={emailInputId.current}
          type="email"
          name="user_email"
          placeholder="user@mail.com"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <label htmlFor={passwordInputId.current} className="label">
          <span className="label-text">Your password</span>
        </label>
        <input
          id={passwordInputId.current}
          type="password"
          name="user_password"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs mb-6"
          required
        />
        <button className="btn btn-outline btn-success max-w-fit">
          Log in
        </button>
      </form>
    </Section>
  );
};

export default Login;
