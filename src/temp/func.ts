const fc = (A: number[]) => {
	let castle: number, start: number, end: number;

	castle = A.reduce((acc: number, el: number, i: number): number => {
		if (i === 0) {
			start = el;
			end = el;
		} else if (0 < i || i < A.length - 1) {
			if (end - start < 0 && end < el) {
				start = end;
				acc++;
			}
			if (end - start > 0 && end > el) {
				start = end;
				acc++;
			}
			if (end - start === 0 && end !== el) {
				acc++;
			}
			end = el;
		} else {
			if (el !== end) {
				acc = acc + 2;
			} else {
				acc++;
			}
			return acc;
		}
	}, 0);

	return castle;
};

export default fc;
