import { render, screen } from '@testing-library/react';
import Hello from './Hello';

describe('Hello test suite', () => {
	test('it renders "Hello World!"', () => {
		render(<Hello />);
		const element = screen.getByText(/hello world/i);
		expect(element).toBeInTheDocument();
	});
});
