function upozorenje() {
    
    
    var stringX = document.getElementById("kratki_unos_ime").value;
    var stringY = document.getElementById("kratki_unos_naslov").value;
    var stringZ = document.getElementById("kratki_unos_email").value;
    var stringP = document.getElementById("duza_poruka").value;
    if(stringX==="" || stringY==="" || stringZ=="" || stringP==""){
        alert("Popunite sva obavezna polja");
    }
// Uzimanje vrednosti iz svakog obaveznog polja za unos i provera da li je unos prazno polje.Ako je uneseno prazno polje izbacuje se alert.
  
}

function noviProzor(link){

    window.open(link);
// otvaranje linka u novom prozoru na poziv funkcije
}
