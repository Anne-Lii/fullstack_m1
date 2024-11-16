
document.addEventListener('DOMContentLoaded', function () {

    //Hämtar formuläret och tabellen
    const form = document.querySelector("#userFormBulma");
    const submitBtn = document.querySelector("#userFormBulma .button.is-link");
    const tableBody = document.querySelector("#userTableBulma tbody");

    //eventhändelse vid klick på skicka knappen
    submitBtn.addEventListener("click", function (event) {
        event.preventDefault(); //förhindrar att sidan laddas om 

        //Hämtar input från formuläret
        const name = document.querySelector("#userFormBulma .input").value.trim();
        const position = document.querySelector("#position").value.trim();
        const hasCat = document.querySelector("#userFormBulma select").value;
        const hasLicense = document.querySelector("#license").checked ? "Ja" : "Nej";

        //Kontrollerar att namn och yrke fyllts i
        if (!name || !position) {
            alert("Vänligen fyll i både namn och yrke!");
            return;
        }

        //Skapar en ny rad i tabellen
        const newRow = document.createElement("tr");
        const rowNum = tableBody.rows.length + 1; //Räknar ut radnummer till nya raden

        //Lägger till celler till nya raden
        newRow.innerHTML = `
        <td>${rowNum}</td>
        <td>${name}</td>
        <td>${position}</td>
        <td>${hasCat}</td>
        <td>${hasLicense}</td>
        `;

        //Lägger till raden till tabellen
        tableBody.appendChild(newRow);

        //Nollställer formulärets fält
        document.querySelector("#userFormBulma .input").value = "";
        document.querySelector("#position").value = "";
        document.querySelector("#userFormBulma select").value = "Ja";
        document.querySelector("#license").checked = false;
    });

    //Visa/dölja burgermenyn
    // Hämtar alla element med klassen "navbar-burger"
    const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Kontrollerar om det finns några "navbar-burger"-element
    if (navbarBurgers.length > 0) {

        // Lägger till klickhändelse för varje "navbar-burger"
        navbarBurgers.forEach(burger => {
            burger.addEventListener('click', () => {

                // Hämtar mål från "data-target"
                const target = burger.dataset.target;
                const menu = document.getElementById(target);

                // Lägger till eller tar bort "is-active" på både burger och meny
                burger.classList.toggle('is-active');
                menu.classList.toggle('is-active');
            });
        });
    }
});
