function bubbleSort(array) {
    let length = array.length;
    while (length > 0) {
      bubbleSortHelper(array, length)
      length--;
    }
    return array;
  }
  
  function bubbleSortHelper(array, length) {
    for (let i = 0; i < length; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]]
      }
    }
    return array;
  }

  export default bubbleSort;