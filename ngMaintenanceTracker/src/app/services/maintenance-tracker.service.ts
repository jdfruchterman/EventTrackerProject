import { Category } from './../models/category';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MaintenanceItem } from '../models/maintenance-item';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceTrackerService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8083/api/maintenanceItems';
  private catUrl = 'http://localhost:8083/api/categories';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  index() {
    console.log('beginning of index');
    return this.http.get<MaintenanceItem[]>(this.baseUrl)
          .pipe(
            catchError((err: any) => {
              console.log(err);
              return throwError('Error in maintenance items');
            })
          );
  }

  indexCategory() {
    console.log('beginning of index');
    return this.http.get<Category[]>(this.catUrl)
          .pipe(
            catchError((err: any) => {
              console.log(err);
              return throwError('Error in categories');
            })
          );
  }

  show(id) {
    return this.http.get<MaintenanceItem>(this.baseUrl + '/' + id)
          .pipe(
            catchError((err: any) => {
              console.log(err);
              return throwError('Error in MaintenanceItemService.show(id)');
            })
          );
  }

  create(maintenanceItem: MaintenanceItem) {
    console.log(maintenanceItem);
    // todo.id = this.generateId();
    return this.http.post<MaintenanceItem>(this.baseUrl, maintenanceItem, this.httpOptions)
          .pipe(
            catchError((err: any) => {
              console.log(err);
              return throwError('Error in MaintenanceItemService.create()');
            })
          );
  }

  update(updateMaintenanceItem: MaintenanceItem) {
    const id = updateMaintenanceItem.id;
    return this.http.put<MaintenanceItem>(this.baseUrl + '/' + id, updateMaintenanceItem)
          .pipe(
            catchError((err: any) => {
              console.log(err);
              return throwError('Error in MaintenanceItemService.update()');
            })
          );
  }

  delete(id) {
    return this.http.delete(this.baseUrl + '/' + id, this.httpOptions)
          .pipe(
            catchError((err: any) => {
              console.log(err);
              return throwError('Error in MaintenanceItemService.delete()');
            })
          );
    }

}
