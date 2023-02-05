import { render, screen } from '@testing-library/react';
import { mocked } from 'jest-mock';
import { MyDrawer } from '../example3/Drawer';
import Example4 from './Example4';

jest.mock('../example3/Drawer.tsx');
mocked(MyDrawer).mockImplementation(() => <div>mocked: drawer</div>);

describe('Example4', () => {
	it('renders MyDrawer', () => {
		render(<Example4 />);
		expect(screen.queryByText(/hello drawer component/i)).not.toBeInTheDocument();
		expect(screen.getByText(/mocked: drawer/i)).toBeInTheDocument();
	});
});
