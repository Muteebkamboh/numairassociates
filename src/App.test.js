import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App';

test('renders the hero heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { level: 1 });
  expect(heading).toHaveTextContent(/the right property\.? a smarter investment/i);
});

test('renders six projects, six services and the CEO section', () => {
  render(<App />);
  const projects = document.getElementById('projects');
  expect(within(projects).getAllByRole('article')).toHaveLength(6);

  const services = document.getElementById('services');
  expect(within(services).getAllByRole('listitem')).toHaveLength(6);

  expect(screen.getByRole('heading', { name: 'Numair Naseer Khan' })).toBeInTheDocument();
});

test('hero has no featured property card and the navbar shows the logo', () => {
  render(<App />);
  expect(screen.queryByText(/featured property/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/illustrative price/i)).not.toBeInTheDocument();
  expect(screen.getByRole('img', { name: /numair associates/i })).toBeInTheDocument();
});

test('enquiry form shows errors when empty and is honest about a valid entry', () => {
  render(<App />);
  const submit = screen.getByRole('button', { name: /send enquiry/i });
  fireEvent.click(submit);

  expect(screen.getByText('Please enter your full name.')).toBeInTheDocument();
  expect(screen.getByLabelText('Email address')).toHaveAttribute('aria-invalid', 'true');
  expect(screen.getByRole('status')).toHaveTextContent(/correct the highlighted fields/i);

  fireEvent.change(screen.getByLabelText('Full name'), { target: { value: 'Ayesha Khan' } });
  fireEvent.change(screen.getByLabelText('Email address'), {
    target: { value: 'ayesha@example.com' },
  });
  fireEvent.change(screen.getByLabelText('Message'), {
    target: { value: 'I would like to view a family home.' },
  });
  fireEvent.click(submit);

  expect(screen.getByRole('status')).toHaveTextContent(/has not been sent/i);
});

test('menu button opens the site menu', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /open menu/i }));
  expect(document.getElementById('site-menu')).toBeInTheDocument();
});

test('property category links prefill the enquiry form', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('link', { name: /houses & residences/i }));
  expect(screen.getByLabelText('Message')).toHaveValue('I would like to explore houses and residences.');
  expect(screen.getByLabelText('Enquiry type')).toHaveValue('Buying a plot or property');
  expect(screen.getByText('Purpose Before Property')).toBeInTheDocument();
});
