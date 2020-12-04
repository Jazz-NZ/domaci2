
//konvertor evra u dinare
function konvertor() {
    
    
    var stringX = document.getElementById("evri").value;
    var stringY = document.getElementById("kurs").value;
    
    //proverava da li su polja prazana tj. stringovi
    if(stringX===""||stringY===""){
        alert("Popunite sva polja")
    }
    else{

        //regular expresion proverava da li se nalaze brojevi u promenljivoj
        var isXnum = /^\d+$/.test(stringX);
        var isYnum = /^\d+$/.test(stringY);
        
         

            
        //provera da li je string broj
        if(isXnum==true && isYnum==true){


            var x = parseInt(stringX, 10);
            var y = parseInt(stringY, 10);
            //proverava da li su celobrojne vrednosti pozitivne
            if(x>0 && y>0){
                var res = x * y;
                //ispisuje konvertovanu vrednost u dinarima
                document.getElementById("demo").innerHTML = res;

            }
            else{
                alert("Uneti brojevi moraju biti veci od 0")
            }
           

        }
        else{
            alert("Unesite samo brojeve")
        }
    
        
    }

    //proverava da li je string broj
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }
      
 
 }
 $(document).ready(function(){
     $(".btn1").click(function(){
        $("#konverzija").hide();
     });
     $(".btn2").click(function(){
        $("#konverzija").show();
     });

 });
