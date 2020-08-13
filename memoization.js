
const times10 = (n) =>  n*10;

console.log('~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~');
console.log('times10 returns:', times10(9));

const cache = {};

const memoTimes10 = (n) => {
  if(!cache[n]){
    console.log('Calculating...')
    cache[n]=times10(n);
  }
  return cache[n];
}

console.log('\t');
console.log('~~~~~~~~~~~~~~Global Cache~~~~~~~~~~~~~~');
console.log('Calculated value:', memoTimes10(9));	// calculated
console.log('Cached value:', memoTimes10(9));	// cached


const memoizedClosureTimes10 = () => {
  let cache ={};
  return (n)=>{
    if(!cache[n]){
      console.log('Calculating..')
      cache[n]=times10(n);
    }
    return cache[n];
  }
}

const memoClosureTimes10 = memoizedClosureTimes10();

console.log('\t');
console.log('~~~~~~~~~~~~~~Local Cache using Closure~~~~~~~~~~~~~~');
console.log('Calculated value:', memoClosureTimes10(9));	// calculated
console.log('Cached value:', memoClosureTimes10(9));	// cached


const memoize = (cb) => {
  let cache ={};
  return (n)=>{
    if(!cache[n]){
      console.log('Calculating..')
      cache[n]=cb(n);
    }
    return cache[n];
  }
}

const memoizedTimes10 = memoize(times10);

console.log('\t');
console.log('~~~~~~~~~~~~~~ More Generic Closure Cache with Callback ~~~~~~~~~~~~~~');
console.log('Calculated value:', memoizedTimes10(9));	// calculated
console.log('Cached value:', memoizedTimes10(9));	// cached
