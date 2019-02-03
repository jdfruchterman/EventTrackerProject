package com.skilldistillery.maintenance;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class RestMaintenanceTrackerApplication extends SpringBootServletInitializer {
	  @Override
	  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	    return application.sources(RestMaintenanceTrackerApplication.class);
	  }

	public static void main(String[] args) {
		SpringApplication.run(RestMaintenanceTrackerApplication.class, args);
	}

}

