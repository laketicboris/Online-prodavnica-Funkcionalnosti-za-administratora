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
    tabela.innerHTML=""

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
        tr.addEventListener("click", function() {prikazDetaljaArtikla(artikli[i])})
    }
}
function prikazDetaljaArtikla(artikal){
    let detalji = document.querySelector("#artiklDetalji")
    detalji.innerHTML = ""

    let p = document.createElement("p")
    p.innerHTML= "Naziv: " + artikal.naziv + "<br>" + "Cena: "+artikal.cena +"RSD<br>"+ "Opis: " + artikal.opis

    detalji.appendChild(p)
}
function dodavanjeArtikla() {
    let dugmeDodaj = document.querySelector("#dodajArtiklBtn");

    dugmeDodaj.addEventListener('click', function () {
        const forma = document.querySelector('#artikl-forma');
        const formPodaci = new FormData(forma);

        const naziv = formPodaci.get('naziv');
        const cena = formPodaci.get('cena');
        const opis = formPodaci.get('opis');

        const noviArtikal = new Artikal(naziv, cena, opis);
        artikli.push(noviArtikal);

        sacuvajArtikleULocalStrage()
        kreirajRedoveArtikala();
        forma.reset();
    });
}
function ucitajArtikleiZlocalStorage(){
    const sacuvaniArtikli = localStorage.getItem("artikli")
    if(sacuvaniArtikli){
        const niz = JSON.parse(sacuvaniArtikli)
        artikli = niz.map(a => new Artikal(a.naziv, a.cena, a.opis))
    }
}
function sacuvajArtikleULocalStrage(){
    localStorage.setItem("artikli", JSON.stringify(artikli))
}

function inicijalizujArtikle() {
    ucitajArtikleiZlocalStorage()
    kreirajRedoveArtikala()
}

document.addEventListener('DOMContentLoaded', function(){
    inicijalizujArtikle()
    dodavanjeArtikla()
});
