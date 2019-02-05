package com.skilldistillery.maintenance.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.maintenance.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

}
