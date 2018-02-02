var numDisp = document.getElementById("numDisplay");
var myInput = document.getElementById("num");
var answer = Math.round(Math.random()*100);
var score = 100;



document.getElementById("guess").addEventListener("click",function(){
   //console.log(myInp.value);
    //numDis.innerText = "Hi";
    
    var myNum = parseInt(myInput.value);
    
    if(myNum == answer) {
        numDisp.innerText = "You win: "+score;
    } else {
        if(myNum < answer){
            numDisp.innerText = "too small";
        } else if (myNum > answer){
            numDisp.innerText = "Too big";
        }
        score = score - 1;
    }
    
    
});