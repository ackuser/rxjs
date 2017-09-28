let Rx = require('rxjs/Rx');

let stream$ = Rx.Observable.from([1,2,3])
stream$.subscribe( (value) => {
   console.log('Value',value);
})
// 1,2,3

let promise = new Promise((resolve, reject) => {
   setTimeout(()=> {
      resolve( [1,2,3] )
   })
})
promise.then((value) => {
  console.log('Value',value)
})
