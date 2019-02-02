// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i=0; i< arr.length; i++) {
        for(let j = 0; j < arr.length - 1; j++) {
            if(arr[j] > arr[j+1]) {
                const temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {

}

function mergeSort(arr) {
    if(arr.length === 1) {
        return arr;
    }
    const arrLength = Math.floor(arr.length / 2);

        let leftArray = [];
        let rightArray = [];

        leftArray = arr.slice(0, arrLength);
        rightArray = arr.slice(arrLength);
      
        return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(left, right) {
    let results = [];

    while(left.length && right.length) {
        if(left[0] < right[0]) {
            results.push(left.shift());
        }
        else {
            results.push(right.shift());
        }
    }

    return [...results, ...left, ...right];


}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
