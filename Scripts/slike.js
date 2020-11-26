$(document).ready(function(){
    let brojac=0;
$("img").click(function(){
    
    if(brojac%2==0)
    {
$(this).css({"height" : "300px","width" : "400px"});
}
else{
$(this).css({"height": "150px","width":"200px"});
}
brojac++;
});
});