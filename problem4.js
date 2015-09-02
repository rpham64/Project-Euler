// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// console.log(100*100); 
// console.log(999*999);

// Min: 10000, Max: 998001

function reverse(str) {
	return str.split("").reverse().join("");
};

function isPalindrome(n) {
	return n.toString() == reverse(n.toString());
};

var i, j, product, max = 0;

function LargestPalindrome() {
	for (i = 100; i <= 1000; i++) {
		for (j = i; j <= 1000; j++) {
			product = i * j;
			if (isPalindrome(i*j)) {
				if (max < product) {
					max = product;
					console.log(i + " * " + j + " = " + product);
				}
			}
		}
	}
};

console.log(LargestPalindrome()); /* Answer: 906609 */