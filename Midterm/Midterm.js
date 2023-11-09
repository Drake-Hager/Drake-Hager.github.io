"Use Strict"




function submit(){
var name = document.getElementById(`name`);
var phone = document.getElementById(`phonenumber`);
var email = document.getElementById(`email`);
var company = document.getElementById(`company`)
var message = document.getElementById(`message`);

var name2 = document.getElementById(`Name`);
var phone2 = document.getElementById(`Phone`);
var email2 = document.getElementById(`Email`);
var company2 = document.getElementById(`Company`);
var message2 = document.getElementById(`message`);

name2.value = name.value;
phone2.value = phone.value;
email2.value = email.value;
company2.value = company.value;
message2.value = message.value;

}

