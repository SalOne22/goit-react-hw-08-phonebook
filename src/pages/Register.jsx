import { useRef } from 'react';
import { nanoid } from 'nanoid';
import { Section } from '../components/Section';

const Register = () => {
  const nameInputId = useRef(nanoid());
  const emailInputId = useRef(nanoid());
  const passwordInputId = useRef(nanoid());

  return (
    <Section title="Register">
      <form className="form-control">
        <label htmlFor={nameInputId.current} className="label">
          <span className="label-text">Your name</span>
        </label>
        <input
          id={nameInputId.current}
          type="text"
          name="user_name"
          placeholder="John Doe"
          className="input input-bordered w-full max-w-xs"
          required
        />
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
          Register
        </button>
      </form>
    </Section>
  );
};

export default Register;
