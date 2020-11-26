function myFunction() {
    
    
    var stringX = document.getElementById("evri").value;
    var stringY = document.getElementById("kurs").value;
    
    var x = parseInt(stringX, 10);
    var y = parseInt(stringY, 10);
    
    
     var res = x * y;
    
    
    
     document.getElementById("demo").innerHTML = res;
     
    }