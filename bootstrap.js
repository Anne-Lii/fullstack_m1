new DataTable('#infotable');

document.getElementById("userForm").addEventListener("submit", function(event){
event.preventDefault(); //Förhindrar sidladdning

//Hämtar input från formulär
const name = document.getElementById("name").value;
const work = document.getElementById("work").value;
const cat = document.getElementById("cat").value;
const license = document.getElementById("check").checked ? "Ja" : "Nej";

//lägger till ny rad till tabellen
const table = document.getElementById("infotable").getElementsByTagName("tbody")[0];
const newRow = table.insertRow();
newRow.innerHTML = `<td>${name}</td><td>${work}</td><td>${cat}</td><td>${license}</td>`;

//rensar formuläret
document.getElementById("userForm").reset;
});