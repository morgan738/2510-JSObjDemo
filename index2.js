const arr = [1, 2, 3, 4, 5];

/* const stats = {
    evens: 2,
    odds: 3
} */

function getStats(numArr) {
  const stats = {
    evens: 0,
    odds: 0,
  };

  for (let i = 0; i < numArr.length; i++) {
    //check if this number is even
    // arrElement % 2
    if (numArr[i] % 2 === 0) {
      //we have an even number
      // how do we update stats?
      stats.evens = 1 + stats.evens;
    } else {
      stats.odds = 1 + stats.odds;
    }
  }

  return stats;
}

console.log(getStats([]));
