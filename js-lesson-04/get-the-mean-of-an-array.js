function getAverage(marks){
    let sum = 0;
    for(const i of marks){
      sum = sum + i;
    }
    return Math.floor(sum/marks.length)
  }