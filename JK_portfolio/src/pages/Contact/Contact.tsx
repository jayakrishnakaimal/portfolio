import React, { useState } from 'react';
import './Contact.css';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to your email service (e.g. EmailJS, Formspree)
    console.log('Form submitted:', form);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In <span>Touch</span></h2>
        <div className="contact__wrapper">
          <div className="contact__info">
            <p>
              Have a project in mind, a question, or just want to say hi?
              Feel free to reach out — I'll get back to you as soon as possible.
            </p>
            <ul className="contact__links">
              <li>
                <a href="mailto:your.email@example.com">your.email@example.com</a>
              </li>
              <li>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            {submitted ? (
              <p className="contact__success">
                ✓ Message sent! I'll be in touch soon.
              </p>
            ) : (
              <>
                <div className="contact__field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What's on your mind?"
                  />
                </div>
                <button type="submit" className="btn btn--primary">
                  Send Message
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
