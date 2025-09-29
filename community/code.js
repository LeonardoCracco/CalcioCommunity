async function caricaCSV(file) {
    const loader = document.getElementById("loader");
    loader.style.display = "block";  // mostra loader

    // Pulisce la tabella
    document.getElementById("intestazione").innerHTML = "";
    document.getElementById("contenuto").innerHTML = "";

    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error("Impossibile caricare il file: " + file);
        const testo = await response.text();

        const righe = testo.split("\n").map(r => r.trim()).filter(r => r.length > 0);

        // Intestazioni
        const intestazioni = righe[0].split(",");
        const headRow = document.getElementById("intestazione");
        intestazioni.forEach(col => {
            const th = document.createElement("th");
            th.textContent = col;
            headRow.appendChild(th);
        });

        // Dati
        const tbody = document.getElementById("contenuto");
        righe.slice(1).forEach(riga => {
            const valori = riga.split(",");
            const tr = document.createElement("tr");
            valori.forEach(val => {
                const td = document.createElement("td");
                td.textContent = val;
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
    } catch (error) {
        console.error(error);
        alert("Errore nel caricamento del CSV.");
    } finally {
        loader.style.display = "none";  // nasconde loader
    }
}

// Carica default Serie A
caricaCSV("seriea.csv");
