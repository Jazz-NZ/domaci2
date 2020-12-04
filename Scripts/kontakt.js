function upozorenje() {
    
    
    var stringX = document.getElementById("kratki_unos_ime").value;
    var stringY = document.getElementById("kratki_unos_naslov").value;
    var stringZ = document.getElementById("kratki_unos_email").value;
    var stringP = document.getElementById("duza_poruka").value;
    if(stringX==="" || stringY==="" || stringZ=="" || stringP==""){
        alert("Popunite sva obavezna polja");
    }

  
}

function noviProzor(link){

    window.open(link);

}
