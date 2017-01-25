import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterBy',
    pure: false
})

@Injectable()
export class FilterByPipe implements PipeTransform {
    transform(objects: any[], search: string): any[] {
        if (search == null || search.length == 0) return objects;
        search = search.toLowerCase();
        return objects.filter(object => {
            for (let property in object) {
                if (Array.isArray(object[property])) {
                    let children = object[property];
                    for (let child of children) {
                        if (child.hasOwnProperty('name')) {
                            let text = child['name'].toLowerCase();
                            let contains = text.indexOf(search) !== -1;
                            if (contains)
                                return true;
                        }
                    }
                } else if (typeof object[property] == 'string') {
                    let text = object[property].toLowerCase();
                    let contains = text.indexOf(search) !== -1;
                    if (contains)
                        return true;
                }
            }
        });
    }
}