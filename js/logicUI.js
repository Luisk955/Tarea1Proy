document.querySelector('#btnAddFriend').addEventListener('click', addFriend);
document.querySelector('#btnAddPet').addEventListener('click', addPet);

function addFriend(){
	var sName = document.querySelector('#txtName').value,
		sCountry = document.querySelector('#txtCountry').value,
		sBirthday = document.querySelector('#txtBirthday').value,
		sEmail = document.querySelector('#txtEmail').value,
		sPhone = document.querySelector('#txtPhone').value,
		sHobbie = document.querySelector('#txtHobbie').value;

	createFriend(sName, sCountry, sBirthday, sEmail, sPhone, sHobbie);
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
			hobbiesCell = row.insertCell(6);
		

		nameCell.innerHTML = list[i].name;
		countryCell.innerHTML = list[i].country;
		birthdayCell.innerHTML = list[i].birthday;
		emailCell.innerHTML = list[i].email;
		//phoneCell.innerHTML = list[i].phone;


		var inputSelect = document.createElement('input');
		inputSelect.type = 'radio';
		inputSelect.value = list[i].name;
		inputSelect.name = 'rdbtnFriend';
		selectCell.appendChild(inputSelect);
		
		var inputBtnHobbies = document.createElement('input');
		inputBtnHobbies.type = 'button';
		inputBtnHobbies.value = 'Show Hobbies';
		inputBtnHobbies.name = 'btnShowHobbies';
		$(inputBtnHobbies).addClass('btn btn-default');
		inputBtnHobbies.addEventListener('click', function removeHide(){
			var hobbieList = document.querySelector('#hobbiesList');
			var tblPhones = document.querySelector('#tblPhones');
			$(hobbiesList).removeClass('hidden');
			$(tblPhones).addClass('hidden');
		})
		hobbiesCell.appendChild(inputBtnHobbies);
		
		var inputBtnPhones = document.createElement('input');
		inputBtnPhones.type = 'button';
		inputBtnPhones.value = 'Show Numbers';
		inputBtnPhones.name = 'btnShowPhones';
		$(inputBtnPhones).addClass('btn btn-default');
		inputBtnPhones.addEventListener('click', function removeHide(){
			var tblPhones = document.querySelector('#tblPhones');
			$(tblPhones).removeClass('hidden');
			$(hobbiesList).addClass('hidden');
		})
		phoneCell.appendChild(inputBtnPhones);

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
	fillPetsTable();
}
function fillPetsTable(){
	var list = getFriendsList(),
		tbody = document.querySelector('#petsTable tbody');

	tbody.innerHTML = '';

	for(var i=0; i< list.length; i++){
		var pet = list[i].pet;
		if(pet != null){
			var row = tbody.insertRow(i);
			var ownerCell = row.insertCell(0),
				idCell = row.insertCell(1),
				nameCell = row.insertCell(2),
				typeCell = row.insertCell(3);

			ownerCell.innerHTML = list[i].name;
			idCell.innerHTML = pet.id;
			nameCell.innerHTML = pet.name;
			typeCell.innerHTML = pet.type;
			tbody.appendChild;
		}
	}
}