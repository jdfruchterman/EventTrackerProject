package com.skilldistillery.maintenance.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name="maintenance_item")
public class MaintenanceItem {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String title;
//	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "category_id")
	private Category category;
	private String description;
	private double price;
	private double hours;
	@Column(name="performed_by")
	private String performedBy;
	private String miles;
	
	@Temporal(TemporalType.DATE)
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
	public String getMiles() {
		return miles;
	}
	public void setMiles(String miles) {
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
	
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	
	
	
	public MaintenanceItem(int id, String title, Category category, String description, double price, double hours,
			String performedBy, String miles, Date date, String vehicle) {
		super();
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
	@Override
	public String toString() {
		return "MaintenanceItem [id=" + id + ", title=" + title + ", category=" + category + ", description="
				+ description + ", price=" + price + ", hours=" + hours + ", performedBy=" + performedBy + ", miles="
				+ miles + ", date=" + date + ", vehicle=" + vehicle + "]";
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

	public MaintenanceItem() {
	}
	
	
	
	
}
