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
    { ad: "ATP'nin Harcandığı Olaylar", resim: "./görseller/kabes.png" },
    { ad: "Hücre Çeperi Bulunduran Canlılar", resim: "./görseller/babam.png" },
    // Diğer formüller ve resimler
];

var secilenFormul = null;

// Renk temaları
const colorThemes = {
    default: {
        gradient: 'linear-gradient(90deg, #1a2a6c, #b21f1f, #fdbb2d)'
    },
    fizik: {
        gradient: 'linear-gradient(90deg, #1a2a6c, #2196F3, #4fc3f7)'
    },
    kimya: {
        gradient: 'linear-gradient(90deg, #b21f1f, #FF9800, #ffeb3b)'
    },
    biyoloji: {
        gradient: 'linear-gradient(90deg, #1b5e20, #4CAF50, #8bc34a)'
    }
};

// Tema değiştirme fonksiyonu
function changeTheme(theme) {
    // Navbar ve footer gradyanını değiştir
    document.querySelector('.navbar').style.background = colorThemes[theme].gradient;
    document.querySelector('.lower').style.background = colorThemes[theme].gradient;
    
    // Animasyon efekti
    const container = document.querySelector('.container');
    container.classList.add('theme-transition');
    setTimeout(() => {
        container.classList.remove('theme-transition');
    }, 1000);
}

// Butonlara olay dinleyicileri ekle
var btnFizik = document.getElementById("fizik-buton");
btnFizik.onclick = function() {
    // Önceki aktif butonları temizle
    document.querySelectorAll('.button-container button').forEach(btn => {
        btn.classList.remove('active');
    });
    // Bu butonu aktif yap
    this.classList.add('active');
    changeTheme('fizik');
    formulleriGoster(fizikFormuller);
};

var btnKimya = document.getElementById("kimya-buton");
btnKimya.onclick = function() {
    // Önceki aktif butonları temizle
    document.querySelectorAll('.button-container button').forEach(btn => {
        btn.classList.remove('active');
    });
    // Bu butonu aktif yap
    this.classList.add('active');
    changeTheme('kimya');
    formulleriGoster(kimyaFormuller);
};

var btnBiyoloji = document.getElementById("biyoloji-buton");
btnBiyoloji.onclick = function() {
    // Önceki aktif butonları temizle
    document.querySelectorAll('.button-container button').forEach(btn => {
        btn.classList.remove('active');
    });
    // Bu butonu aktif yap
    this.classList.add('active');
    changeTheme('biyoloji');
    formulleriGoster(biyolojiFormuller);
};

// Fenmatik logosuna tıklayınca varsayılan temaya dön
document.getElementById('baslikyazi').addEventListener('click', function(e) {
    e.preventDefault();
    // Tüm aktif butonları temizle
    document.querySelectorAll('.button-container button').forEach(btn => {
        btn.classList.remove('active');
    });
    changeTheme('default');
    formulleriGoster(fizikFormuller); // Varsayılan olarak fizik formüllerini göster
});

// Buton tıklama efekti
const allButtons = document.querySelectorAll('button');
allButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 200);
    });
});

function formulleriGoster(formulListesi) {
    let formullerHTML = "";
    
    // Hangi ders seçildiğini belirle
    let buttonClass = "btn-biyoloji";
    if (formulListesi === fizikFormuller) {
        buttonClass = "btn-fizik";
    } else if (formulListesi === kimyaFormuller) {
        buttonClass = "btn-kimya";
    }
    
    formulListesi.forEach((formul, index) => {
        formullerHTML += `<button id="btn-${index + 1}" class="${buttonClass}">${formul.ad}</button>`;
    });
    document.querySelector(".buttons").innerHTML = formullerHTML;

    document.querySelector(".buttons").addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") {
            // Önceki aktif butonu temizle
            const activeButtons = document.querySelectorAll('.buttons button.active');
            activeButtons.forEach(btn => btn.classList.remove('active'));
            
            // Tıklanan butonu aktif yap
            event.target.classList.add('active');
            
            let btnIndex = parseInt(event.target.id.replace("btn-", ""));
            secilenFormul = formulListesi[btnIndex - 1];
            
            // Görsel yükleme animasyonu
            const resultDiv = document.getElementById("result");
            resultDiv.classList.add('loading');
            
            setTimeout(() => {
                resultDiv.innerHTML = `<img width="100%" height="100%" src='${secilenFormul.resim}'>`;
                resultDiv.classList.remove('loading');
            }, 300);
        }
    });
}

// Görsel büyütme fonksiyonu
function setupImageZoom() {
    // Modal ve ilgili elemanları seç
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.getElementsByClassName('close-modal')[0];
    
    // Sonuç alanındaki görsele tıklandığında
    document.addEventListener('click', function(e) {
        if (e.target && e.target.tagName === 'IMG' && e.target.closest('.result')) {
            modal.style.display = "block";
            modalImg.src = e.target.src;
            
            // Kaydırma çubuğunu gizle
            document.body.style.overflow = "hidden";
        }
    });
    
    // Kapatma butonuna tıklandığında
    closeBtn.onclick = function() {
        modal.style.display = "none";
        
        // Kaydırma çubuğunu geri getir
        document.body.style.overflow = "auto";
    }
    
    // Modal dışına tıklandığında
    modal.onclick = function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
    
    // ESC tuşuna basıldığında modalı kapat
    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape" && modal.style.display === "block") {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
}

// Sayfa yüklendiğinde varsayılan temayı ayarla
document.addEventListener('DOMContentLoaded', function() {
    changeTheme('default');
    formulleriGoster(fizikFormuller);
    
    // Görsel büyütme özelliğini etkinleştir
    setupImageZoom();
});
