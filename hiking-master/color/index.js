var colors=genColors(6);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.querySelector("#colorDisplay"); 
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var isBoo=true;

reset.addEventListener("click",function(){
    if(isBoo){
    colors=genColors(6);
    }else{
        colors=genColors(3);
    }
    for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];
    }
    pickedColor=pickColor(); 
    colorDisplay.textContent=pickedColor;
    h1.style.backgroundColor="steelblue";
    messageDisplay.textContent="";
});

easy.addEventListener("click",function(){
   easy.classList.add("selected"); 
   hard.classList.remove("selected");
   colors=genColors(3);
   pickedColor=pickColor();
   for(var i=0;i<squares.length;i++){
       if(colors[i]){
    squares[i].style.backgroundColor=colors[i];
       }else{
    squares[i].style.display="none";       
       }
    colorDisplay.textContent=pickedColor;
    }
    h1.style.backgroundColor="steelblue";  
    messageDisplay.textContent="";
    isBoo=false;
});
hard.addEventListener("click",function(){
   easy.classList.remove("selected"); 
   hard.classList.add("selected");
   colors=genColors(6);
   pickedColor=pickColor();
   for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];
    squares[i].style.display="block";       
    colorDisplay.textContent=pickedColor;
    }
    h1.style.backgroundColor="steelblue";
    messageDisplay.textContent="";
    isBoo=true;
});

colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function(){
      var clickedColor=this.style.backgroundColor; 
    if(clickedColor === pickedColor){
        messageDisplay.textContent="Correct";
        changeColors(clickedColor);
        h1.style.backgroundColor=clickedColor;
        reset.textContent="Play Again?";
    }else{
        messageDisplay.textContent="Try Again";        
        this.style.backgroundColor="#232323";
    }
    });
}
function changeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
} 
function pickColor(){
    var random=Math.floor(Math.random() *colors.length);
    return colors[random];
}
function genColors(num){
    var arr=[];
    for(var i=0;i<num;i++){
        var r=Math.floor(Math.random() *256);
        var g=Math.floor(Math.random() *256);
        var b=Math.floor(Math.random() *256);
        arr.push("rgb("+r+", "+g+", "+b+")");
    }
    return arr;
}

















