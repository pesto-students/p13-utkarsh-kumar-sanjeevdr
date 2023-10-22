function firstIndexOfOccurrenceRecursive(arr, target, index) {
    // TODO: Implement the recursive function
    if (index == arr.length)
      {
        return -1;
      }
  
  
      if (arr[index] == target)
      {
        return index;
      }
  
      return firstIndexOfOccurrenceRecursive(arr, target, index + 1);
  }
  
  
  function firstIndexOfOccurrenceMain(arr, target) {
    // TODO: Implement the main function
    let index = 0;
    return firstIndexOfOccurrenceRecursive(arr, target, index);
  }