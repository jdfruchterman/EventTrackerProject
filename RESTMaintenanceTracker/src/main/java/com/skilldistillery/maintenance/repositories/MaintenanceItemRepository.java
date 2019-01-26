package com.skilldistillery.maintenance.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.maintenance.entities.MaintenanceItem;

public interface MaintenanceItemRepository extends JpaRepository<MaintenanceItem, Integer> {

}
