var friendList = [];

function createFriend(pName, pCountry, pBirthday, pEmail, pPhone){
	var newFriend = {
		name: pName,
		country: pCountry,
		birthday: pBirthday,
		email: pEmail,
		phone: pPhone,
		pet: {}
	};
	console.log(newFriend);
	friendList.push(newFriend);
}
function getFriendsList(){
	return friendList
}

function findFriend(pID) {
	var friendObj;
	for (var i = 0; i < friendList.length; i++) {
		if(friendList[i].name == pID){
			friendObj = friendList[i];
		}
	}
	return friendObj
}

function addPetToFriend(pfriendObj, ppetID, ppetName, ppetType){
	var newPet = {
		id: ppetID,
		name: ppetName,
		type: ppetType
	}
	var index = friendList.indexOf(pfriendObj);
	pfriendObj.pet = newPet;

	friendList[index] = pfriendObj;
}