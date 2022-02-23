import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'packagefilter',
})
export class PackagefilterPipe implements PipeTransform {
  transform(items: any[], filter: String): any {
    if (!items || !filter) {
      return items;
    }
    return [items.find((i) => i.id == filter)];
  }
}
