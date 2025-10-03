function solution(str){
    let result = "";
    for(const i of str){
      result = i + result;
    }
    return result
  }