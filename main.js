const name = document.getElementById("vorname");
const lastname = document.getElementById("nachname");
const mail = document.getElementById("email");
const phone = document.getElementById("telefonnummer");
const termsAndConditions = document.getElementById("termsAndConditions");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form_input");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let condition = validationForm();
        if(condition == true) {
            sendForm();
        }
    

});

function validationForm(){
    let condition = true;
    listInputs.forEach(element => {
        element.lastElementChild.innerHTML = "";
    });

        if (name.value.length < 1 || name.value.trim() == "") {
            showErrorMessage("vorname", "Bitte gib dein Vorname ein");
            condition = false;  
        }
        if (lastname.value.length < 1 || lastname.value.trim() == "") {
            showErrorMessage("nachname", "Bitte gib dein Nachname ein");
            condition = false;
        }
        if (mail.value.length < 1 || mail.value.trim() == "") {
            showErrorMessage("email", "Bitte gib deine E-Mail ein");
            condition = false;
        }
        if (phone.value.length < 1 || phone.value.trim() == "" || isNaN(phone.value)) {
            showErrorMessage("telefonnummer", "Bitte gib deine Telefonnummer ein");
            condition = false;
        }
        if (!termsAndConditions.checked) {
            showErrorMessage("termsAndConditions", "Du musst die Geschäftsbedingungen akzeptieren");
            condition = false;
        } else {
            showErrorMessage("termsAndConditions", "");
            
        }
        
    return condition;
}

function showErrorMessage(classInput,message){
    let element = document.querySelector(`.${classInput}`);
    element.lastElementChild.innerHTML = message;
}

function sendForm(){
    form.reset();
    form.lastElementChild.innerHTML = "gut gemacht, deine Bewerbung wurde erfolgreich zugestellt.";
}
// 