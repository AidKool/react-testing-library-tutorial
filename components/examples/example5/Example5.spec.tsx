import { render, screen } from '@testing-library/react';
import Example5 from './Example5';

jest.mock('../veryComplex/deepFolder/deeperFolder/VeryComplex.tsx');

describe('Example5', () => {
	it('renders very complex component', () => {
		render(<Example5 />);
		expect(screen.getByText(/simple version/i)).toBeInTheDocument();
	});
});
