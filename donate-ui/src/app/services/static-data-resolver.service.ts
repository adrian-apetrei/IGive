import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { StaticDataService } from './static-data.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<any> {

  constructor(private dataService: StaticDataService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id');
    return this.dataService.getData(id);
  }
}