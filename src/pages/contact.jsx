import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [bot, setBot] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out:
          {' '}
          <input name="bot-field" value={bot} onChange={(e) => setBot(e.target.value)} />
        </label>
      </p>
      <p>
        <label>
          Your name:
          <br />
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </p>
      <p>
        <label>
          Your email:
          <br />
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
      </p>
      <p>
        <label>
          Message:
          <br />
          <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
}
