export default function appendToEachArrayValue(array, appendString) {
	for (const value of array) {
		const idx = array.indexOf(value)
		array[idx] = appendString + value
	}
	return array
}
