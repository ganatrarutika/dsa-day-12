let input = [1, 2, 2, 3, 3, 3];

function count(arr) {
    const countMap = new Map();

    arr.forEach(item => {
        if (countMap.has(item)) {
            countMap.set(item, countMap.get(item) + 1);
        } else {
            countMap.set(item, 1);
        }
    });

    return countMap;
}

console.log(count(input)); 
