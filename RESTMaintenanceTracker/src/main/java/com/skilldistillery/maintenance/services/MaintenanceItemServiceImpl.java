package com.skilldistillery.maintenance.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.maintenance.entities.MaintenanceItem;
import com.skilldistillery.maintenance.repositories.MaintenanceItemRepository;

@Service
public class MaintenanceItemServiceImpl implements MaintenanceItemService {
	
	@Autowired
	MaintenanceItemRepository repo;

	@Override
	public List<MaintenanceItem> showMaintenanceItems() {
		return repo.findAll();
	}

	@Override
	public MaintenanceItem showMaintenanceItem(Integer id) {
		return repo.findById(id).get();
	}

	@Override
	public MaintenanceItem createMaintenanceItem(MaintenanceItem maintenanceItem) {
		return repo.saveAndFlush(maintenanceItem);
	}

	@Override
	public MaintenanceItem updateMaintenanceItem(MaintenanceItem maintenanceItem) {
		return repo.saveAndFlush(maintenanceItem);
	}

	@Override
	public void deleteMaintenanceItem(Integer id) {
		repo.deleteById(id);
	}
	
	
}
