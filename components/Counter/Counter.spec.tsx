import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter', () => {
	describe('initialise currentCount=0 and description=My Counter', () => {
		it('renders title My Counter', () => {
			render(<Counter defaultCount={0} description="My Counter" />);
			expect(screen.getByText(/my counter/i)).toBeInTheDocument();
		});

		it('renders "Current Count: 0"', () => {
			render(<Counter defaultCount={0} description="My Counter" />);
			expect(screen.getByText('Current Count: 0')).toBeInTheDocument();
		});

		describe('when + button clicked', () => {
			it('renders "Current Counter: 1"', async () => {
				render(<Counter defaultCount={0} description="My Counter" />);
				const user = userEvent.setup();
				await user.click(screen.getByRole('button', { name: /increment/i }));
				// await waitFor(() => expect(screen.getByText('Current Count: 1')).toBeInTheDocument(), {timeout: 5000});
				expect(await screen.findByText('Current Count: 1')).toBeInTheDocument();
			});
		});

		describe('when - button clicked', () => {
			it('renders "Current Counter: -1"', async () => {
				render(<Counter defaultCount={0} description="My Counter" />);
				const user = userEvent.setup();
				await user.click(screen.getByRole('button', { name: /decrement/i }));
				expect(await screen.findByText('Current Count: -1')).toBeInTheDocument();
			});
		});
	});

	describe('initialise currentCount=10 and description=WWW', () => {
		it('renders title WWW', () => {
			render(<Counter defaultCount={0} description="WWW" />);
			expect(screen.getByText(/www/i)).toBeInTheDocument();
		});

		it('renders "Current Count: 10"', () => {
			render(<Counter defaultCount={10} description="WWW" />);
			expect(screen.getByText('Current Count: 10')).toBeInTheDocument();
		});

		describe('when the incrementor changes to 5 and the + button is clicked', () => {
			it('renders "Current Count: 15"', async () => {
				render(<Counter defaultCount={10} description="WWW" />);
				const inputEl = screen.getByLabelText(/incrementor/i);
				const user = userEvent.setup();
				await user.clear(inputEl);
				await user.type(inputEl, '5');
				await user.click(screen.getByRole('button', { name: /increment/i }));
				const expected = await screen.findByText('Current Count: 15');
				expect(expected).toBeInTheDocument();
			});
		});

		describe('when the incrementor changes to 5 and the - button is clicked', () => {
			it('renders "Current Count: 5"', async () => {
				render(<Counter defaultCount={10} description="WWW" />);
				const inputEl = screen.getByLabelText(/incrementor/i);
				const user = userEvent.setup();
				await user.clear(inputEl);
				await user.type(inputEl, '5');
				await user.click(screen.getByRole('button', { name: /decrement/i }));
				expect(await screen.findByText('Current Count: 5')).toBeInTheDocument();
			});
		});
	});
});
