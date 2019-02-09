import { Category } from './category';

export class MaintenanceItem {
  id: number;
  title: string;
  category: Category;
  description: string;
  price: number;
  hours: number;
  performedBy: string;
  miles: string;
  date: string;
  vehicle: string;

  constructor(id?: number, title?: string, category?: Category, description?: string,
              price?: number, hours?: number, performedBy?: string, miles?: string,
              date?: string, vehicle?: string) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.description = description;
    this.price = price;
    this.hours = hours;
    this.performedBy = performedBy;
    this.miles = miles;
    this.date = date;
    this.vehicle = vehicle;
  }

}
