let yourbirthmonth = "";
function generate() {
    let message = document.getElementById("yourMessage");
    if (document.getElementById("month").value == "January") {
        message.innerText = "Lil";
    }
    if (document.getElementById("month").value == "Feburary") {
        message.innerText = "Baby";
    }
    if (document.getElementById("month").value == "March") {
        message.innerText = "Sexy";
    }
    if (document.getElementById("month").value == "April") {
        message.innerText = "Big";
    }
    if (document.getElementById("month").value == "May") {
        message.innerText = "Crazy";
    }

    if (document.getElementById("month").value == "June") {
        message.innerText = "Swaggy";
    }
    if (document.getElementById("month").value == "July") {
        message.innerText = "Young";
    }
    if (document.getElementById("month").value == "August") {
        message.innerText = "Tuff";
    }
    if (document.getElementById("month").value == "September") {
        message.innerText = "Money";
    }
    if (document.getElementById("month").value == "October") {
        message.innerText = "Ragz";
    }
    if (document.getElementById("month").value == "November") {
        message.innerText = "Kidd";
    }
    if (document.getElementById("month").value == "December") {
        message.innerText = "Supreme";
    }

    let age = 17;
    if (age <= 17) {
        message.innerText += " a ";
    } else if (age >= 17) {
        message.innerText += " the ";
    }
    if (document.getElementById("icecream").value == "Vanilla") {
        message.innerText += "Drippy";
    }
    if (document.getElementById("icecream").value == "Chocolate") {
        message.innerText += "Twista";
    }
    if (document.getElementById("icecream").value == "Strawberry") {
        message.innerText += "Fierce";
    }
    if (document.getElementById("icecream").value == "Cookies and Cream") {
        message.innerText += "Legend";
    }
    if (document.getElementById("icecream").value == "Cookie Dough") {
        message.innerText += "Boss";
    }

    if (document.getElementById("icecream").value == "Mint Chocolate Chip") {
        message.innerText += "Balla";
    }
    if (document.getElementById("icecream").value == "Mango") {
        message.innerText += "Playa";
    }
    if (document.getElementById("icecream").value == "Black Walnut") {
        message.innerText += "Rhymes";
    }
    if (document.getElementById("icecream").value == "Butter Pecan") {
        message.innerText += "Shawty";
    }
    if (document.getElementById("icecream").value == "Pistachio") {
        message.innerText += "Fresh";
    }
    if (document.getElementById("icecream").value == "Rocky Road") {
        message.innerText += "Slick";
    }
    if (document.getElementById("icecream").value == "Coffee") {
        message.innerText += "Easy";
    }
    if (document.getElementById("icecream").value == "Birthday Cake") {
        message.innerText += "Poppa";
    }
}
