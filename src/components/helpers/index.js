// my shuffle function didn't work that well and I found this one from stack overflow which did a much better job. I modified it slightly for my needs
// https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array/38571132#38571132

export const getRandom = (arr, n) => {
	let result = new Array(n),
		len = arr.length,
		taken = new Array(len);
	if (n > len) n = len;
	while (n--) {
		let x = Math.floor(Math.random() * len);
		result[n] = arr[x in taken ? taken[x] : x];
		taken[x] = --len in taken ? taken[len] : len;
	}
	return result;
};
