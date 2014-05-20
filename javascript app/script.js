//JSON data model
var users = [
{
	name: 'Lucy',
	gender: 'F',
	hobby: 'pets',
	avatar: 'avatar.jpg'
},
{
	name: 'Betty',
	gender: 'F',
	hobby: 'pets',
	avatar: 'avatar.jpg'
},
{
	name:'Ronald',
	gender: 'M',
	hobby: 'music',
	avatar: 'avatar.jpg'
},
{
	name:'Christopher',
	gender:'M',
	hobby:'sports',
	avatar: 'avatar.jpg'
},

];


window.addEventListener('load', function() {
	
	var results = document.getElementById('results');

	function search() {

		//get hobby
		var hobbyField = document.getElementById('hobby');
		var hobby = hobbyField.value;
		

		//get gender
		var genderField = document.getElementById('gender');
		var s = genderField.selectedIndex;
		var gender = genderField.options[s].value;
		

		//set template
		results.innerHtmL = '';
		var usersLength = users.length;

		for(var i = 0; i <usersLength; i++) {
			//check gender
			if(gender == 'A' || gender == users[i].gender) {

				//check hobby
				if(hobby == '' || hobby == users[i].hobby) {
			resultsHtmL += '<div class="person-row">\
							<img src="images/' + users[i].avatar + '" />
							<div class="person-info">\
							<div>' + users[i].name + '</div>\
							<div>' + users[i].hobby + '</div></div>\
							<button>Add as friend</button></div>';
					}
				}

			}
		
		results.innerHTML = resultsHtml;
	}

	var searchBtn = document.getElementById('searchBtn');

	searchBtn.addEventListener('click', search);
});