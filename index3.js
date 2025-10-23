const str = "hello";
//['h','e','l','l','o']

/* const stats = {
    h: 1,
    e: 1,
    l:2,
    o: 1
} */

function getStats(str) {
  const stats = {};
  for (let i = 0; i < str.length; i++) {
    const ltr = str[i];
    if (stats[ltr] === undefined) {
      stats[ltr] = 0;
    }
    stats[ltr] = stats[ltr] + 1;
  }
  return stats;
}

console.log(getStats("This is a sentence!!!!"));
