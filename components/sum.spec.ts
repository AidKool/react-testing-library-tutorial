import { sum } from './sum';

describe('sum', () => {
	test('1 + 1 should return 2', () => {
		const a: number = 1;
		const b: number = 1;
		expect(sum(a, b)).toBe(2);
	});
});
