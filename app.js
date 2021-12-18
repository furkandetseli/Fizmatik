function Yazdir(){
    document.getElementById("result").innerHTML=`<img width="500" height="600" src='./görseller/cıvıkyumurta.jpeg'>`;
}
function Yazdir2(){
    document.getElementById("result").innerHTML=`<img width="500" height="600" src='./görseller/kelmacit.jpeg'>`;
}
function Yazdir3(){
    document.getElementById("result").innerHTML="3";
}
function Yazdir4(){
    document.getElementById("result").innerHTML=`<img width="500" height="600" src='./görseller/dedemuzver.jpeg'>`;
}
function Yazdir5(){
    document.getElementById("result").innerHTML=`<img width="500" height="600" src='./görseller/mordeve.jpeg'>`;
}
function Yazdir6(){
    document.getElementById("result").innerHTML="";
}

var btnYaz1=document.getElementById("btn-1");
btnYaz1.onclick=Yazdir;

var btnYaz2=document.getElementById("btn-2");
btnYaz2.onclick=Yazdir2;

var btnYaz3=document.getElementById("btn-3");
btnYaz3.onclick=Yazdir3;

var btnYaz4=document.getElementById("btn-4");
btnYaz4.onclick=Yazdir4;

var btnYaz5=document.getElementById("btn-5");
btnYaz5.onclick=Yazdir5;

var btnYaz6=document.getElementById("btn-6");
btnYaz6.onclick=Yazdir6;