function descendingOrder(n){
    const a = String(n).split('').map(Number).sort((a, b) => b - a);
    return Number(a.join(''))
  }