let Rx = require('rxjs/Rx');

let stream$ = new Rx.Observable.create((observer) => {
    let i = 0;
    let id = setInterval(() => {
        observer.next(i++);
    },1000)
    return function(){
        clearInterval( id );
    }
})
let subscription = stream$.subscribe((value) => {
    console.log('Value', value)
});
setTimeout(() => {
    subscription.unsubscribe() // here we invoke the cleanup function
}, 3200)
