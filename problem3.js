/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/

function LargestPrimeFactor(n) {
	var i = 2;
	while (i < n) {
		if (n % i == 0) {
			n /= i;
		} else {
			i++;
		}
	}
	console.log(i);
}

function Factor(n) {
	var myArray = [];
	for (i = 2; i < n; i++) {
		if (n % i == 0) {
			myArray.push(i);
		}
	}
	console.log(myArray);
}

// LargestPrimeFactor(13195);
// Factor(13195);

LargestPrimeFactor(600851475143); /* Answer: 6857 */