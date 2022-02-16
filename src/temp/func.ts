const fc = (A) => {
	let castle, start, end;

	castle = A.reduce((cur, el, i) => {
		if (i === 0) {
			start = el;
			end = el;
		} else if (0 < i || i < A.length - 2) {
			if (end !== el) {
			}
		}
	}, 0);

	return castle;
};

export default fc;
