function arrayPlusArray(arr1, arr2) {
    let sum = 0;
    for(const i of arr1) sum = sum + i;
    for(const x of arr2) sum = sum + x;
    return sum;
  }