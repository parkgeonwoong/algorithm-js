function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return;

  const mid = Math.floor((left + right) / 2);
  const pivot = arr[mid];
  const partition = divide(arr, left, right, pivot);

  quickSort(arr, left, partition - 1);
  quickSort(arr, partition, right);

  function divide(arr, left, right, pivot) {
    console.log(
      `array: ${arr}, left: ${arr[left]}, pivot: ${pivot}, right: ${arr[right]}`
    );
    while (left <= right) {
      while (arr[left] < pivot) left++;
      while (arr[right] > pivot) right--;

      if (left <= right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      }
    }
    return left;
  }
  return arr;
}

const sorted = quickSort([5, 8, 1, 3, 9, 4, 7]);
console.log(sorted);
