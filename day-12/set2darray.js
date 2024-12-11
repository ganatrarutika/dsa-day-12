let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

function findIntersection(arr1, arr2) {

    let set1 = new Set(arr1);
    return arr2.filter(item => set1.has(item));
}

console.log(findIntersection(arr1, arr2)); 
