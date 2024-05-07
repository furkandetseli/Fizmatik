
const fizikFormuller = [
    { ad: "Fiziğin Alt Dalları", resim: "./görseller/kamyonet.jpg" },
    { ad: "Temel Büyüklükler", resim: "./görseller/kısamuz.jpg" },
    { ad: "Yoğunluk", resim: "./görseller/yoğunluk.jpg" },
    { ad: "Kinetik Enerji", resim: "./görseller/kinetik.jpg" },
    { ad: "Çekim Potansiyel Enerjisi", resim: "./görseller/morguvercin.jpg" },
    { ad: "Sıvılarda Basınç", resim: "./görseller/sivibasinc.jpg" },
    { ad: "Kapalı Kaplardaki Basınç", resim: "./görseller/pvnrt.jpg" },
    { ad: "Sürtünme Kuvveti", resim: "./görseller/kene.jpg" },
    { ad: "Atışlar, Serbest Düşme, Sürtünmeli Durum", resim: "./görseller/kosova.jpg" },
    { ad: "İvme", resim: "./görseller/ivme.jpg" },
    // Diğer formüller ve resimler
];
const kimyaFormuller = [
    { ad: "İdeal Gaz Yasası", resim: "./görseller/gaz.jpg" },
    { ad: "1A Grubu Elementleri", resim: "./görseller/1a.jpg" },
    { ad: "2A Grubu Elementleri", resim: "./görseller/2a.jpg" },
    { ad: "6A Grubu Elementleri:", resim: "./görseller/a6.jpg" },
    { ad: "Periyodik Cetvelde Değişen Özelliklerin Artış Yönleri", resim: "./görseller/acemi.jpg" },
    { ad: "Sıvılarda Basınç", resim: "./görseller/sivibasinc.jpg" },
    // Diğer formüller ve resimler
];

const biyolojiFormuller = [
    { ad: "Eşeysiz Üreme Şekilleri", resim: "./görseller/kamyonet.jpg" },
    { ad: "Disakkaritler", resim: "./görseller/kısamuz.jpg" },
    { ad: "Fotosentezde Devirli Fosforilasyon", resim: "./görseller/yoğunluk.jpg" },
    { ad: "Canlıların Sınıflandırılması", resim: "./görseller/kinetik.jpg" },
    { ad: "Bölünme Gerçekleştirmeyen Hücreler", resim: "./görseller/morguvercin.jpg" },
    { ad: "Hücre Bölünme Sırası", resim: "./görseller/sivibasinc.jpg" },
    { ad: "ATP’nin Harcandığı Olaylar", resim: "./görseller/kabes.png" },
    { ad: "Hücre Çeperi Bulunduran Canlılar", resim: "./görseller/kene.jpg" },
    // Diğer formüller ve resimler
];

var secilenFormul = null;

var btnFizik = document.getElementById("fizik-buton");
btnFizik.onclick = function() {
    if (secilenFormul !== null && fizikFormuller.includes(secilenFormul)) {
        formulleriGoster(fizikFormuller);
    }
};

var btnKimya = document.getElementById("kimya-buton");
btnKimya.onclick = function() {
    if (secilenFormul !== null && kimyaFormuller.includes(secilenFormul)) {
        formulleriGoster(kimyaFormuller);
    }
};

var btnBiyoloji = document.getElementById("biyoloji-buton");
btnBiyoloji.onclick = function() {
    formulleriGoster(biyolojiFormuller);
};


function formulleriGoster(formulListesi) {
    let formullerHTML = "";
    formulListesi.forEach((formul, index) => {
        formullerHTML += `<button id="btn-${index + 1}" class="btn-${index + 1}">${formul.ad}</button>`;
    });
    document.querySelector(".buttons").innerHTML = formullerHTML;

    document.querySelector(".buttons").addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") {
            let btnIndex = parseInt(event.target.id.replace("btn-", ""));
            secilenFormul = formulListesi[btnIndex - 1]; // Doğru kullanım
            document.getElementById("result").innerHTML = `<img width="90%" height="60%" src='${secilenFormul.resim}'>`;
        }
    });
}

var btnFizik = document.getElementById("fizik-buton");
btnFizik.onclick = function() {
    formulleriGoster(fizikFormuller);
};

var btnKimya = document.getElementById("kimya-buton");
btnKimya.onclick = function() {
    formulleriGoster(kimyaFormuller);
};

var btnBiyoloji = document.getElementById("biyoloji-buton");
btnBiyoloji.onclick = function() {
    formulleriGoster(biyolojiFormuller);
};

function formulleriGoster(formulListesi) {
    let formullerHTML = "";
    formulListesi.forEach((formul, index) => {
        formullerHTML += `<button id="btn-${index + 1}" class="btn-${index + 1}">${formul.ad}</button>`;
    });
    document.querySelector(".buttons").innerHTML = formullerHTML;

    document.querySelector(".buttons").addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") {
            let btnIndex = parseInt(event.target.id.replace("btn-", ""));
            secilenFormul = formulListesi[btnIndex - 1];
            document.getElementById("result").innerHTML = `<img width="90%" height="60%" src='${secilenFormul.resim}'>`;
        }
    });
}
