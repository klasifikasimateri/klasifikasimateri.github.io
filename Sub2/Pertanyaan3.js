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
        document.getElementById("op5").className += " benar";
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
        document.getElementById("op6").className += " salah";
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

var nilai = 0;
function cekbox(){
    var a = document.getElementsByName('pilihan');
    var indexku = 0;
    var count;
    for(count = 0; count < a.length; count++){
        if(a[count].checked == true){
            indexku = indexku + 1;
            nilai = indexku;
        }
    }
    console.log(indexku);
    if(indexku > 2){
        nilai = 2;
        return false;
    }
}

function cekjawab(){
    var a = document.getElementsByName('pilihan');

    console.log(nilai);
    if(nilai == 0){
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
            return nilai = 0;
        }
}

var jawaban = document.querySelectorAll('.jawaban1');
var AkhirJ = document.querySelectorAll('.nilaiA');

for(let i=0; i<jawaban.length; i++){

    jawaban[i].addEventListener('keypress', function(e){
        if(e.keyCode == 13){
            e.preventDefault();
            return false;
        }
    });
    
    jawaban[i].addEventListener('keyup', function(){

        if (jawaban[i].value.length == 0) {
            if(jawaban[i].className.indexOf('kotakH') == -1){
              jawaban[i].className = jawaban[i].className.replace('kotakM', "");
            }
            if (jawaban[i].className.indexOf('kotakM') == -1){
              jawaban[i].className = jawaban[i].className.replace('kotakH', "");
            }
        }

        if(jawaban[i].value.length >= 1){
            if(i == 0){

                if(jawaban[i].value == 60){
                    if(jawaban[i].className.indexOf("kotakH") == -1){
                        if(jawaban[i].className.indexOf("kotakM") == -1){
                            jawaban[i].className += " kotakH";
                        }
                        else{
                            jawaban[i].className = jawaban[i].className.replace("kotakM", "kotakH");
                        }
                    }
                }else{
                    if(jawaban[i].className.indexOf("kotakM") == -1){
                        if(jawaban[i].className.indexOf("kotakH") == -1){
                            jawaban[i].className += " kotakM";
                        }
                        else{
                            jawaban[i].className = jawaban[i].className.replace("kotakH", "kotakM");
                        }
                    }
                }

            }

            if(i == 1){

                if(jawaban[i].value == 12){
                    if(jawaban[i].className.indexOf("kotakH") == -1){
                        if(jawaban[i].className.indexOf("kotakM") == -1){
                            jawaban[i].className += " kotakH";
                        }
                        else{
                            jawaban[i].className = jawaban[i].className.replace("kotakM", "kotakH");
                        }
                    }
                }else{
                    if(jawaban[i].className.indexOf("kotakM") == -1){
                        if(jawaban[i].className.indexOf("kotakH") == -1){
                            jawaban[i].className += " kotakM";
                        }
                        else{
                            jawaban[i].className = jawaban[i].className.replace("kotakH", "kotakM");
                        }
                    }
                }

            }

            if(jawaban[0].value == 60 && jawaban[1].value == 12){
                AkhirJ[0].className = AkhirJ[0].className.replace(" hilang", "");
            }

            if(i == 2){

                if(jawaban[i].value == 5){
                    if(jawaban[i].className.indexOf("kotakH") == -1){
                        if(jawaban[i].className.indexOf("kotakM") == -1){
                            jawaban[i].className += " kotakH";
                        }
                        else{
                            jawaban[i].className = jawaban[i].className.replace("kotakM", "kotakH");
                        }
                    }

                    if(pembahasan[7].className.indexOf("hilang") == -1){
                        pembahasan[7].className += " hilang";
                        pembahasan[6].className = pembahasan[6].className.replace(' hilang', '');
                    }else{
                        pembahasan[6].className = pembahasan[6].className.replace(' hilang', '');
                    }
                }else{
                    if(jawaban[i].className.indexOf("kotakM") == -1){
                        if(jawaban[i].className.indexOf("kotakH") == -1){
                            jawaban[i].className += " kotakM";
                        }
                        else{
                            jawaban[i].className = jawaban[i].className.replace("kotakH", "kotakM");
                        }
                    }
                    if(pembahasan[6].className.indexOf("hilang") == -1){
                        pembahasan[6].className += " hilang";
                        pembahasan[7].className = pembahasan[7].className.replace(' hilang', '');
                    }else{
                        pembahasan[7].className = pembahasan[7].className.replace(' hilang', '');
                    }
                }

            }

            if(i == 3){

                if(jawaban[i].value == 98){
                    if(jawaban[i].className.indexOf("kotakH") == -1){
                        if(jawaban[i].className.indexOf("kotakM") == -1){
                            jawaban[i].className += " kotakH";
                        }
                        else{
                            jawaban[i].className = jawaban[i].className.replace("kotakM", "kotakH");
                        }
                    }
                }else{
                    if(jawaban[i].className.indexOf("kotakM") == -1){
                        if(jawaban[i].className.indexOf("kotakH") == -1){
                            jawaban[i].className += " kotakM";
                        }
                        else{
                            jawaban[i].className = jawaban[i].className.replace("kotakH", "kotakM");
                        }
                    }
                }

            }

            if(i == 4){

                if(jawaban[i].value == 14){
                    if(jawaban[i].className.indexOf("kotakH") == -1){
                        if(jawaban[i].className.indexOf("kotakM") == -1){
                            jawaban[i].className += " kotakH";
                        }
                        else{
                            jawaban[i].className = jawaban[i].className.replace("kotakM", "kotakH");
                        }
                    }
                }else{
                    if(jawaban[i].className.indexOf("kotakM") == -1){
                        if(jawaban[i].className.indexOf("kotakH") == -1){
                            jawaban[i].className += " kotakM";
                        }
                        else{
                            jawaban[i].className = jawaban[i].className.replace("kotakH", "kotakM");
                        }
                    }
                }

            }

            if(jawaban[3].value == 98 && jawaban[4].value == 14){
                AkhirJ[1].className = AkhirJ[1].className.replace(" hilang", "");
            }

            if(i == 5){

                if(jawaban[i].value == 7){
                    if(jawaban[i].className.indexOf("kotakH") == -1){
                        if(jawaban[i].className.indexOf("kotakM") == -1){
                            jawaban[i].className += " kotakH";
                        }
                        else{
                            jawaban[i].className = jawaban[i].className.replace("kotakM", "kotakH");
                        }
                    }

                    if(pembahasan[9].className.indexOf("hilang") == -1){
                        pembahasan[9].className += " hilang";
                        pembahasan[8].className = pembahasan[8].className.replace(' hilang', '');
                    }else{
                        pembahasan[8].className = pembahasan[8].className.replace(' hilang', '');
                    }
                }else{
                    if(jawaban[i].className.indexOf("kotakM") == -1){
                        if(jawaban[i].className.indexOf("kotakH") == -1){
                            jawaban[i].className += " kotakM";
                        }
                        else{
                            jawaban[i].className = jawaban[i].className.replace("kotakH", "kotakM");
                        }
                    }
                    if(pembahasan[8].className.indexOf("hilang") == -1){
                        pembahasan[8].className += " hilang";
                        pembahasan[9].className = pembahasan[9].className.replace(' hilang', '');
                    }else{
                        pembahasan[9].className = pembahasan[9].className.replace(' hilang', '');
                    }
                }

            }

        }
    })
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
    }else if(slideIndex-1 == 0){
        var a = document.getElementsByName('pilihan');
        for(var w = 0; w < a.length; w++){
            if(a[w].checked == true){
                a[w].checked = false;
                nilai1 = 0;
            }
        }
    }else{
        for(let z=0; z<jawaban.length; z++){

            if(jawaban[z].className.indexOf("kotakH") != -1){
                jawaban[z].className = jawaban[z].className.replace('kotakH', '');
                jawaban[z].value = "";

                if(AkhirJ[0].className.indexOf("hilang") == -1){
                    AkhirJ[0].className += " hilang";
                }else if(AkhirJ[1].className.indexOf("hilang") == -1){
                    AkhirJ[1].className += " hilang";
                }

            }else if(jawaban[z].className.indexOf("kotakM") != -1){
                jawaban[z].className = jawaban[z].className.replace('kotakM', '');
                jawaban[z].value = "";

                if(AkhirJ[0].className.indexOf("hilang") == -1){
                    AkhirJ[0].className += " hilang";
                }else if(AkhirJ[1].className.indexOf("hilang") == -1){
                    AkhirJ[1].className += " hilang";
                }

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
