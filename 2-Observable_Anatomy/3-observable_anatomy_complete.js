let Rx = require('rxjs/Rx');

let stream$ = Rx.Observable.create((observer) => {
   // x calls to observer.next(<value>)
   observer.complete();
})
