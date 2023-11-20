"Use Strict"

const $ = selector => document.querySelector(selector);
let errormessage = ""
function submit(){
var name = $(`#name`);
var phone = $(`#phonenumber`);
var email = $(`#email`);
var company = $(`#company`)
var message = $(`#message`);

var name2 = $(`#Name`);
var phone2 = $(`#Phone`);
var email2 = $(`#Email`);
var company2 = $(`#Company`);
var message2 = $(`#Message`);
if(name2 = ""){errormessage += "You must insert a name"};
if(phone2 = ""){errormessage += "You must insert a phone number"};
if(email2 = ""){errormessage += "You must insert an email address"};
if(name=""){errormessage += "You must insert a name"};


$("#span1").textcontent = errormessage;

name2.value = name.value;
phone2.value = phone.value;
email2.value = email.value;
company2.value = company.value;
message2.value = message.value;

}

