import { ChangeEvent, useState } from 'react';

export interface CounterProps {
	description: string;
	defaultCount: number;
}

export function Counter({ description, defaultCount }: CounterProps) {
	const [count, setCount] = useState(defaultCount);
	const [incrementor, setIncrementor] = useState(1);

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
			<button aria-label="decrement" onClick={() => setCount(count - incrementor)}>
				-
			</button>
			Current Count: {count}
			<button aria-label="increment" onClick={() => setCount(count + incrementor)}>
				+
			</button>
		</div>
	);
}
