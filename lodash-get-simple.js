const object = {
  'rooms': [
    {
      'Billiards Room':{
        'clueFound': true
       }
    }
  ]
}

const test1 = {
  player:"Anne",
  suspects:[
    {
    name:'Mrs.White'
    },
    {
    name:'Prof Plum'
    },
    {
    name:'Mrs.peacock'
    }
  ]
}

const _ = {};

_.get = (object,path,defaultValue) => {
  let currObject = object;
  let result;
  path.forEach((item)=> {
    if(currObject[item]) {
      currObject = currObject[item];
      result = currObject;
    } else {
      result = defaultValue ? defaultValue : 'undefined';
    }
  });
  return result;
}

 console.log(_.get(object,['rooms','0','Billiards Room','cluesFound'],'i am default value'));

 console.log(_.get(test1,['suspectss','2','name']));

 console.log(_.get(test1,['suspectss']))
