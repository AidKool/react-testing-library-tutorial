/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { render, screen } from '@testing-library/react';
import { MyDrawer } from './Drawer';

jest.mock('@material-ui/core', () => ({
	...jest.requireActual('@material-ui/core'),
	SwipeableDrawer: jest.fn(() => <div>HELLOOOOOO</div>),
}));

describe('Drawer', () => {
	it('renders "HELLOOOOOO"', () => {
		render(<MyDrawer />);
		expect(screen.getByText(/HELLOOOOOO/i)).toBeInTheDocument();
	});

	// it('clicking on "Open Drawer" Button shows "Hello YouTube!"', async () => {
	// 	render(<MyDrawer />);
	// 	const user = userEvent.setup();
	// 	await user.click(screen.getByRole('button', { name: 'Open Drawer' }));
	// 	expect(screen.getByText('HELLOOOOOO')).toBeInTheDocument();
	// });
});
