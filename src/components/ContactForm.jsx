import React, { useState } from 'react';
import styled from '@emotion/styled';

const TextBox = styled.input`
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #838383;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Area = styled.textarea`
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #838383;
  border-radius: 4px;
  box-sizing: border-box;
`;

const SubmittedMessage = styled.h1`
  color: #1f3252;
  font-size: 2rem;
`;

const encode = (data) => Object.keys(data)
  .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
  .join('&');

export default function ContactForm() {
  const [state, setState] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(
        setSubmitted(true),
      )
      .catch((error) => alert(error));
  };

  return (
    <div>

      {!submitted ? (
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label htmlFor="name">
              Your name:
              <br />
              <TextBox type="text" id="name" name="name" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label htmlFor="email">
              Your email:
              <br />
              <TextBox type="email" id="email" name="email" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label htmlFor="message">
              Message:
              <br />
              <Area name="message" id="message" onChange={handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      ) : <SubmittedMessage>Your Message has been sent, I will get back to you as soon as I can</SubmittedMessage>}
    </div>
  );
}
