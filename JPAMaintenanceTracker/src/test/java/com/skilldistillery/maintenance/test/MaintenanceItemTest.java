package com.skilldistillery.maintenance.test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.fail;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.skilldistillery.maintenance.entities.MaintenanceItem;

class MaintenanceItemTest {
	private static EntityManagerFactory emf;
	private static EntityManager em;
	private MaintenanceItem maintenanceItem;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("maintenancedb");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		maintenanceItem = em.find(MaintenanceItem.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		maintenanceItem = null;
	}
	
	@Test
	void test() {
		assertEquals("Oil Change", maintenanceItem.getTitle());
		assertEquals("Preventative Maintenance", maintenanceItem.getCategory());
	}

}
