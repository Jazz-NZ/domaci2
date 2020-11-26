function konvertor() {
    
    
    var stringX = document.getElementById("evri").value;
    var stringY = document.getElementById("kurs").value;

    if(stringX===""||stringY===""){
        alert("Popunite sva polja")
    }
    else{

            var x = parseInt(stringX, 10);
            var y = parseInt(stringY, 10);
        
        if(isFinite(x)==true &&isFinite(y)==true){


            var res = x * y;
    
            document.getElementById("demo").innerHTML = res;

        }
        else{
            alert("Unesite samo brojeve")
        }
    
        
    }

    
    
    
    
     
    }