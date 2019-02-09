import { MaintenanceItem } from './../../models/maintenance-item';
import { MaintenanceTrackerService } from './../../services/maintenance-tracker.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-maintenance-tracker',
  templateUrl: './maintenance-tracker.component.html',
  styleUrls: ['./maintenance-tracker.component.css']
})
export class MaintenanceTrackerComponent implements OnInit {

  maintenanceItems = [];
  categories = [];
  deleted = false;
  selected = null;

  newMaintenanceItem: MaintenanceItem = new MaintenanceItem();
  editMaintenanceItem = null;

  constructor(private maintenanceTrackerService: MaintenanceTrackerService) { }

  ngOnInit() {
    this.reload();
  }

  reload() {
    console.log('beginning of reload');
    this.maintenanceTrackerService.index().subscribe(
        data => {
          this.maintenanceItems = data;
        },
        error => console.log(error)
    );
    this.maintenanceTrackerService.indexCategory().subscribe(
        data => {
          this.categories = data;
        },
        error => console.log(error)
    );
  }

  addMaintenanceItem(maintenanceItemForm: NgForm) {
    this.maintenanceTrackerService.create(maintenanceItemForm.value).subscribe(
      data => {
        // this.newTodo = data;
        this.reload();
      },
      error => console.log(error)
      );
    // this.newTodo = new Todo(0, taskForm.value.task, '', false);
    // // this.generateId();
    // this.todoService.create(this.newTodo);
    // this.loadTodos();
  }

  deleteMaintenanceItem(id) {
    this.maintenanceTrackerService.delete(id).subscribe(
      data => {
        this.reload();
        // this.deleted = data;
      },
      error => console.log(error)
    );
    // this.loadTodos();
  }

  setEditMaintenanceItem() {
    this.editMaintenanceItem = Object.assign({}, this.selected);
  }

  updateMaintenanceItem(maintenanceItemForm: NgForm) {
    const localMaintenanceItem = new MaintenanceItem(
        this.selected.id, maintenanceItemForm.value.title, maintenanceItemForm.value.category,
        maintenanceItemForm.value.description, maintenanceItemForm.value.price, maintenanceItemForm.value.hours,
        maintenanceItemForm.value.performedBy, maintenanceItemForm.value.miles,
        maintenanceItemForm.value.date, maintenanceItemForm.value.vehicle
       );
    console.log(localMaintenanceItem);
    this.maintenanceTrackerService.update(localMaintenanceItem).subscribe(
      data => {
        this.reload();
        this.selected = localMaintenanceItem;
        this.editMaintenanceItem = null;
      },
      error => console.log(error)
    );
  }

  displayMaintenanceItem = function(maintenanceItem) {
    this.selected = maintenanceItem;
  };

  displayTable = function() {
    this.selected = null;
  };
}
