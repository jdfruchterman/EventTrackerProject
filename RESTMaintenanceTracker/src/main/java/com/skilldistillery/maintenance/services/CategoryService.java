package com.skilldistillery.maintenance.services;

import java.util.List;

import com.skilldistillery.maintenance.entities.Category;


public interface CategoryService {

	public List<Category> showCategories();
	public Category showCategory(Integer id);
}
