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


var soalnav = document.querySelectorAll(".soal1");
var soalku = document.querySelectorAll(".perta");
var pilihan = document.querySelectorAll("#ul");
var tombol = document.querySelectorAll(".tombol");
var ulangkan = document.querySelectorAll(".ulang");
var lanjutkan = document.querySelectorAll(".selanjutnya");
var kembalikan = document.querySelectorAll(".sebelumnya");
var pembahasan = document.querySelectorAll(".pembahasan");
var pembahasan1 = document.querySelectorAll(".pembahasan1");

function benar(X){
    if(X == 1){
        document.getElementById("op2").className += " benar";
        pembahasan1[2].className = pembahasan1[2].className.replace(' hilang', '');
        for(let i=0;i<pilihan[0].children.length;i++){
            pilihan[0].children[i].style.pointerEvents="none";
        }
    }
    if(X == 2){
        document.getElementById("op5").className += " benar";
        pembahasan[0].className = pembahasan[0].className.replace(' hilang', '');
        for(let i=0;i<pilihan[1].children.length;i++){
            pilihan[1].children[i].style.pointerEvents="none";
        }
    }
    if(X == 3){
        document.getElementById("op11").className += " benar";
        pembahasan[2].className = pembahasan[2].className.replace(' hilang', '');
        for(let i=0;i<pilihan[2].children.length;i++){
            pilihan[2].children[i].style.pointerEvents="none";
        }
    }
}

function salah(X){
    if(X == 1){
        document.getElementById("op1").className += " salah";
        pembahasan1[3].className = pembahasan1[3].className.replace(' hilang', '');
        tombol[0].className = tombol[0].className.replace(' hilang', '');
        for(let i=0;i<pilihan[0].children.length;i++){
            pilihan[0].children[i].style.pointerEvents="none";
        }
    }
    if(X == 2){
        document.getElementById("op3").className += " salah";
        pembahasan1[3].className = pembahasan1[3].className.replace(' hilang', '');
        tombol[0].className = tombol[0].className.replace(' hilang', '');
        for(let i=0;i<pilihan[0].children.length;i++){
            pilihan[0].children[i].style.pointerEvents="none";
        }
    }
    if(X == 3){
        document.getElementById("op4").className += " salah";
        pembahasan1[3].className = pembahasan1[3].className.replace(' hilang', '');
        tombol[0].className = tombol[0].className.replace(' hilang', '');
        for(let i=0;i<pilihan[0].children.length;i++){
            pilihan[0].children[i].style.pointerEvents="none";
        }
    }
    if(X == 4){
        document.getElementById("op6").className += " salah";
        pembahasan[1].className = pembahasan[1].className.replace(' hilang', '');
        tombol[1].className = tombol[1].className.replace(' hilang', '');
        for(let i=0;i<pilihan[1].children.length;i++){
            pilihan[1].children[i].style.pointerEvents="none";
        }
    }
    if(X == 5){
        document.getElementById("op7").className += " salah";
        pembahasan[1].className = pembahasan[1].className.replace(' hilang', '');
        tombol[1].className = tombol[1].className.replace(' hilang', '');
        for(let i=0;i<pilihan[1].children.length;i++){
            pilihan[1].children[i].style.pointerEvents="none";
        }
    }
    if(X == 6){
        document.getElementById("op8").className += " salah";
        pembahasan[1].className = pembahasan[1].className.replace(' hilang', '');
        tombol[1].className = tombol[1].className.replace(' hilang', '');
        for(let i=0;i<pilihan[1].children.length;i++){
            pilihan[1].children[i].style.pointerEvents="none";
        }
    }
    if(X == 7){
        document.getElementById("op9").className += " salah";
        pembahasan[3].className = pembahasan[3].className.replace(' hilang', '');
        tombol[2].className = tombol[2].className.replace(' hilang', '');
        for(let i=0;i<pilihan[2].children.length;i++){
            pilihan[2].children[i].style.pointerEvents="none";
        }
    }
    if(X == 8){
        document.getElementById("op10").className += " salah";
        pembahasan[3].className = pembahasan[3].className.replace(' hilang', '');
        tombol[2].className = tombol[2].className.replace(' hilang', '');
        for(let i=0;i<pilihan[2].children.length;i++){
            pilihan[2].children[i].style.pointerEvents="none";
        }
    }
    if(X == 9){
        document.getElementById("op12").className += " salah";
        pembahasan[3].className = pembahasan[3].className.replace(' hilang', '');
        tombol[2].className = tombol[2].className.replace(' hilang', '');
        for(let i=0;i<pilihan[2].children.length;i++){
            pilihan[2].children[i].style.pointerEvents="none";
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
                if(pembahasan1[w].className.indexOf('hilang') == -1){
                    pembahasan1[w].className += " hilang";
                }
            }
        }
        for(let i=0; i<3; i++){
            for(let j=0; j<pilihan[i].children.length; j++){
                pilihan[i].children[j].style.pointerEvents="auto";
                pilihan[i].children[j].className='op'+[i+1];
            }
        }
    });
}

var a = document.getElementsByName('pilihan');
var b = document.getElementsByName('pilihan1');
var nilai = 0;
var nilai1 = 0;

function cekbox(X){
    if(X == 1){
        var indexku = 0;
        var count;
        for(count = 0; count < a.length; count++){
            if(a[count].checked == true){
                indexku = indexku + 1;
                nilai = indexku;
            }
        }
        if(indexku > 2){
            return false;
        }
    }else if(X == 2){
        var indexku = 0;
        for(var count = 0; count < b.length; count++){
            if(b[count].checked == true){
                indexku = indexku + 1;
                nilai1 = indexku;
            }
        }
        if(indexku > 2){
            return false;
        }
    }
}

function cekjawab(X){
    if(X == 1){
        if(nilai == 0){
            alert("Jawaban anda tidak boleh kosong!");
        }
        else if(a[3].checked && a[4].checked){
            pembahasan1[0].className = pembahasan1[0].className.replace(' hilang', '');
            if(pembahasan1[1].className.indexOf('hilang') == -1){
                pembahasan1[1].className += ' hilang';
            }
        }
        else{
            pembahasan1[1].className = pembahasan1[1].className.replace(' hilang', '');
            if(pembahasan1[0].className.indexOf('hilang') == -1){
                pembahasan1[0].className += ' hilang';
            }
            for(var y = 0; y < a.length; y++){
                a[y].checked = false;
            }
            return nilai = 0;
        }
    }else if(X == 2){
        if(nilai1 == 0){
            alert("Jawaban anda tidak boleh kosong!");
        }
        else if(b[1].checked && b[3].checked){
            pembahasan1[4].className = pembahasan1[4].className.replace(' hilang', '');
            if(pembahasan1[5].className.indexOf('hilang') == -1){
                pembahasan1[5].className += ' hilang';
            }
        }
        else{
            pembahasan1[5].className = pembahasan1[5].className.replace(' hilang', '');
            if(pembahasan1[4].className.indexOf('hilang') == -1){
                pembahasan1[4].className += ' hilang';
            }
            for(var y = 0; y < b.length; y++){
                b[y].checked = false;
            }
            return nilai1 = 0;
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

    for(let z = 0; z < pembahasan1.length; z++){
        if(pembahasan1[z].className.indexOf('hilang') == -1){
            pembahasan1[z].className += " hilang";
        }
    }

    if(slideIndex == 1 || slideIndex == 3){
        for(var w = 0; w < a.length; w++){
            if(a[w].checked == true){
                a[w].checked = false;
                nilai = 0;
            }
        }

        for(var w = 0; w < b.length; w++){
            if(b[w].checked == true){
                b[w].checked = false;
                nilai1 = 0;
            }
        }

    }else{
        for(let i=0; i<3; i++){
            for(let j=0; j<pilihan[i].children.length; j++){
                pilihan[i].children[j].style.pointerEvents="auto";
                pilihan[i].children[j].className='op'+[i+1];
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
    if(slideIndex-1 > 3){
      if(document.querySelector(".selanjutnya").className.indexOf("hilang") == -1){
          document.querySelector(".selanjutnya").className += " hilang";
      }else if(document.querySelector(".sebelumnya").className.indexOf("hilang") == -1){
          document.querySelector(".sebelumnya").className = document.querySelector(".sebelumnya").className.replace(" hilang", "");
      }
    }
}