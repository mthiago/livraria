import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], search: string): any[] {
    if(!items) return [];
    if(!search) return items;
search = search.toLowerCase();
return items.filter( it => {
    console.log('it', it.titulo)
    console.log('search', search)
      return it.titulo.toLowerCase().includes(search);
    });
   }
}