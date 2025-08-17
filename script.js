const myBtn = document.getElementById("myBtn");
const backgroundBtn = document.getElementById("backgroundBtn");
const petMenu = document.getElementById("petMenu");


function changeBackground() {
    if (myBtn.textContent === "Light Mode🌞") {
        document.body.style.backgroundColor = "hsl(29, 100%, 32%)";
        myBtn.textContent = "Dark Mode🌚";
    }
    else {
        document.body.style.backgroundColor = "hsl(0, 0.00%, 0.00%)";
        myBtn.textContent = "Light Mode🌞";
    }
}

function changeBackgroundIcon() {
    if (backgroundBtn.textContent === "🌞") {
        document.body.style.backgroundColor = "hsl(29, 100%, 32%)";
        backgroundBtn.textContent = "🌚";
    }
    else {
        document.body.style.backgroundColor = "hsl(0, 0.00%, 0.00%)";
        backgroundBtn.textContent = "🌞";
    }
}



function validateForm() {
    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const pet = document.getElementById("pet").value;
    const reason = document.getElementById("reason").value.trim();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("petError").textContent = "";
    document.getElementById("reasonError").textContent = "";

    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        isValid = false;
    }

    if (pet === "") {
        document.getElementById("petError").textContent = "Please select a pet.";
        isValid = false;
    }

    if (reason.length < 10) {
        document.getElementById("reasonError").textContent = "Please explain your reason (at least 10 characters.)";
        isValid = false;
    }

    if (isValid) {
        alert("🎉 Your form has been submitted successfully!");
        document.getElementById("adoptionForm").reset();
    }
    else {
        alert("⚠ Please fill out the form to adopt a pet.");
    }

    return false;
}

fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
        let output = "";
        data.message.forEach(img => {
            output += '<img src ="${img}" alt="Pet" width="200" style="border-radius:10px">';
        });

        document.getElementById("apiData").innerHTML = output;
    })

    .catch (error => {document.getElementById("apiData").innerHTML = "<p>🐾Unable to load extra pets.</p>"});
