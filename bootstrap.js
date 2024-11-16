// Funktion som tar input från formuläret och lägger till i tabellen
function addRow(event) {
    event.preventDefault(); // Förhindrar att sidan uppdateras

    // Hämtar värden från formuläret
    const name = document.getElementById("name").value.trim();
    const work = document.getElementById("work").value.trim();
    const catSelect = document.getElementById("cat");
    const cat = catSelect.value === "1" ? "Ja" : "Nej";
    const hasLicense = document.getElementById("check").checked ? "Ja" : "Nej";

    // Validerar att alla fält är ifyllda
    if (!name || !work || catSelect.value === "") {
        alert("Vänligen fyll i alla fält.");
        return;
    } 

    // Hittar tabellen och skapar en ny rad
    const table = document.querySelector(".table tbody");
    const row = document.createElement("tr");

    // Skapar celler för varje värde och lägger till i raden
    row.innerHTML = `
        <th scope="row">${table.rows.length + 1}</th>
        <td>${name}</td>
        <td>${work}</td>
        <td>${cat}</td>
        <td>${hasLicense}</td>
    `;

    // Lägger till den nya raden i tabellen
    table.appendChild(row);

    // Tömmer formuläret
    document.getElementById("userForm").reset();
}
