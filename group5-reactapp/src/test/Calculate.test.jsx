import { render, screen } from '@testing-library/react'; // Import necessary functions
import { test, expect } from 'vitest'; // Import Vitest testing functions
import Calculate from '../Greeting'; // Import the Calculate component

// Define a test suite
describe('Calculate Component', () => {
  // Define a test
  test('renders Calculate message', () => {
    // Render the Calculate component
    render(<Calculate />);

    // Check if the greeting message is in the document
    expect(screen.getByText(/welcome to my React app/i)).toBeInTheDocument();
  });
});