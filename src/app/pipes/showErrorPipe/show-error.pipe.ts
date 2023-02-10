import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showError'
})
export class ShowErrorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
