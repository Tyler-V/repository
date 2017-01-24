import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'repeat',
    pure: false
})

@Injectable()
export class RepeatPipe implements PipeTransform {
    transform(amount: number) {
        return (new Array(amount)).fill(1);
    }
}
