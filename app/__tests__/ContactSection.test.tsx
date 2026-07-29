/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import { ContactSection } from '@/app/components/ContactSection';

describe('ContactSection', () => {
  it('renders the contact form with labeled fields and a submit button', () => {
    render(<ContactSection />);

    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Send Message' })
    ).toBeInTheDocument();
  });
});
