document.querySelector('#btnAddFriend').addEventListener('click', addFriend);
document.querySelector('#btnAddPet').addEventListener('click', addPet);

function addFriend(){
	var sName = document.querySelector('#txtName').value,
		sCountry = document.querySelector('#txtCountry').value,
		sBirthday = document.querySelector('#txtBirthday').value,
		sEmail = document.querySelector('#txtEmail').value,
		sPhone = document.querySelector('#txtPhone').value;

	createFriend(sName, sCountry, sBirthday, sEmail, sPhone);
	fillFriendsTable();	
}
function fillFriendsTable(){
	var list = getFriendsList(),
		tbody = document.querySelector('#friendsTable tbody');

	tbody.innerHTML = '';
	for(var i=0; i < list.length; i++){
		var row = tbody.insertRow(i);
		var nameCell = row.insertCell(0),
			countryCell = row.insertCell(1),
			birthdayCell = row.insertCell(2),
			emailCell = row.insertCell(3),
			phoneCell = row.insertCell(4),
			selectCell = row.insertCell(5);
		

		nameCell.innerHTML = list[i].name;
		countryCell.innerHTML = list[i].country;
		birthdayCell.innerHTML = list[i].birthday;
		emailCell.innerHTML = list[i].email;
		phoneCell.innerHTML = list[i].phone;

		var inputSelect = document.createElement('input');
		inputSelect.type = 'radio';
		inputSelect.value = list[i].name;
		inputSelect.name = 'rdbtnFriend';
		selectCell.appendChild(inputSelect);
		
		tbody.appendChild(row);
	}	
}
function addPet(){
	var sID = document.querySelector('#txtPetID').value,
		sName = document.querySelector('#txtPetName').value,
		sType = document.querySelector('#txtPetType').value,
		sOwnerID = document.querySelector('#friendsTable tbody input[type=radio]:checked').value;
	var friendObj = findFriend(sOwnerID);

	addPetToFriend(friendObj, sID, sName, sType);
}
function fillPetsTable(){
	var list = getFriendsList(),
		tbody = document.querySelector('#petsTable tbody');

	tbody.innerHTML = '';

	for(var i=0; i< list.length; i++){
		var row = tbody.insertRow[i];
		var ownerCell = list[i].name,
			idCell =,
			nameCell =,
			typeCell =;
	}
}