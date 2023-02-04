import { randomBetween } from './randomBetween';

const randomSpy = jest.spyOn(Math, 'random');

describe('randomBetween', () => {
	// afterEach(() => {
	// 	jest.clearAllMocks();
	// });

	describe('when Math.random() returns 0', () => {
		beforeEach(() => {
			// find a way to mock math.random to return 0
			randomSpy.mockClear().mockReturnValue(0);
		});

		it('called with min=3 and max=5 returns 3', () => {
			expect(randomBetween(3, 5)).toBe(3);
			expect(randomSpy).toHaveBeenCalledTimes(1);
		});
	});

	describe('when Math.random() returns 0.5', () => {
		beforeEach(() => {
			// this uses mockImplementation instead of mockReturnValue
			randomSpy.mockClear().mockImplementation(() => 0.5);
		});

		it('called with min=3 and max=5 returns 3', () => {
			expect(randomBetween(3, 5)).toBe(4);
			expect(randomSpy).toHaveBeenCalledTimes(1);
		});
	});

	describe('when Math.random() returns 0.999999', () => {
		beforeEach(() => {
			// find a way to mock math.random to return 0
			randomSpy.mockClear().mockReturnValue(0.999999);
		});

		it('called with min=3 and max=5 returns 3', () => {
			expect(randomBetween(3, 5)).toBe(5);
			expect(randomSpy).toHaveBeenCalledTimes(1);
		});
	});
});
