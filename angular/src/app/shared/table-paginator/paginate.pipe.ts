import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'paginate', standalone: true })
export class PaginatePipe implements PipeTransform {
  transform<T>(items: T[] | null | undefined, page: number, size: number): T[] {
    const arr = items ?? [];
    if (!size || size <= 0) return arr;
    const start = (Math.max(1, page) - 1) * size;
    return arr.slice(start, start + size);
  }
}
