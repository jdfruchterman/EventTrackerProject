package com.skilldistillery.maintenance.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="maintenance_item")
public class MaintenanceItem {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String title;
	private String category;
	private String description;
	private double price;
	private double hours;
	@Column(name="performed_by")
	private String performedBy;
	private int miles;
	private Date date;
	private String vehicle;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public double getHours() {
		return hours;
	}
	public void setHours(double hours) {
		this.hours = hours;
	}
	public String getPerformedBy() {
		return performedBy;
	}
	public void setPerformedBy(String performedBy) {
		this.performedBy = performedBy;
	}
	public int getMiles() {
		return miles;
	}
	public void setMiles(int miles) {
		this.miles = miles;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getVehicle() {
		return vehicle;
	}
	public void setVehicle(String vehicle) {
		this.vehicle = vehicle;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		MaintenanceItem other = (MaintenanceItem) obj;
		if (id != other.id)
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "MaintenanceItem [id=" + id + ", title=" + title + ", category=" + category + ", description="
				+ description + ", price=" + price + ", hours=" + hours + ", performedBy=" + performedBy + ", miles="
				+ miles + ", date=" + date + ", vehicle=" + vehicle + "]";
	}
	public MaintenanceItem(int id, String title, String category, String description, double price, double hours,
			String performedBy, int miles, Date date, String vehicle) {
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
	public MaintenanceItem() {
	}
	
	
	
	
}
