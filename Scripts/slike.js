$(document).ready(function(){
    let brojac=0;
$("img").click(function(){
    
    if(brojac%3==0)
    {
$(this).css({"height" : "300px","width" : "400px"});
}
else if(brojac%3==2){
$(this).css({"height": "150px","width":"200px"});
}
else{
    $(this).css({"height": "450px","width":"600px"});
}
brojac++;
});
});