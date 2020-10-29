/* lodash _.invert function.
example:
invert({'name':'Sangeeth Sivan','age':25,''has pet':true})
returns: {'Sangeeth Sivan':'name','25':'age,'true':'has pet}
*/

const _ = {};

_.invert = (obj) => {
  const objClone = obj;
  const entries = Object.entries(obj);

  const invertedObj = entries.map((arr) => {
    return ([arr[0], arr[1]] = [arr[1], arr[0]]);
  });

  const result = invertedObj.reduce((acc, curr) => {
    acc[curr[0]] = curr[1];
    return acc;
  }, {});

  return result;
};

_.invert({ name: 'Sangeeth Sivan', age: 25, 'has pet': true });
