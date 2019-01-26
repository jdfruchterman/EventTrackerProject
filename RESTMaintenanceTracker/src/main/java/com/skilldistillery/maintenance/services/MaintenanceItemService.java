package com.skilldistillery.maintenance.services;

import java.util.List;

import com.skilldistillery.maintenance.entities.MaintenanceItem;

public interface MaintenanceItemService {

	public List<MaintenanceItem> showMaintenanceItems();
	public MaintenanceItem showMaintenanceItem(Integer id);
	public MaintenanceItem createMaintenanceItem(MaintenanceItem maintenanceItem);
	public MaintenanceItem updateMaintenanceItem(MaintenanceItem maintenanceItem);
	public void deleteMaintenanceItem(Integer id);
}
