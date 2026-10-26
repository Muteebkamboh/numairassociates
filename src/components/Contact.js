import { useState } from 'react';
import { contactDetails, enquiryTypes } from '../data/content';
import { ArrowIcon, Container, Eyebrow, Reveal } from './ui';

const emptyForm = { name: '', email: '', phone: '', interest: enquiryTypes[0], message: '' };

// Returns an object of error messages, keyed by field name
function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your full name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (values.phone.trim() && !/^[+\d\s()-]{7,}$/.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number, or leave it blank.';
  }
  if (values.message.trim().length < 10) {
    errors.message = 'Please write a short message (at least 10 characters).';
  }
  return errors;
}

const errorColor = 'text-[#F2A38F]';

function Field({ id, label, error, optional, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-[11px] uppercase tracking-label text-ink-muted">
        {label}
        {optional && <span className="normal-case tracking-normal"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className={`mt-2 text-[13px] ${errorColor}`}>
          {error}
        </p>
      )}
    </div>
  );
}

function Contact() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'invalid' | 'valid'

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    // Clear a field's error as soon as the visitor edits it
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      setStatus('invalid');
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    /*
      BACKEND REQUIRED: nothing is sent yet. To deliver enquiries, post `values` to an
      email/form service (e.g. Formspree, EmailJS, or your own API endpoint) here, and only
      show a "sent" message after that request succeeds.
    */
    setStatus('valid');
    setValues(emptyForm);
  };

  // Shared props for inputs: border colour and accessibility attributes follow the error state
  const fieldProps = (name) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange: handleChange,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
    className: `mt-2 w-full border-0 border-b bg-transparent px-0 py-3 text-[15px] text-ink-text placeholder:text-ink-muted/50 focus:outline-none focus:ring-0 transition-colors duration-300 ${
      errors[name] ? 'border-[#F2A38F]' : 'border-ink-line hover:border-ink-muted/60 focus:border-lime'
    }`,
  });

  return (
    <section id="contact" className="bg-ink py-20 text-ink-text lg:py-32">
      <Container className="grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow className="text-ink-muted">Enquiries</Eyebrow>
            <h2 className="heading-section mt-6">
              Let’s Find Your <br className="hidden sm:block" />
              Next Place.
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-ink-muted">
              Tell us what you are looking for, and let the conversation begin.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-14 grid gap-6 border-t border-ink-line pt-8 text-[14px] sm:grid-cols-3 lg:grid-cols-1">
              {[
                ['Email', contactDetails.email],
                ['Phone', contactDetails.phone],
                ['Office', contactDetails.office],
              ].map(([term, detail]) => (
                <div key={term}>
                  <dt className="text-[11px] uppercase tracking-label text-ink-muted">{term}</dt>
                  <dd className="mt-1.5 text-ink-text/80">{detail}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <form
            noValidate
            onSubmit={handleSubmit}
            className="border border-ink-line bg-ink-card p-6 sm:p-10"
            aria-label="Enquiry form"
          >
            <div className="grid gap-8 sm:grid-cols-2">
              <Field id="contact-name" label="Full name" error={errors.name}>
                <input type="text" autoComplete="name" {...fieldProps('name')} />
              </Field>
              <Field id="contact-email" label="Email address" error={errors.email}>
                <input type="email" autoComplete="email" {...fieldProps('email')} />
              </Field>
              <Field id="contact-phone" label="Phone number" error={errors.phone} optional>
                <input type="tel" autoComplete="tel" {...fieldProps('phone')} />
              </Field>
              <Field id="contact-interest" label="Enquiry type">
                <select {...fieldProps('interest')}>
                  {enquiryTypes.map((type) => (
                    <option key={type} className="bg-ink-card text-ink-text">
                      {type}
                    </option>
                  ))}
                </select>
              </Field>
              <div className="sm:col-span-2">
                <Field id="contact-message" label="Message" error={errors.message}>
                  <textarea rows={4} className="resize-y" {...fieldProps('message')} />
                </Field>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-4 bg-lime px-8 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-ink-text focus:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink-card"
              >
                Send Enquiry
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <p className="max-w-[17rem] text-[12px] leading-relaxed text-ink-muted">
                This form checks your details but is not yet connected to an inbox.
              </p>
            </div>

            <div role="status" aria-live="polite" className="mt-6 text-[14px] leading-relaxed">
              {status === 'invalid' && (
                <p className={errorColor}>Please correct the highlighted fields and try again.</p>
              )}
              {status === 'valid' && (
                <p className="border-l-2 border-lime pl-4 text-ink-text">
                  Thank you — your enquiry passed all checks. This website is not yet connected to
                  an email service, so the message has not been sent.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}

export default Contact;
