const _ = {};

const rooms2 = ['Kitchen', 'Library', 'Conservatory', 'Hall', 'Dining Room'];

_.filter = (collection, predicate) => {
  let results = [];
  collection.forEach((item) => {
    if (predicate(item)) {
      results.push(item);
    }
  });
  return results;
};

// Tests
const clues = _.filter(rooms2, (room) => {
  return room.length === 7;
});

console.log(clues.length === 2);

console.log(clues[0] === 'Kitchen');
console.log(clues[1] === 'Library');

console.log(clues);
