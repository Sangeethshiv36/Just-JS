// A similar type of question was asked to me in an interview when i was looking for a job as a fresher, i could not solve this simple thing at that time. So now when i was looking into objects this suddenly came to my mind so i was like why not. I know its fairly simple problem , but like i said this repo holds no meaning to others its just for myself, to remember stuffs and to not give up.

const obj = {
  a: 1,
  b: {
    c: 2
  },
  c: 3,
  d: 4,
  e: {
    f: {
      c: 4
    }
  },
  f: {
    g: {
      h: {
        i: {
          c: {
            c: 3
          }
        }
      }
    }
  }
};

//get all occurences of key 'c' from the nested object

const getAllOccurencesofProp = (object, prop) => {
  const result = [];
  Object.keys(object).forEach((key) => {
    if (typeof object[key] === 'object') {
      result.push(...getAllOccurencesofProp(object[key], prop));
    }
    if (key === prop) {
      result.push(object[key]);
    }
  });
  return result;
};

console.log('Get All Occurences of C', getAllOccurencesofProp(obj, 'c'));

console.log('Get All Occurences of F', getAllOccurencesofProp(obj, 'f'));
