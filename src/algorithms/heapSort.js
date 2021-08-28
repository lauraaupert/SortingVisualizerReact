function heapSort(array) {
    let length = array.length;
    let i = Math.floor(length / 2 - 1);
    let k = length - 1;

    while (i >= 0) {
        heapify(array, i, length);
        i--;
    }
    while (k >= 0) {
        [array[0], array[k]] = [array[k], array[0]];
        heapify(array, 0, k);
        k--;
    }
    return array;
}

function heapify(array, i, length) {
    let largest = i;
    let left = i * 2 + 1;
    let right = left + 1;

    if (left < length && array[left] > array[largest]) {
        largest = left;
    }
    if (right < length && array[right] > array[largest]) {
        largest = right;
    }
    if (largest !== i) {
        [array[i], array[largest]] = [array[largest], array[i]];
        heapify(array, largest, length)
    }
    return array;
}

export default heapSort;