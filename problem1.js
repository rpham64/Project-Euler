/* Problem: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
            Find the sum of all the multiples of 3 or 5 below 1000.
*/

function SumOfMultiples(n) {

    var myArray = [];
    
    for (i = 1; i < n; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            myArray[myArray.length] = i;
        }
    }
    
    console.log(myArray);
    
    total = 0;
    for (i = 0; i < myArray.length; i++) {
        total += myArray[i];
    }
    
    console.log(total);
};

SumOfMultiples(1000); /* Correct answer: 233168 */