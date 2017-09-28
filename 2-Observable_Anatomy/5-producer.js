let Rx = require('rxjs/Rx');

class Producer {
   constructor(){
     this.i = 0;
   }
   nextValue(){
     return this.i++;
   }
}

let producer = new Producer();

let stream$ = Rx.Observable.create( (observer) => {
       observer.next( producer.nextValue() )
       observer.next( producer.nextValue() )
    })

let subscription = stream$.subscribe((value) => {
    console.log('Value', value)
});
