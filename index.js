class Artikal {
    constructor(naziv, cena, opis) {
        this.naziv = naziv;
        this.cena = cena;
        this.opis = opis;
    }
}

let artikli = [];

function kreirajRedoveArtikala() {
    let tabela = document.querySelector("#artikli-body");

    for (let i = 0; i < artikli.length; i++) {
        let tr = document.createElement("tr");

        let rb = document.createElement("td");
        let naziv = document.createElement("td");
        let cena = document.createElement("td");

        rb.textContent = i + 1;
        naziv.textContent = artikli[i].naziv;
        cena.textContent = artikli[i].cena + " RSD";

        tr.appendChild(rb);
        tr.appendChild(naziv);
        tr.appendChild(cena);

        tabela.appendChild(tr);
    }
}

function inicijalizujArtikle() {
    artikli = [
        new Artikal("Bluetooth zvucnik", 2999, "Prenosivi Bluetooth zvucnik."),
        new Artikal("USB C kabl", 899, "Kabl za punjenje i prenos podataka, duzina 1m."),
        new Artikal("Mehanicka tastaturaa", 7999, "Imacete osecaj kao da kucate na pisacoj masini.")
    ];

    kreirajRedoveArtikala();
}

document.addEventListener('DOMContentLoaded', inicijalizujArtikle);
