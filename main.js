function sumDigPow(a, b) {
    let answer = []
    for(let i = a; i <= b; i++){
      let check = i.toString()
      .split('')
      .reduce((sum, num, index) => sum += Math.pow(Number(num), index + 1), 0)
      if (i == check) answer.push(i)
    }
    return answer
  }