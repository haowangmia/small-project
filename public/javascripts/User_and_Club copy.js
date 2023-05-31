
// Set for hidden pages: click on the button "moreinfo"
// so that the effect of this page is scratched out
var slide_page = document.getElementById("slide_page");
// eslint-disable-next-line no-unused-vars
var more_button = document.getElementsByClassName("moreinfo").value;
// eslint-disable-next-line no-unused-vars
function slide() { // Make the hidden page appear when the button is clicked
    slide_page.style.left = "0";
}



// eslint-disable-next-line no-unused-vars
function close_slide() { // when the button is not clicked
                         // Hides the page on the left side of the main page
                         // when the button is not clicked
    slide_page.style.left = "-80%";
}

// Get every element of the personal information section
var edit_btn = document.getElementById("edit_personinfo");
var the_name = document.getElementById("username");
var gen = document.getElementById("gender");
var birth = document.getElementById("dob");
var des = document.getElementById("description");

// eslint-disable-next-line no-unused-vars
function change_btn() {
    if (edit_btn.innerText === "Edit") { // Set the innertext for the "edit" button: when this button is "edit", clicking it will change the button to "done" and the personal information will become editable.
        edit_btn.innerText = "Done";
    } else { // When this button is "done", clicking it will change the button's innertext to "edit"
        edit_btn.innerText = "Edit";
    }
}

// eslint-disable-next-line no-unused-vars
function edit_info() {
    if (edit_btn.innerText === "Done") { // When the innertext of the button is "Done", the personal information above will become editable.
        the_name.contentEditable = true;
        gen.contentEditable = true;
        birth.contentEditable = true;
        des.contentEditable = true;
    } else { // When the innertext of the button is "Edit",
             // the personal information above will become uneditable.
        the_name.contentEditable = false;
        gen.contentEditable = false;
        birth.contentEditable = false;
        des.contentEditable = false;
    }
}

function letsqlthingshowonhtml(){
    let xml=new XMLHttpRequest();
    xml.onreadystatechange=function() {
    if(xml.readyState === 4 && xml.status === 200){
        let response=JSON.parse(xml.response);
        let testdiv = document.createElement("div");
        testdiv.innerHTML="";
        for(var i = 0; i<response.length; i++){
            let row =document.createElement("tr");
            let id = document.createElement("td");
            let name = document.createElement("td");
            id.innerText = response[i].user_id;
            name.innerText = response[i].user_name;
            row.appendChild(id);
            row.appendChild(name);
            testdiv.appendChild(row);
        }
    }
   }

xml.open("POST", "/test");
xml.send();
}





