// Navbar rengini değiştirmek için fonksiyon
function changeColor(color) {
    document.querySelector('.navbar').style.backgroundColor = color;
}

// Görselleri göstermek için fonksiyonlar
function Yazdir(){
    document.getElementById("result").innerHTML=`<img width="90%" height="60%"  src='./görseller/bavul.jpg'>`;
}
// Diğer Yazdir fonksiyonları...

// Butonlara tıklama olaylarını atama
var btnYaz1=document.getElementById("btn-1");
btnYaz1.onclick=Yazdir;
// Diğer buton olay atamaları...

