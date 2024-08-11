// so first we make a function with as many parameters as you like but for this project i will be using 3, next we make it so that array 1 merges with array 2 and then with array 3 with the use of concat and return output
function arrays(array1, array2, array3) {
    let output = 0
    output = (array1.concat(array2).concat(array3))
    return output
}
console.log(arrays([1, 2, 3], [4, 5, 6], [7, 8, 9]))