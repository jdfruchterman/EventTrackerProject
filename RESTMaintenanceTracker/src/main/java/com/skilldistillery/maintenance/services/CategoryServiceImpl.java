package com.skilldistillery.maintenance.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.maintenance.entities.Category;
import com.skilldistillery.maintenance.repositories.CategoryRepository;

@Service
public class CategoryServiceImpl implements CategoryService {
	
	@Autowired
	CategoryRepository repo;
	
	@Override
	public List<Category> showCategories() {
		return repo.findAll();
	}

	@Override
	public Category showCategory(Integer id) {
		return repo.findById(id).get();
	}

}
