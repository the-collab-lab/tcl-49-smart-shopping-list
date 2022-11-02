const ONE_DAY_IN_MILLISECONDS = 86400000;

/**
 * Get a new JavaScript Date that is `offset` days in the future.
 * @example
 * // Returns a Date 3 days in the future
 * getFutureDate(3)
 * @param {number} offset
 */
export function getFutureDate(offset) {
	return new Date(Date.now() + offset * ONE_DAY_IN_MILLISECONDS);
}

export function getDaysBetweenDates(from, to) {
	const fromDateObject = new Date(from);
	const toDateObject = new Date(to);

	const [fromTime, toTime] = [fromDateObject.getTime(), toDateObject.getTime()];

	const diffInTime = Math.abs(fromTime - toTime);

	return Math.trunc(diffInTime / (1000 * 60 * 60 * 24));
}
