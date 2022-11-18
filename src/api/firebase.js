import {
	collection,
	onSnapshot,
	addDoc,
	getDocs,
	doc,
	updateDoc,
	deleteDoc,
	Timestamp,
} from 'firebase/firestore';
import { db } from './config';
import { getFutureDate, getDaysBetweenDates, addDaysToDate } from '../utils';
import { calculateEstimate } from '@the-collab-lab/shopping-list-utils';

/**
 * Subscribe to changes on a specific list in the Firestore database (listId), and run a callback (handleSuccess) every time a change happens.
 * @param {string} listId The user's list token
 * @param {Function} handleSuccess The callback function to call when we get a successful update from the database.
 * @returns {Function}
 *
 * @see: https://firebase.google.com/docs/firestore/query-data/listen
 */
export function streamListItems(listId, handleSuccess) {
	const listCollectionRef = collection(db, listId);
	return onSnapshot(listCollectionRef, handleSuccess);
}

/**
 * Read the information from the provided snapshot and return an array
 * that can be stored in our React state.
 * @param {Object} snapshot A special Firebase document with information about the current state of the database.
 * @returns {Object[]} An array of objects representing the user's list.
 */
export function getItemData(snapshot) {
	return snapshot.docs.map((docRef) => {
		/**
		 * We must call a special `.data()` method to get the data
		 * out of the referenced document
		 */
		const data = docRef.data();

		/**
		 * The document's ID is not part of the data, but it's very useful
		 * so we get it from the document reference.
		 */
		data.id = docRef.id;

		return data;
	});
}

/**
 * Add a new item to the user's list in Firestore.
 * @param {string} listId The id of the list we're adding to.
 * @param {Object} itemData Information about the new item.
 * @param {string} itemData.itemName The name of the item.
 * @param {number} itemData.daysUntilNextPurchase The number of days until the user thinks they'll need to buy the item again.
 */
export async function addItem(listId, { itemName, daysUntilNextPurchase }) {
	const listCollectionRef = collection(db, listId);

	return await addDoc(listCollectionRef, {
		dateCreated: new Date(),
		// NOTE: This is null because the item has just been created.
		// We'll put a Date here when the item is purchased!
		dateLastPurchased: null,
		dateNextPurchased: getFutureDate(daysUntilNextPurchase),
		// This property will be used when we build out more of our UI.
		isChecked: false,
		name: itemName,
		totalPurchases: 0,
	});
}

export async function updateItem(listId, docId, itemData) {
	const docRef = doc(db, listId, docId);
	const { isChecked, totalPurchases, dateLastPurchased, dateNextPurchased } =
		itemData;
	let data;

	const currentDate = new Date();
	const oldDateLastPurchased = dateLastPurchased
		? dateLastPurchased.toDate()
		: currentDate;
	const oldDateNextPurchased = dateNextPurchased.toDate();
	const previousEstimate = getDaysBetweenDates(
		oldDateLastPurchased,
		oldDateNextPurchased,
	);

	const daysSinceLastTransaction = getDaysBetweenDates(
		oldDateLastPurchased,
		currentDate,
	);

	const estimatedNextPurchaseInDays = calculateEstimate(
		previousEstimate,
		daysSinceLastTransaction,
		totalPurchases,
	);

	const newDateNextPurchased = addDaysToDate(
		currentDate,
		estimatedNextPurchaseInDays,
	);

	data = {
		isChecked,
		totalPurchases,
		dateLastPurchased: Timestamp.fromDate(currentDate),
		dateNextPurchased: Timestamp.fromDate(newDateNextPurchased),
	};

	await updateDoc(docRef, data);
}

export async function deleteItem(listId, docId, itemData) {
	const deleteDocRef = doc(db, listId, docId);

	await deleteDoc(deleteDocRef, itemData);

	console.log('data', deleteDocRef);
}

export async function checkToken(tokenName = '') {
	const collectionRef = collection(db, tokenName);

	const snapshot = await getDocs(collectionRef);

	return !!snapshot.docs.length;
}

export function comparePurchaseUrgency(data) {
	const convertedData = data.map((item) => {
		const currentDate = new Date();

		const daysSinceLastPurchase = item.dateLastPurchased
			? getDaysBetweenDates(item.dateLastPurchased.toDate(), currentDate)
			: null;

		// assumption: daysUntilNextPurchase are in the future
		const daysUntilNextPurchase = getDaysBetweenDates(
			currentDate,
			item.dateNextPurchased.toDate(),
		);

		return { ...item, daysSinceLastPurchase, daysUntilNextPurchase };
	});

	// discrepancies with sort on Firefox vs Chrome. Sort is working only on Chrome: https://v8.dev/features/stable-sort
	return convertedData.sort((item1, item2) => {
		if (item1.daysSinceLastPurchase && item1.daysSinceLastPurchase > 60) {
			if (item1.daysSinceLastPurchase < item2.daysSinceLastPurchase) return -1;
			if (item1.daysSinceLastPurchase > item2.daysSinceLastPurchase) return 1;
		}
		if (item1.daysUntilNextPurchase < item2.daysUntilNextPurchase) return -1;
		if (item1.daysUntilNextPurchase > item2.daysUntilNextPurchase) return 1;
		if (item1.name > item2.name) return 1;
		if (item1.name < item2.name) return -1;
	});
}
