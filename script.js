var div=1,i=0,speed=200;
var text,text1="welcome to HTML image world";
var visible=true;
function typeWriter(){
    // console.log(text1,i);
    if(i < text1.length && div == 1){
        document.getElementById("word").innerHTML += text1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        if(i==text1.length-1){
            setInterval(typed_cursor,500);
        }
    }
}
function typed_cursor(){
    if(visible==true){
        document.getElementById("typed-cursor").style.opacity=0;
        visible=false;
    }
    else{
        document.getElementById("typed-cursor").style.opacity=1;
        visible=true;
    }
}
