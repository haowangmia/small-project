function signInSuccess() { //when the user clicks on the sign in button, the website will check if the student ID and the password are right, if something is wrong, it will show the correspodning error message
    let ID1=document.getElementById("IDInput1").value;
    let password1=document.getElementById("passwordInput1").value;
    if (ID1=="12345" && password1=="67890") { //when the student ID and password are right, which means the user logs in successfully, the page will jump to the main page
        window.location.href="https://www.baidu.com/";
    }
    if (ID1!="12345" && ID1!="" && password1=="67890") { //when the student ID is wrong but password right, the message will tell the user the student ID is wrong
        document.getElementById("errorM1").innerText="Wrong student ID, please enter again!";
    }
    if (ID1=="12345" && password1!="67890" && password1!="") { //when the student ID is right but password is wrong, the message will tell the user the password is wrong
        document.getElementById("errorM1").innerText="Wrong password, please enter again!";
    }
    if (ID1=="" || password1=="") { //when the user doesn't input student ID or password, the message will tell the user to complete two input boxes
        document.getElementById("errorM1").innerText="Please completed the information above!";
    }
    if (ID1!="12345" && password1!="67890" && ID1!="" && password1!="") { //when both the student ID and password are wrong, the message will tell user both the student ID and password are wrong.
        document.getElementById("errorM1").innerText="Wrong student ID and password, please enter again!";
    }
}
