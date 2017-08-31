import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(values: any, term?: any): any {

    if (term === undefined) {
      return values;
    }

    return values.filter((value) => {
      return value.title.toLowerCase().includes(term.toLowerCase());
    });
  }

}
