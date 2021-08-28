
export const mergeSort = array => {
    const animations = []
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations)
    return animations;
} 

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {

    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2)
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations)
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        const animation = {};
        animation.comparison = [i, j]
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animation.swap = [k, auxiliaryArray[i]]
            mainArray[k++] = auxiliaryArray[i++]
        } else {
            animation.swap = [k, auxiliaryArray[j]]
            mainArray[k++] = auxiliaryArray[j++]
        }
        animations.push(animation)
    }
    while (i <= middleIdx) {
        animations.push({
            comparison: [i, i],
            swap: [k, auxiliaryArray[i]]
        })
        
        mainArray[k++] = auxiliaryArray[i++]
    }
    while (j <= endIdx) {
        animations.push({
            comparison: [j, j],
            swap: [k, auxiliaryArray[j]]
        })
        mainArray[k++] = auxiliaryArray[j++]
    }
    console.log(animations)
}

// if (array.length <= 1) return array;
//     const middleIdx = Math.floor(array.length / 2);
//     const leftHalf = array.slice(0, middleIdx);
//     const rightHalf = array.slice(middleIdx);
//     return mergeSortedArrays(mergeSort(leftHalf), mergeSort(rightHalf));
// }

// export default mergeSort;

// function mergeSortedArrays(leftHalf, rightHalf) {
//     const sortedArray = new Array(leftHalf.length + rightHalf.length);
//     let k = 0;
//     let i = 0;
//     let j = 0;
//     while (i < leftHalf.length && j < rightHalf.length) {
//         if (leftHalf[i] <= rightHalf[j]) {
//             sortedArray[k++] = leftHalf[i++]
//         } else {
//             sortedArray[k++] = rightHalf[j++];
//         }
//     }
//     while (i < leftHalf.length) {
//         sortedArray[k++] = leftHalf[i++]
//     }
//     while (j < rightHalf.length) {
//         sortedArray[k++] = rightHalf[j++]
//     }
//     return sortedArray;