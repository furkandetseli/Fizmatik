
const fizikFormuller = [
    { ad: "Fiziğin Alt Dalları", resim: "./görseller/kamyonet.png" },
    { ad: "Temel Büyüklükler", resim: "./görseller/kısamuz.png" },
    { ad: "Yoğunluk", resim: "./görseller/dedemuzver.jpeg" },
    { ad: "Kinetik Enerji", resim: "./görseller/mavikare.png" },
    { ad: "Çekim Potansiyel Enerjisi", resim: "./görseller/morgüvercin.png" },
    { ad: "Sıvılarda Basınç", resim: "./görseller/hadigari.png" },
    { ad: "Kapalı Kaplardaki Basınç", resim: "./görseller/paraver.png" },
    { ad: "Sürtünme Kuvveti", resim: "./görseller/kene.png" },
    { ad: "Atışlar, Serbest Düşme, Sürtünmeli Durum", resim: "./görseller/kosova.png" },
    { ad: "İvme", resim: "./görseller/damat.png" },
    // Diğer formüller ve resimler
];
const kimyaFormuller = [
    { ad: "İdeal Gaz Yasası", resim: "./görseller/paraver.png" },
    { ad: "1A Grubu Elementleri", resim: "./görseller/1a.png" },
    { ad: "2A Grubu Elementleri", resim: "./görseller/2a.png" },
    { ad: "6A Grubu Elementleri:", resim: "./görseller/a6.png" },
    { ad: "Periyodik Cetvelde Değişen Özelliklerin Artış Yönleri", resim: "./görseller/acemi.png" },
    // Diğer formüller ve resimler
];

const biyolojiFormuller = [
    { ad: "Eşeysiz Üreme Şekilleri", resim: "./görseller/1.png" },
    { ad: "Disakkaritler", resim: "./görseller/2.png" },
    { ad: "Fotosentezde Devirli Fosforilasyon", resim: "./görseller/3.png" },
    { ad: "Canlıların Sınıflandırılması", resim: "./görseller/4.png" },
    { ad: "Bölünme Gerçekleştirmeyen Hücreler", resim: "./görseller/5.png" },
    { ad: "Hücre Bölünme Sırası", resim: "./görseller/6.png" },
    { ad: "ATP’nin Harcandığı Olaylar", resim: "./görseller/kabes.png" },
    { ad: "Hücre Çeperi Bulunduran Canlılar", resim: "./görseller/7.png" },
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
            document.getElementById("result").innerHTML = `<img width="90%" height="90%" src='${secilenFormul.resim}'>`;
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
            document.getElementById("result").innerHTML = `<img width="90%" height="90%" src='${secilenFormul.resim}'>`;
        }
    });
}
