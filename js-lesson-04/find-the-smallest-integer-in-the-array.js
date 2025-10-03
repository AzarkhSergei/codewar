function findSmallestInt(arr) {
    let result = arr[0];
    for(const i of arr){
      if(result > i) result = i;
    }
    return result;
  }