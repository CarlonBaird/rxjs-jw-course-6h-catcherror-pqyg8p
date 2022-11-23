import { EMPTY, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const failingHttpRequest$ = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.error(new Error('Timeout'));
  }, 3000);
});

console.log('App started');

failingHttpRequest$
  .pipe(
    //hiding the error
    // catchError((error) => of('Fallback value'))
    catchError(() => EMPTY)
  )
  .subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('Completed'),
  });
//.subscribe((value) => console.log(console.log(value)));
