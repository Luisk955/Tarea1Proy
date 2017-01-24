var friendList = [];

function createFriend(pName, pCountry, pBirthday, pEmail, pPhone){
	var newFriend = {
		name: pName,
		country: pCountry,
		birthday: pBirthday,
		email: pEmail,
		phone: pPhone
	};
	console.log(newFriend);
	friendList.push(newFriend);
}
function getFriendsList(){
	return friendList
}