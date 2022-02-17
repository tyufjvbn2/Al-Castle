const fc = (A: number[]) => {
	let castle: number, start: number, end: number;

	castle = A.reduce((acc: number, el: number, i: number): number => {
		if (A.length === 0) {
			return (acc = 0);
		} else if (A.length === 2) {
			if (A[0] !== A[1]) {
				acc = 2;
			} else {
				acc = 1;
			}
			return acc;
		} else {
			if (i === 0) {
				start = el;
				end = el;
				return acc;
			} else if (0 < i && i < A.length - 1) {
				if (end - start === 0 && end !== el) {
					acc++;
				}
				if (end - start < 0 && end < el) {
					start = end;
					acc++;
				}
				if (end - start > 0 && end > el) {
					start = end;
					acc++;
				}
				end = el;
				return acc;
			} else {
				if (end - start < 0 && end < el) {
					acc = acc + 2;
				} else if (end - start > 0 && end > el) {
					acc = acc + 2;
				} else {
					acc++;
				}
				return acc;
			}
		}
	}, 0);

	return castle;
};

export default fc;
