package com.skilldistillery.maintenance.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.maintenance.entities.Category;
import com.skilldistillery.maintenance.services.CategoryService;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost:4202" })
public class CategoryController {

	@Autowired
	CategoryService service;
	
	@GetMapping(path="categories")
	public List<Category> index() {
		return service.showCategories();
	}
	
	@GetMapping(path="categories/{id}")
	public Category show(@PathVariable Integer id) {
		return service.showCategory(id);
	}
	
	
}
