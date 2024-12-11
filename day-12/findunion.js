let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];

function findUnion(arr1, arr2) {
 
    let unionSet = new Set([...arr1, ...arr2]);

    return [...unionSet];
}

console.log(findUnion(arr1, arr2)); 
