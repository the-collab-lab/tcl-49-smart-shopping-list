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
	const [fromTime, toTime] = [from.getTime(), to.getTime()];

	const diffInTime = Math.abs(fromTime - toTime);

	return Math.trunc(diffInTime / (1000 * 60 * 60 * 24));
}

// export function getDaysBetweenDates(oldDate, newDate){
// 	const actualDate = new Date();

// 	if (oldDate && newDate){
// 		return Math.trunc(
// 			Math.abs(
// 				(oldDate.toDate() - newDate.toDate())/ ONE_DAY_IN_MILLISECONDS,
// 			),
// 		);
// 	} else if (oldDate < actualDate){
// 		return Math.trunc(
// 			(oldDate.toDate() - newDate)/ ONE_DAY_IN_MILLISECONDS,
// 		);
// 	} else {
// 		return Math.trunc(
// 			(actualDate - oldDate.toDate())/ ONE_DAY_IN_MILLISECONDS,
// 		);
// 	}
// }

export function addDaysToDate(date, offset) {
	return new Date(date.getTime() + offset * ONE_DAY_IN_MILLISECONDS);
}
