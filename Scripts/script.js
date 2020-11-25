
//racunanje kursa
// promeniti ime funkcije i ulepsati prikaz rezultata
// povezati script sa htmlom
// ishendlovati unose slova, znakova i prazna polja   

function myFunction() {

    alert("RADI")
    var stringX = document.getElementById("evri").value;
    var stringY = document.getElementById("kurs").value;

    var x = parseInt(stringX, 10);
    var y = parseInt(stringY, 10);
    
    alert(x + y);

    // var x = y * z;
    // document.getElementById("demo").innerHTML = x;
  }