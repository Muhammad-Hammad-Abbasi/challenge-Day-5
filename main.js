// *Question 1: Array Comparison and Manipulation (Updated)*
// Create a function in TypeScript that takes two arrays of numbers as input. The function should perform the following operations based on the conditions given:
// 1. *If the lengths of both arrays are the same and all elements are the same:*
//    - Merge both arrays into one array.
//    - Multiply all elements of the merged array to produce a single number.
//    - Return the product.
// 2. *If the lengths of both arrays are different:*
//    - Merge both arrays into one array.
//    - Return the middle element of the merged array.
// 3. *If the lengths of both arrays are the same but elements are different:*
//    - Make the elements of both arrays the same by adding corresponding elements.
//    - Merge the arrays.
//    - Return the sum of the elements of the resulting merged array.
function arraysNumbers(arr1, arr2) {
    if (arr1.length === arr2.length) {
        var areElementsSame = true;
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                areElementsSame = false;
                break;
            }
        }
        if (areElementsSame) {
            var product = 1;
            for (var i = 0; i < arr1.length; i++) {
                product *= arr1[i];
            }
            return product;
        }
        else {
            var sum = 0;
            for (var i = 0; i < arr1.length; i++) {
                sum += arr1[i] + arr2[i];
            }
            return sum;
        }
    }
    else {
        // Merge both arrays
        var mergedArray = [];
        for (var i = 0; i < arr1.length; i++) {
            mergedArray.push(arr1[i]);
        }
        for (var i = 0; i < arr2.length; i++) {
            mergedArray.push(arr2[i]);
        }
        // Return the middle element of the merged array
        var middleIndex = Math.floor(mergedArray.length / 2);
        return mergedArray[middleIndex];
    }
}
// Example usage:
var res1 = arraysNumbers([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]); // Same lengths and same elements
var res2 = arraysNumbers([1, 2, 3, 4, 5], [6, 7, 8, 9]); // Different lengths
var res3 = arraysNumbers([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]); // Same lengths but different elements
console.log(res1); // Output: 120 (product of merged array: 1*2*3*4*5)
console.log(res2); // Output: 3 (middle element of merged array: [1,2,3,4,5,6,7,8,9])
console.log(res3); // Output: 55 ((1+6) + (2+7) + (3+8) + (4+9) + (5+10) = 21 + 55 = 76)
function extractFirstLetters(names) {
    var namedArray = [];
    for (var i = 0; i < names.length; i++) {
        namedArray.push(names[i][0]);
    }
    return namedArray;
}
var personNames = ['Hamza', 'Ahmed', 'Mahad', 'Muzammil', 'Ahad', 'Daniyal'];
console.log(extractFirstLetters(personNames));
