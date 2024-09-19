var myToken = config.my_token;
function submitForm(){
  var name = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var country = document.getElementById("country").value;
  var phn = document.getElementById("phn").value;
  var whatsapp = document.getElementById("whatsapp").value;
  var gender = document.getElementById("gender").value;
  var qualification = document.getElementById("qualification").value;
  var domain = document.getElementById("domain").value;

  var body = "Name:" + name + "<br/>Email:" + email + "<br/>Country:" + country + "<br/>Contact-No.:" + phn + "<br/>Whatsapp-No.:" + whatsapp + "<br/>Gender:" + gender + "<br/>Qualification:" + qualification + "<br/>Domain:" + domain;

  console.log(body);

  Email.send({
    SecureToken : myToken,
    To : 'azimraza4213@gmail.com',
    From : "azimraza4213@gmail.com",
    Subject : "New Applicant.",
    Body : body
}).then(
  message => {
    if(message=='OK'){
      swal("Successfull", "Your application is submitted.", "success");
    }else{
      swal("Something went wrong!", "Application not submitted.", "error");
    }
  }
);
}