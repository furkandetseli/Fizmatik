const fullscreenImage = document.querySelector('.fullscreen-image');

fullscreenImage.addEventListener('click', () => {
    fullscreenImage.style.transition = 'opacity 4s ease'; // Geçiş efekti süresi
    fullscreenImage.style.opacity = '1'; // Yavaşça görünmez yap
    fullscreenImage.style.display = 'none';
});

const fizikFormuller = [
    { ad: "Fiziğin Alt Dalları", resim: "./görseller/kamyonet.png" },
    { ad: "Temel Büyüklükler", resim: "./görseller/kısamuz.png" },
    { ad: "Yoğunluk", resim: "./görseller/dedemuzver.png" },
    { ad: "Kinetik Enerji", resim: "./görseller/mavikare.png" },
    { ad: "Çekim Potansiyel Enerjisi", resim: "./görseller/morgüvercin.png" },
    { ad: "Sıvılarda Basınç", resim: "./görseller/hadigari.png" },
    { ad: "Kapalı Kaplardaki Basınç", resim: "./görseller/paraver1.png" },
    { ad: "Sürtünme Kuvveti", resim: "./görseller/kene.png" },
    { ad: "Kapalı Kaplardaki Basınç", resim: "./görseller/paraver1.png" },
    { ad: "Hava Direnci Kuvveti", resim: "./görseller/kosova.png" },
    { ad: "Manyetik Tork", resim: "./görseller/abi.png" },
    { ad: "Sıcaklık Değişimi", resim: "./görseller/kelmacit.png" },
    { ad: "Hal Değişimi", resim: "./görseller/emel.png" },
    { ad: "Yüklü Parçacıkların Manyetik Alan İçindeki Hareketi", resim: "./görseller/zeynep.png" },
    // Diğer formüller ve resimler
];
const kimyaFormuller = [
    { ad: "İdeal Gaz Yasası", resim: "./görseller/paraver.png" },
    { ad: "1A Grubu Elementleri", resim: "./görseller/1a.png" },
    { ad: "2A Grubu Elementleri", resim: "./görseller/2a.png" },
    { ad: "6A Grubu Elementleri:", resim: "./görseller/a6.png" },
    { ad: "Periyodik Cetvelde Değişen Özelliklerin Artış Yönleri", resim: "./görseller/acemi.png" },
    { ad: "Amfoter Metaller", resim: "./görseller/a6.png" },
    // Diğer formüller ve resimler
];

const biyolojiFormuller = [
    { ad: "Eşeysiz Üreme Şekilleri", resim: "./görseller/bitiverse.png" },
    { ad: "Disakkaritler", resim: "./görseller/masal.png" },
    { ad: "Fotosentezde Devirli Fosforilasyon", resim: "./görseller/kafapası.png" },
    { ad: "Canlıların Sınıflandırılması", resim: "./görseller/türkiye.png" },
    { ad: "Bölünme Gerçekleştirmeyen Hücreler", resim: "./görseller/kars.png" },
    { ad: "Hücre Bölünme Sırası", resim: "./görseller/ipmat.png" },
    { ad: "ATP’nin Harcandığı Olaylar", resim: "./görseller/kabes.png" },
    { ad: "Hücre Çeperi Bulunduran Canlılar", resim: "./görseller/babam.png" },
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
        formullerHTML += `<button id="btn-${index + 1}" class="btn-biyoloji">${formul.ad}</button>`;
    });
    document.querySelector(".buttons").innerHTML = formullerHTML;

    document.querySelector(".buttons").addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") {
            let btnIndex = parseInt(event.target.id.replace("btn-", ""));
            secilenFormul = formulListesi[btnIndex - 1];
            secilenFormul = formulListesi[btnIndex - 1];
            document.getElementById("result").innerHTML = `<img width="100%" height="100%" src='${secilenFormul.resim}'>`;
        }
    });
}
