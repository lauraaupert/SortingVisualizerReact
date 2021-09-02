function heapSort(array) {
    const animations = []
    let length = array.length;
    let i = Math.floor(length / 2 - 1);
    let k = length - 1;

    while (i >= 0) {
        animations.push({
            comparison: [i, i],
            swap: [i, length]
        })
        heapify(array, i, length, animations);
        i--;
    }
    while (k >= 0) {
        const animation = {};
        animation.comparison = [0, k];
        animation.swap = [k, 0];
        console.log(animations)
        animations.push(animation)
        [array[0], array[k]] = [array[k], array[0]];
        heapify(array, 0, k, animations);
        k--;
    }
    console.log(animations)
    return animations;
}

function heapify(array, i, length, animations) {
    let largest = i;
    let left = i * 2 + 1;
    let right = left + 1;

    if (left < length && animations[left] > animations[largest]) {
        largest = left;
    }
    if (right < length && animations[right] > animations[largest]) {
        largest = right;
    }
    if (largest !== i) {
        [animations[i], animations[largest]] = [animations[largest], animations[i]];
        heapify(animations, largest, length)
    }
    return animations;
}

export default heapSort;