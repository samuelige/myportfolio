import {render, screen} from '@testing-library/react'
import Home from '@/app/page';

describe('Home', () => {
  it('renders the start prompting text', () => {
    render(<Home />);
    expect(screen.getByText('Start prompting.')).toBeInTheDocument();
  });
});