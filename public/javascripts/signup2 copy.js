function signUpSuccess() { //when the user clicks on the submit button, if he/she made a mistake, he/she cannot sign up successfully, and an error message will pop up showing the corresponding error
    let email2=document.getElementById("emailInput2").value;
    let username2=document.getElementById("usernameInput2").value;
    let dob2=document.getElementById("fontSize2").value;
    let password2=document.getElementById("passwordInput2").value;
    let password3=document.getElementById("passwordInput3").value;
    let bio2=document.getElementById("bioInput1").value;
    if (email2=="" || username2=="" || dob2=="" || password2=="" || password3=="" || bio2=="") { //when the user doesn't complete everything, the error message will tell the user to complete everything
        document.getElementById("errorM2").innerText="Please make sure you completed all information above!";
    }
    if (password2!=password3 && email2!="" && username2!="" && dob2!="" && password2!="" && password3!="" && bio2!="") { //if the user completed everything, but enter the different password, the error message will tell the user to enter the same password
        document.getElementById("errorM2").innerText="Please make sure you enter the same password twice!";
    }
    if (password2!=password3 && email2=="" || username2=="" || dob2=="" || password2=="" || password3=="" || bio2=="") { //if the user didn't complete everything and also entered the different password, the error message will tell the user to complete all the information and also enter two same password
        document.getElementById("errorM2").innerText="Please make sure you completed all information above and enter the same password!";
    }
    if (password2==password3 && email2!="" && username2!="" && dob2!="" && bio2!="" && password2!="" && password3!="") { //when the user completed everything and entered the same password, the page will jump to the page that congrats the user sign up successfully
      window.location.href="/afterSuccessfullySignUp";
    }
}

/*

function store_user_info() {
    let xml = new XMLHttpRequest();
    xml.onreadystatechange = function() {
      if (xml.readyState === 4 && xml.status === 200) {
        console.log("right");
      }
    };

    let userid = document.getElementById("IDInput2").value;
    let useremail = document.getElementById("emailInput2").value;
    let usergender = document.getElementById("fontSize1").value;
    let userdob = document.getElementById("fontSize2").value;
    let username = document.getElementById("usernameInput2").value;
    let userpassword = document.getElementById("passwordInput2").value;

    let data = {
      userid,
      useremail,
      usergender,
      userdob,
      username,
      userpassword
    };

    xml.open("POST", "/user/register");
    xml.send(JSON.stringify(data));
  }
*/
