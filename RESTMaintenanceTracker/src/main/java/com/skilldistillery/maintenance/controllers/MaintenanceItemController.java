package com.skilldistillery.maintenance.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.maintenance.entities.MaintenanceItem;
import com.skilldistillery.maintenance.services.MaintenanceItemService;

@RestController
@RequestMapping("api")
public class MaintenanceItemController {
	
	@Autowired
	MaintenanceItemService service;
	
	@GetMapping(path="maintenanceItems")
	public List<MaintenanceItem> index() {
		return service.showMaintenanceItems();
	}
	
	@GetMapping(path="maintenanceItems/{id}")
	public MaintenanceItem show(@PathVariable Integer id) {
		return service.showMaintenanceItem(id);
	}
	
	@PostMapping(path="maintenanceItems")
	public MaintenanceItem create(@RequestBody MaintenanceItem maintenanceItem) {
		return service.createMaintenanceItem(maintenanceItem);
	}
	
	@PutMapping(path="maintenanceItems/{id}")
	public MaintenanceItem replace(@RequestBody MaintenanceItem maintenanceItem, @PathVariable Integer id) {
		maintenanceItem.setId(id);
		return service.updateMaintenanceItem(maintenanceItem);
	}
	
	@DeleteMapping(path="maintenanceItems/{id}")
	public void delete(@PathVariable int id) {
		service.deleteMaintenanceItem(id);
	}
}
