document.getElementById("vacation-form").onsubmit = () => {

    let isValid = true;
    //clear all errors
    clearErrors();

    let travelerNumber = document.getElementById("traveler-number").value;
    if(travelerNumber <= 0) {
        document.getElementById("error-traveler").style.display = "block";
        isValid = false;
        console.log("hi");
    }

    let destination = document.getElementById("destination").value;
if(destination === "none") {
    document.getElementById("error-destination").style.display = "block"; 
    isValid = false;  
}

    //do not submit the form if the data is in-valid
    return isValid
};

function clearErrors() {
    let errors = document.getElementsByClassName("error");
    for(let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}
