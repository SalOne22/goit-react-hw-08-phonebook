import { useRef } from 'react';
import { nanoid } from 'nanoid';

export const ContactForm = () => {
  const nameInputId = useRef(nanoid());
  const phoneInputId = useRef(nanoid());

  return (
    <form className="form-control">
      <label htmlFor={nameInputId.current} className="label">
        <span className="label-text">Contact name</span>
      </label>
      <input
        id={nameInputId.current}
        type="text"
        name="contact_name"
        placeholder="John Doe"
        className="input input-bordered w-full max-w-xs"
        required
      />
      <label htmlFor={phoneInputId.current} className="label">
        <span className="label-text">Contact phone</span>
      </label>
      <input
        id={phoneInputId.current}
        type="tel"
        name="contact_phone"
        placeholder="+123211212"
        className="input input-bordered w-full max-w-xs mb-6"
        required
      />
      <button className="btn btn-outline btn-success max-w-fit">Create</button>
    </form>
  );
};
