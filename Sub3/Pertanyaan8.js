function tbsidebar(){
    document.getElementById("sidebar").classList.toggle('active');
    document.getElementById("judul").classList.toggle('full');
    document.getElementById("konten").classList.toggle('full');
    document.getElementById("navigasi").classList.toggle('full');
}

let klikme = document.querySelector('.kliksaya .tujuanP');
let atasnya = document.querySelector('.atasa');
klikme.addEventListener('click', function () {
    atasnya.classList.toggle('hilang');
});


var pilihan = document.querySelectorAll("#ul");
var tombol = document.querySelectorAll(".tombol");
var ulangkan = document.querySelectorAll(".ulang");
var lanjutkan = document.querySelector(".selanjutnya");
var kembalikan = document.querySelector(".sebelumnya");
var pembahasan = document.querySelectorAll(".pembahasan");

function benar(X){
    if(X == 1){
        document.getElementById("op3").className += " benar";
        pembahasan[2].className = pembahasan[2].className.replace(' hilang', '');
        for(let i=0;i<pilihan[0].children.length;i++){
            pilihan[0].children[i].style.pointerEvents="none";
        }
    }
    if(X == 2){
        document.getElementById("op6").className += " benar";
        pembahasan[4].className = pembahasan[4].className.replace(' hilang', '');
        for(let i=0;i<pilihan[1].children.length;i++){
            pilihan[1].children[i].style.pointerEvents="none";
        }
    }
}

function salah(X){
    if(X == 1){
        document.getElementById("op1").className += " salah";
        pembahasan[3].className = pembahasan[3].className.replace(' hilang', '');
        tombol[0].className = tombol[0].className.replace(' hilang', '');
        for(let i=0;i<pilihan[0].children.length;i++){
            pilihan[0].children[i].style.pointerEvents="none";
        }
    }
    if(X == 2){
        document.getElementById("op2").className += " salah";
        pembahasan[3].className = pembahasan[3].className.replace(' hilang', '');
        tombol[0].className = tombol[0].className.replace(' hilang', '');
        for(let i=0;i<pilihan[0].children.length;i++){
            pilihan[0].children[i].style.pointerEvents="none";
        }
    }
    if(X == 3){
        document.getElementById("op4").className += " salah";
        pembahasan[3].className = pembahasan[3].className.replace(' hilang', '');
        tombol[0].className = tombol[0].className.replace(' hilang', '');
        for(let i=0;i<pilihan[0].children.length;i++){
            pilihan[0].children[i].style.pointerEvents="none";
        }
    }
    if(X == 4){
        document.getElementById("op5").className += " salah";
        pembahasan[5].className = pembahasan[5].className.replace(' hilang', '');
        tombol[1].className = tombol[1].className.replace(' hilang', '');
        for(let i=0;i<pilihan[1].children.length;i++){
            pilihan[1].children[i].style.pointerEvents="none";
        }
    }
    if(X == 5){
        document.getElementById("op7").className += " salah";
        pembahasan[5].className = pembahasan[5].className.replace(' hilang', '');
        tombol[1].className = tombol[1].className.replace(' hilang', '');
        for(let i=0;i<pilihan[1].children.length;i++){
            pilihan[1].children[i].style.pointerEvents="none";
        }
    }
    if(X == 6){
        document.getElementById("op8").className += " salah";
        pembahasan[5].className = pembahasan[5].className.replace(' hilang', '');
        tombol[1].className = tombol[1].className.replace(' hilang', '');
        for(let i=0;i<pilihan[1].children.length;i++){
            pilihan[1].children[i].style.pointerEvents="none";
        }
    }
}

// Ulang soal
for (let i = 0; i < ulangkan.length; i++) {
    ulangkan[i].addEventListener('click', function () {
        if(tombol[i].className.indexOf('hilang') == -1){
            tombol[i].className += " hilang";
            for(let w = 0; w < pembahasan.length; w++){
                if(pembahasan[w].className.indexOf('hilang') == -1){
                    pembahasan[w].className += " hilang";
                }
            }
        }
        for(let i=0; i<2; i++){
            for(let j=0; j<pilihan[i].children.length; j++){
                pilihan[i].children[j].style.pointerEvents="auto";
                pilihan[i].children[j].className='op'+[i+1];
            }
        }
    });
}

var nilai1 = 0;
var nilai2 = 0;
function cekbox(X){
    if(X == 1){
        var a = document.getElementsByName('pilihan');
        var indexku = 0;
        var count;
        for(count = 0; count < a.length; count++){
            if(a[count].checked == true){
                indexku = indexku + 1;
                nilai1 = indexku;
            }
        }
        if(indexku > 2){
            nilai1 = 2;
            return false;
        }
    }else if(X == 2){
        var b = document.getElementsByName('pilihan1');
        var indexku = 0;
        var count;
        for(count = 0; count < b.length; count++){
            if(b[count].checked == true){
                indexku = indexku + 1;
                nilai2 = indexku;
            }
        }
        if(indexku > 2){
            nilai2 = 2;
            return false;
        }
    }
}

function cekjawab(X){
    if(X == 1){
        var a = document.getElementsByName('pilihan');

        if(nilai1 == 0){
            alert("Jawaban anda tidak boleh kosong!");
        }
        else if(a[1].checked && a[4].checked){
            pembahasan[0].className = pembahasan[0].className.replace(' hilang', '');
            if(pembahasan[1].className.indexOf('hilang') == -1){
                pembahasan[1].className += ' hilang';
            }
        }else{
            pembahasan[1].className = pembahasan[1].className.replace(' hilang', '');
            if(pembahasan[0].className.indexOf('hilang') == -1){
                pembahasan[0].className += ' hilang';
            }
            for(var w = 0; w < a.length; w++){
                a[w].checked = false;
            }
            return nilai1 = 0;
        }
    }else if(X == 2){
        var b = document.getElementsByName('pilihan1');
        
        if(nilai2 == 0){
            alert("Jawaban anda tidak boleh kosong!");
        }
        else if (b[0].checked && b[4].checked){
            pembahasan[6].className = pembahasan[6].className.replace(' hilang', '');
            if(pembahasan[7].className.indexOf('hilang') == -1){
                pembahasan[7].className += ' hilang';
            }
        }else{
            pembahasan[7].className = pembahasan[5].className.replace(' hilang', '');
            if(pembahasan[6].className.indexOf('hilang') == -1){
                pembahasan[6].className += ' hilang';
            }
            for(var w = 0; w < b.length; w++){
                b[w].checked = false;
            }
            return nilai2 = 0;
        }
    }
}

// Lanjut soal
var slideIndex = 1;
soalTampil(slideIndex);

function SoalT(n) {
  soalTampil(slideIndex += n);
}

function NomorSoal(n) {
  soalTampil(slideIndex = n);
}

function soalTampil(n) {
    var soalku = document.querySelectorAll(".perta");
    var soalnav = document.querySelectorAll(".soal1");

  if (n > soalku.length){
      slideIndex = 1;
    }    
  if (n < 1){
      slideIndex = soalku.length;
    }

    for (var i = 0; i < soalku.length; i++) {
      soalku[i].style.display = "none";  
    }
    for (i = 0; i < soalnav.length; i++) {
      soalnav[i].className = soalnav[i].className.replace(" aktif", "");
    }
    for(let w = 0; w < pembahasan.length; w++){
        if(pembahasan[w].className.indexOf('hilang') == -1){
            pembahasan[w].className += " hilang";
        }
    }

    if(slideIndex-1 == 1 || slideIndex-1 == 2){
        for(let i=0; i<2; i++){
            for(let j=0; j<pilihan[i].children.length; j++){
                pilihan[i].children[j].style.pointerEvents="auto";
                pilihan[i].children[j].className='op'+[i+1];
            }
        }
    }else{
        var a = document.getElementsByName('pilihan');
        var b = document.getElementsByName('pilihan1');

        for(var w = 0; w < a.length; w++){
            if(a[w].checked == true){
                a[w].checked = false;
                nilai1 = 0;
            }
        }
        
        for(var w = 0; w < b.length; w++){
            if(b[w].checked == true){
                b[w].checked = false;
                nilai2 = 0;
            }
        }
    }

    for(let w = 0; w < tombol.length; w++){
        if(tombol[w].className.indexOf('hilang') == -1){
            tombol[w].className += " hilang";
        }
    }

    soalku[slideIndex-1].style.display = "block";  
    soalnav[slideIndex-1].className += " aktif";


  if(slideIndex-1 > 0){
      if(document.querySelector(".sebelumnya").className.indexOf("hilang") != -1){
        document.querySelector(".sebelumnya").className = document.querySelector(".sebelumnya").className.replace(" hilang", "");
      }else if(document.querySelector(".selanjutnya").className.indexOf("hilang") != -1){
        document.querySelector(".selanjutnya").className = document.querySelector(".selanjutnya").className.replace(" hilang", "");
      }
  }else if(slideIndex-1 == 0){
    if(document.querySelector(".sebelumnya").className.indexOf("hilang") == -1){
        document.querySelector(".sebelumnya").className += " hilang";
    }
    if(document.querySelector(".selanjutnya").className.indexOf("hilang") != -1){
        document.querySelector(".selanjutnya").className = document.querySelector(".selanjutnya").className.replace(" hilang", "");
    }
  }
  if(slideIndex-1 > 2){
    if(document.querySelector(".selanjutnya").className.indexOf("hilang") == -1){
        document.querySelector(".selanjutnya").className += " hilang";
    }else if(document.querySelector(".sebelumnya").className.indexOf("hilang") == -1){
        document.querySelector(".sebelumnya").className = document.querySelector(".sebelumnya").className.replace(" hilang", "");
    }
  }
}
