/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { DataGrid } from '@material-ui/data-grid';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mocked } from 'jest-mock';
import { Example2, rows } from './Example2';

jest.mock('@material-ui/data-grid', () => ({
	...jest.requireActual('@material-ui/data-grid'),
	DataGrid: jest.fn(() => <div>Table</div>),
}));

const mockedDataGrid = mocked(DataGrid);

describe('Example2', () => {
	afterEach(() => {
		mockedDataGrid.mockClear();
	});

	it('renders Material-UI grid with columnDefs and rowData', async () => {
		const onMoney = jest.fn();
		render(<Example2 onMoney={onMoney} />);
		const user = userEvent.setup();
		await user.click(screen.getByRole('button', { name: /give me 33 dollars/i }));
		expect(onMoney).toHaveBeenCalledTimes(1);
		expect(onMoney).toHaveBeenCalledWith(33);
	});

	it('renders table passing the expected props', () => {
		render(<Example2 onMoney={jest.fn()} />);
		expect(mockedDataGrid).toHaveBeenCalledTimes(1);
		expect(mockedDataGrid).toHaveBeenLastCalledWith(
			{
				rows: rows,
				columns: [
					expect.objectContaining({ field: 'id' }),
					expect.objectContaining({ field: 'firstName' }),
					expect.objectContaining({ field: 'lastName' }),
					expect.objectContaining({ field: 'age' }),
				],
				pageSize: 5,
				checkboxSelection: true,
			},
			{} // an empty context
		);
	});
});
