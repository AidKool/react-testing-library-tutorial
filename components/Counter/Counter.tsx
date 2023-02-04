import { ChangeEvent, useEffect, useState } from 'react';

export interface CounterProps {
	description: string;
	defaultCount: number;
}

export function Counter({ description, defaultCount }: CounterProps) {
	const [count, setCount] = useState(defaultCount);
	const [incrementor, setIncrementor] = useState(1);
	const [bigEnough, setBigEnough] = useState(defaultCount >= 15);

	const DELAY = 200; // delay in ms

	useEffect(() => {
		let timeout: NodeJS.Timeout;
		if (count >= 15) {
			timeout = setTimeout(() => setBigEnough(true), DELAY);
		}
		return () => clearTimeout(timeout);
	}, [count]);

	function handleIncrementor(evt: ChangeEvent<HTMLInputElement>) {
		setIncrementor(parseInt(evt.target.value) || 0);
	}

	return (
		<div>
			<h5>
				DESC: {description} - DC: {defaultCount}
			</h5>
			<label>
				Incrementor:
				<input type="number" onChange={handleIncrementor} value={incrementor} />
			</label>
			<button
				aria-label="decrement"
				onClick={() => setTimeout(() => setCount((oldCount) => oldCount - incrementor), DELAY)}
			>
				-
			</button>
			Current Count: {count}
			<button
				aria-label="increment"
				onClick={() => setTimeout(() => setCount((oldCount) => oldCount + incrementor), DELAY)}
			>
				+
			</button>
			{!bigEnough && <div>I am to small</div>}
		</div>
	);
}
