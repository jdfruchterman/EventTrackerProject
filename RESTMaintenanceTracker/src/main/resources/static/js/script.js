window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
});

function init() {
	// document.filmForm.lookup.addEventListener('click', function(event) {
	// event.preventDefault();
	// var filmId = document.filmForm.filmId.value;
	// if (!isNaN(filmId) && filmId > 0) {
	// getFilm(filmId);
	// }
	// })
	// document.newFilmForm.saveFilm.addEventListener('click', createFilm);
	document.createMaintenanceItemForm.submitMaintItem.addEventListener('click', createMaintenanceItem );
	document.showMIForm.showMaintItem.addEventListener('click', showAll);
	
	getStats();
}

function getItemToEdit(e) {
	e.preventDefault();
	var id = e.currentTarget.id;
	console.log(id);
	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/maintenanceItems/' + id, true);
	// xhr.open('GET', 'http://18.188.180.245:8080/PickEmRest/api/games/100',
	// true);

	xhr.onreadystatechange = function() {
		console.log('xhr.readyState: ' + xhr.readyState);
		console.log('xhr.status: ' + xhr.readyState);
		console.log('xhr.responseText: ' + xhr.responseText);
		console.log('--------------');
		if (xhr.readyState === 4 && xhr.status < 400) {
			console.log('typeof xhr.responseText: ' + typeof xhr.responseText);
			var maintenanceItem = JSON.parse(xhr.responseText);
			console.log('typeof maintenanceItem: ' + typeof maintenanceItem);
			editView(maintenanceItem);
			console.log(maintenanceItem);

		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			document.results.textContent = "Maintenance Event not found."
		}
	};
	xhr.send(null);
}

function editMaintenanceItem(e) {
	e.preventDefault();
	var xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/maintenanceItems/' + e.currentTarget.id, true);

	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

	xhr.onreadystatechange = function() {
		console.log(xhr.readyState);
		console.log(xhr.status);
		if (xhr.readyState === 4 ) {
	    if ( xhr.status == 200 || xhr.status == 201 ) { // Ok or Created
	      var maintenanceItem = JSON.parse(xhr.responseText);
	      console.log(maintenanceItem);
	      displayMaintenanceItem(maintenanceItem);
	    }
	    else {
	      console.log("POST request failed.");
	      console.error(xhr.status + ': ' + xhr.responseText);
	    }
	  }
	};
	var editedMaintenanceItemData = document.getElementById("editViewForm");
	console.log(editedMaintenanceItemData);
	var editedMaintenanceItemObject = {
	  id: e.currentTarget.id,
	  title: editedMaintenanceItemData.title.value,
	  category: editedMaintenanceItemData.category.name.value,
	  description: editedMaintenanceItemData.description.value,
	  price: editedMaintenanceItemData.price.value,
	  hours: editedMaintenanceItemData.hours.value,
	  performedBy: editedMaintenanceItemData.performedBy.value,
	  miles: editedMaintenanceItemData.miles.value,
	  date: editedMaintenanceItemData.date.value,
	  vehicle: editedMaintenanceItemData.vehicle.value
	};
	var editedMaintenanceItemObjectJson = JSON.stringify(editedMaintenanceItemObject); // Convert JS object to JSON string
	console.log(editedMaintenanceItemObjectJson);
	console.log(editedMaintenanceItemObject);
	xhr.send(editedMaintenanceItemObjectJson);
}

function deleteMaintenanceItem(e) {
	var xhr = new XMLHttpRequest();
	xhr.open("DELETE", 'api/maintenanceItems/' + e.currentTarget.id, true);
	xhr.onload = function () {
		var maintenanceItems = JSON.parse(xhr.responseText);
		if (xhr.readyState == 4 && xhr.status == "200") {
			console.table(maintenanceItems);
		} else {
			console.error(maintenanceItems);
		}
	}
	xhr.send(null);
};

function editView(maintenanceItem) {
	var editDiv = document.getElementById('editView');
	while(editDiv.nextChild) {
		editDiv.removeChild(list.firstElementChild);
		}
	var form = document.createElement('form');
	form.id = "editViewForm";
	editDiv.appendChild(form);
	
	var titleInput = document.createElement('input');
	titleInput.value = maintenanceItem.title;
	titleInput.id = "title";
	form.appendChild(titleInput);
	
	// change to dropdown selector
	
	var categoryInput = document.createElement('input');
	categoryInput.value = maintenanceItem.category.name;
	categoryInput.id = "category";
	form.appendChild(categoryInput);
	
	var descriptionInput = document.createElement('input');
	descriptionInput.value = maintenanceItem.description;
	descriptionInput.id = "description";
	form.appendChild(descriptionInput);
	
	var priceInput = document.createElement('input');
	priceInput.value = maintenanceItem.price;
	priceInput.id = "price";
	form.appendChild(priceInput);
	
	var hoursInput = document.createElement('input');
	hoursInput.value = maintenanceItem.hours;
	hoursInput.id = "hours";
	form.appendChild(hoursInput);
	
	var performedByInput = document.createElement('input');
	performedByInput.value = maintenanceItem.performedBy;
	performedByInput.id = "performedBy";
	form.appendChild(performedByInput);
	
	var milesInput = document.createElement('input');
	milesInput.value = maintenanceItem.miles;
	milesInput.id = "miles";
	form.appendChild(milesInput);
	
	var dateInput = document.createElement('input');
	dateInput.value = maintenanceItem.date;
	dateInput.id = "date";
	form.appendChild(dateInput);
	
	var vehicleInput = document.createElement('input');
	vehicleInput.value = maintenanceItem.vehicle;
	vehicleInput.id = "vehicle";
	form.appendChild(vehicleInput);
	
	var editButton = document.createElement('button');
	editButton.type = "submit";
	editButton.id = maintenanceItem.id;
	editButton.name = "submitEdit";
	editButton.textContent = "Submit Edits";
	
	editButton.addEventListener('click', editMaintenanceItem);
	form.appendChild(editButton);
	
	var deleteButton = document.createElement('button');
	deleteButton.type = "submit";
	deleteButton.id = maintenanceItem.id;
	deleteButton.name = "deleteEntry";
	deleteButton.textContent = "Delete Entry";
	
	deleteButton.addEventListener('click', deleteMaintenanceItem);
	form.appendChild(deleteButton);
	
	console.log(editDiv);
	
	
	
};



function createMaintenanceItem(e) {
	e.preventDefault();
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/maintenanceItems/', true);

	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

	xhr.onreadystatechange = function() {
		console.log(xhr.readyState);
		console.log(xhr.status);
		if (xhr.readyState === 4 ) {
	    if ( xhr.status == 200 || xhr.status == 201 ) { // Ok or Created
	      var maintenanceItem = JSON.parse(xhr.responseText);
	      console.log(maintenanceItem);
	      displayMaintenanceItem(maintenanceItem);
	    }
	    else {
	      console.log("POST request failed.");
	      console.error(xhr.status + ': ' + xhr.responseText);
	    }
	  }
	};
	var maintenanceItemData = document.createMaintenanceItemForm;
	console.log()
	var maintenanceItemObject = {
	  title: maintenanceItemData.title.value,
	  category: maintenanceItemData.category.name.value,
	  description: maintenanceItemData.description.value,
	  price: maintenanceItemData.price.value,
	  hours: maintenanceItemData.hours.value,
	  performedBy: maintenanceItemData.performedBy.value,
	  miles: maintenanceItemData.miles.value,
	  date: maintenanceItemData.date.value,
	  vehicle: maintenanceItemData.vehicle.value
	};
	var maintenanceItemObjectJson = JSON.stringify(maintenanceItemObject); // Convert JS object to JSON string
	console.log(maintenanceItemObjectJson);
	console.log(maintenanceItemObject);
	xhr.send(maintenanceItemObjectJson);
}

function showAll(e) {
	e.preventDefault();
	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/maintenanceItems/', true);
	// xhr.open('GET', 'http://18.188.180.245:8080/PickEmRest/api/games/100',
	// true);

	xhr.onreadystatechange = function() {
		console.log('xhr.readyState: ' + xhr.readyState);
		console.log('xhr.status: ' + xhr.readyState);
		console.log('xhr.responseText: ' + xhr.responseText);
		console.log('--------------');
		if (xhr.readyState === 4 && xhr.status < 400) {
			console.log('typeof xhr.responseText: ' + typeof xhr.responseText);
			var maintenanceItems = JSON.parse(xhr.responseText);
			console.log(maintenanceItems);
			console.log('typeof maintenanceItems: ' + typeof maintenanceItems);
			displayMaintItems(maintenanceItems);
			console.log(maintenanceItems);

		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			document.results.textContent = "Maintenance Event not found."
		}
	};
	xhr.send(null);
}

function getStats() {
//	e.preventDefault();
	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/maintenanceItems/', true);
	// xhr.open('GET', 'http://18.188.180.245:8080/PickEmRest/api/games/100',
	// true);

	xhr.onreadystatechange = function() {
		console.log('xhr.readyState: ' + xhr.readyState);
		console.log('xhr.status: ' + xhr.readyState);
		console.log('xhr.responseText: ' + xhr.responseText);
		console.log('--------------');
		if (xhr.readyState === 4 && xhr.status < 400) {
			console.log('typeof xhr.responseText: ' + typeof xhr.responseText);
			var maintenanceItems = JSON.parse(xhr.responseText);
			console.log(maintenanceItems);
			console.log('typeof maintenanceItems: ' + typeof maintenanceItems);
			var hoursCount = 0;
			var priceCount = 0;
			for(var i = 0; i< maintenanceItems.length; i++) {
				hoursCount += maintenanceItems[i].hours;
				priceCount += maintenanceItems[i].price;
			}
			
			displayStats(hoursCount, priceCount);
			
			console.log('Hours: ' + hoursCount + ', Cost: ' + priceCount );

		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			document.results.textContent = "Maintenance Event not found."
		}
	};
	xhr.send(null);
}

function displayStats(hoursCount, priceCount) {
	var hours = document.getElementById('hours');
	var price = document.getElementById('price');
	
	hours.textContent = hoursCount;
	price.textContent = priceCount;
	
}

function displayMaintenanceItem(maintenanceItem) {
	var tbody = document.getElementById('tableBody');
	var tr = document.createElement('tr');
	tbody.appendChild(tr);
	
	var title = document.createElement('td');
	title.textContent = maintenanceItem.title;
	tr.appendChild(title);
	
	var category = document.createElement('td');
	category.textContent = maintenanceItem.category.name;
	tr.appendChild(category);
	
	var price = document.createElement('td');
	price.textContent = maintenanceItem.price;
	tr.appendChild(price);
	
	var hours = document.createElement('td');
	hours.textContent = maintenanceItem.hours;
	tr.appendChild(hours);
	
	var performedBy = document.createElement('td');
	performedBy.textContent = maintenanceItem.performedBy;
	tr.appendChild(performedBy);
	
	var miles = document.createElement('td');
	miles.textContent = maintenanceItem.miles;
	tr.appendChild(miles);
	
	var date = document.createElement('td');
	date.textContent = maintenanceItem.date;
	tr.appendChild(date);
	
	var vehicle = document.createElement('td');
	vehicle.textContent = maintenanceItem.vehicle;
	tr.appendChild(vehicle);
}

function displayMaintItems(maintenanceItems) {
	// var maintTable = document.getElementById('displayMaintItem');
	var tbody = document.getElementById('tableBody');
	while(tbody.firstChild) {
		tbody.removeChild(tbody.firstChild);
	}

	for (var i = 0; i < maintenanceItems.length; i++) {
		var maintenanceItem = maintenanceItems[i];
		var tr = document.createElement('tr');
		tr.addEventListener('click', getItemToEdit);
		tr.id = maintenanceItems[i].id;
		console.log(tr.id);
		tbody.appendChild(tr);
		
		var title = document.createElement('td');
		title.textContent = maintenanceItem.title;
		tr.appendChild(title);
		
		var category = document.createElement('td');
		category.textContent = maintenanceItem.category.name;
		tr.appendChild(category);
		
		var price = document.createElement('td');
		price.textContent = maintenanceItem.price;
		tr.appendChild(price);
		
		var hours = document.createElement('td');
		hours.textContent = maintenanceItem.hours;
		tr.appendChild(hours);
		
		var performedBy = document.createElement('td');
		performedBy.textContent = maintenanceItem.performedBy;
		tr.appendChild(performedBy);
		
		var miles = document.createElement('td');
		miles.textContent = maintenanceItem.miles;
		tr.appendChild(miles);
		
		var date = document.createElement('td');
		date.textContent = maintenanceItem.date;
		tr.appendChild(date);
		
		var vehicle = document.createElement('td');
		vehicle.textContent = maintenanceItem.vehicle;
		tr.appendChild(vehicle);

	}

	// TODO:
	// * Create and append elements to the data div to display:
	// * Film title (h1) and description (blockquote).
	// * Rating, release year, and length as an unordered list.
}