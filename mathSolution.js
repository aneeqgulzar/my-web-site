function checkpalendrome(inputstring){
 
    let inputsecond=inputstring.toLowerCase();
    var reversestringarray=[];

    for(var j=inputsecond.length-1;j>=0;j--){
       reversestringarray.push(inputsecond[j]);
    }

    var reversestring="";
    for(var k=0;k<reversestringarray.length;k++){
        reversestring+=reversestringarray[k];
    }


    if(reversestring===inputsecond){
        document.getElementById('result').innerHTML="<h1>THIS IS A PALENDROME</h1>";
    }
    else{
        document.getElementById('result').innerHTML="<h1>THIS IS NOT A PALENDROME</h1>";

    
}
}