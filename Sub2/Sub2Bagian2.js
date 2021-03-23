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

let contoh = document.querySelectorAll('.cth');
let soal = document.querySelectorAll('.contoh');
for (let i = 0; i < contoh.length; i++){
    contoh[i].addEventListener('click', function(){
    for(let j = 0; j < soal.length;j++){
        if(soal[j].className.indexOf('hilang') == -1){
            soal[j].className += " hilang";
            contoh[j].className = contoh[j].className.replace("aktif", "");
        }
    }
    soal[i].className = soal[i].className.replace("hilang","");
    contoh[i].className += " aktif";
    });
}

let SelesaiM = document.querySelector('.SelesaiM');
let next = document.querySelectorAll(".next")
SelesaiM.addEventListener('click', function(){
    SelesaiM.className += " hilang";
    document.querySelector(".mencoba").className = document.querySelector(".mencoba").className.replace(" hilang", "");
    next[1].className += " hilang";
});

let klikku = document.querySelector('.klikaku .Petunjuk');
let atasIsi = document.querySelector('.Isi');
klikku.addEventListener('click', function () {
    atasIsi.classList.toggle('hilang');
});

var masa = document.querySelector(".masa");
var masa1 = document.querySelector(".masa1");
var volume = document.querySelector(".volume");
var panjang = document.querySelector(".panjang");
var lebar = document.querySelector(".lebar");
var tinggi = document.querySelector(".tinggi");

function ubah(X){
    if(X == 1){
        if(masa.className.indexOf('kotakB') == -1){
            if(jawaban[0].className.indexOf('kotakH') == -1){
                masa.className += " kotakB";
            }
        }
        if(volume.className.indexOf('kotakB') != -1){
            volume.className = volume.className.replace(" kotakB", "");
        }
    }
    if(X == 2){
        if(masa.className.indexOf('kotakB') != -1){
            masa.className = masa.className.replace(" kotakB", "");
        }
        if(volume.className.indexOf('kotakB') == -1){
            if(jawaban[1].className.indexOf('kotakH') == -1){
                volume.className += " kotakB";
            }
        }
    }
    if(X == 3){
        if(panjang.className.indexOf('kotakB') == -1){
            if(jawaban[3].className.indexOf('kotakH') == -1){
                panjang.className += " kotakB";
            }   
        }
        if(lebar.className.indexOf('kotakB') != -1){
            lebar.className = lebar.className.replace(" kotakB", "");
        }
        if(tinggi.className.indexOf('kotakB') != -1){
            tinggi.className = tinggi.className.replace(" kotakB", "");
        }
    }
    if(X == 4){
        if(lebar.className.indexOf('kotakB') == -1){
            if(jawaban[4].className.indexOf('kotakH') == -1){
                lebar.className += " kotakB";
            }   
        }
        if(panjang.className.indexOf('kotakB') != -1){
            panjang.className = panjang.className.replace(" kotakB", "");
        }
        if(tinggi.className.indexOf('kotakB') != -1){
            tinggi.className = tinggi.className.replace(" kotakB", "");
        }
    }
    if(X == 5){
        if(tinggi.className.indexOf('kotakB') == -1){
            if(jawaban[5].className.indexOf('kotakH') == -1){
                tinggi.className += " kotakB";
            }   
        }
        if(panjang.className.indexOf('kotakB') != -1){
            panjang.className = lebar.className.replace(" kotakB", "");
        }
        if(lebar.className.indexOf('kotakB') != -1){
            lebar.className = lebar.className.replace(" kotakB", "");
        }
    }
    if(X == 6){
        if(masa1.className.indexOf('kotakB') == -1){
            if(jawaban[7].className.indexOf('kotakH') == -1){
                masa1.className += " kotakB";
            }
        }
        if(jawaban[6].className.indexOf('kotakB') != -1){
            jawaban[6].className = volume.className.replace(" kotakB", "");
            jawaban[6].className += " kotakH";
        }
    }
    if(X == 7){
        if(masa1.className.indexOf('kotakB') != -1){
            masa1.className = masa.className.replace(" kotakB", "");
        }
        if(jawaban[6].className.indexOf('kotakB') == -1){
            if(jawaban[8].className.indexOf('kotakH') == -1){
                jawaban[6].className = jawaban[6].className.replace("kotakH", "");
                if(jawaban[6].className.indexOf('kotakH') == -1){
                    jawaban[6].className += " kotakB";
                }
            }
        }
    }
}

var jawaban = document.querySelectorAll('.tulis');
for(let i=0; i<jawaban.length; i++){

    // function agar saat di enter tidak dijalankan 
    jawaban[i].addEventListener('keypress', function(e){
      if (e.keyCode == 13) {
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
      if(jawaban[i].value.length == 2 || jawaban[i].value.length == 1 || jawaban[i].value.length == 4){

        if(i == 0){
            if(jawaban[i].value == 48){
                if(jawaban[i].className.indexOf("kotakH") == -1){
                    if(jawaban[i].className.indexOf("kotakM") == -1){
                        jawaban[i].className += " kotakH";
                    }
                    else{
                        jawaban[i].className = jawaban[i].className.replace("kotakM", "kotakH");
                    }
                }
            if(masa.className.indexOf("kotakB") != -1){
                masa.className = masa.className.replace(" kotakB", "");
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
            if(jawaban[i].value == 16){
                if(jawaban[i].className.indexOf("kotakH") == -1){
                    if(jawaban[i].className.indexOf("kotakM") == -1){
                        jawaban[i].className += " kotakH";
                    }
                    else{
                        jawaban[i].className = jawaban[i].className.replace("kotakM", "kotakH");
                    }
                }
                if(volume.className.indexOf("kotakB") != -1){
                    volume.className = volume.className.replace(" kotakB", "");
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

        if(jawaban[0].value == 48 && jawaban[1].value == 16){
            document.querySelector(".ket").className = document.querySelector(".ket").className.replace(" hilang", "");
            document.querySelector(".hasilnya").className = document.querySelector(".hasilnya").className.replace(" hilang", "");
        }

        if(i == 2){
            if(jawaban[i].value == 3){
                if(jawaban[i].className.indexOf("kotakH") == -1){
                    if(jawaban[i].className.indexOf("kotakM") == -1){
                        jawaban[i].className += " kotakH";
                    }
                    else{
                        jawaban[i].className = jawaban[i].className.replace("kotakM", "kotakH");
                    }
                }
            document.querySelector(".akhir").className = document.querySelector(".akhir").className.replace(" hilang", "");
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

        if(i == 3){
            if(jawaban[i].value == 2){
                if(jawaban[i].className.indexOf("kotakH") == -1){
                    if(jawaban[i].className.indexOf("kotakM") == -1){
                        jawaban[i].className += " kotakH";
                    }
                    else{
                        jawaban[i].className = jawaban[i].className.replace("kotakM", "kotakH");
                    }
                }
                if(panjang.className.indexOf("kotakB") != -1){
                    panjang.className = panjang.className.replace(" kotakB", "");
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
            if(jawaban[i].value == 2){
                if(jawaban[i].className.indexOf("kotakH") == -1){
                    if(jawaban[i].className.indexOf("kotakM") == -1){
                        jawaban[i].className += " kotakH";
                    }
                    else{
                        jawaban[i].className = jawaban[i].className.replace("kotakM", "kotakH");
                    }
                }
                if(lebar.className.indexOf("kotakB") != -1){
                    lebar.className = panjang.className.replace(" kotakB", "");
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

        if(i == 5){
            if(jawaban[i].value == 3){
                if(jawaban[i].className.indexOf("kotakH") == -1){
                    if(jawaban[i].className.indexOf("kotakM") == -1){
                        jawaban[i].className += " kotakH";
                    }
                    else{
                        jawaban[i].className = jawaban[i].className.replace("kotakM", "kotakH");
                    }
                }
                if(tinggi.className.indexOf("kotakB") != -1){
                    tinggi.className = panjang.className.replace(" kotakB", "");
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

        if(jawaban[3].value == 2 && jawaban[4].value == 2 && jawaban[5].value == 3){
            document.querySelector(".ket1").className = document.querySelector(".ket1").className.replace(" hilang", "");
            document.querySelector(".hasilvolume").className = document.querySelector(".hasilvolume").className.replace(" hilang", "");
        }

        if(i == 6){
            if(jawaban[i].value == 12){
                if(jawaban[i].className.indexOf("kotakH") == -1){
                    if(jawaban[i].className.indexOf("kotakM") == -1){
                        jawaban[i].className += " kotakH";
                    }
                    else{
                        jawaban[i].className = jawaban[i].className.replace("kotakM", "kotakH");
                    }
                }
                document.querySelector(".jawab").className = document.querySelector(".jawab").className.replace(" hilang", "");
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

        if(i == 7){
            if(jawaban[i].value == 87){
                if(jawaban[i].className.indexOf("kotakH") == -1){
                    if(jawaban[i].className.indexOf("kotakM") == -1){
                        jawaban[i].className += " kotakH";
                    }
                    else{
                        jawaban[i].className = jawaban[i].className.replace("kotakM", "kotakH");
                    }
                }
                if(masa1.className.indexOf("kotakB") != -1){
                    masa1.className = panjang.className.replace(" kotakB", "");
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

        if(i == 8){
            if(jawaban[i].value == 12){
                if(jawaban[i].className.indexOf("kotakH") == -1){
                    if(jawaban[i].className.indexOf("kotakM") == -1){
                        jawaban[i].className += " kotakH";
                    }
                    else{
                        jawaban[i].className = jawaban[i].className.replace("kotakM", "kotakH");
                    }
                }
                if(jawaban[6].className.indexOf("kotakB") != -1){
                    jawaban[6].className = panjang.className.replace("kotakB", "");
                    if(jawaban[6].className.indexOf("kotakH") == -1){
                        jawaban[6].className += " kotakH";
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

        if(jawaban[7].value == 87 && jawaban[8].value == 12){
            document.querySelector(".ket2").className = document.querySelector(".ket2").className.replace(" hilang", "");
            document.querySelector(".hasilnya1").className = document.querySelector(".hasilnya1").className.replace(" hilang", "");
        }

        if(i == 9){
            if(jawaban[i].value.toString() == "7,25" || jawaban[i].value.toString() == "7.25"){
                if(jawaban[i].className.indexOf("kotakH") == -1){
                    if(jawaban[i].className.indexOf("kotakM") == -1){
                        jawaban[i].className += " kotakH";
                    }
                    else{
                        jawaban[i].className = jawaban[i].className.replace("kotakM", "kotakH");
                    }
                }
                document.querySelector(".akhiran").className = document.querySelector(".akhiran").className.replace(" hilang", "");
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

      }
    })
}


var pilihan = document.querySelectorAll("#ul");
var tombol = document.querySelectorAll(".tombol");
var ulangkan = document.querySelectorAll(".ulang");
var pembahasan = document.querySelectorAll(".pembahasan");

function benar(X){
    if(X == 1){
        document.getElementById("op3").className += " benar";
        pembahasan[0].className = pembahasan[0].className.replace(' hilang', '');
        for(let i=0;i<pilihan[0].children.length;i++){
            pilihan[0].children[i].style.pointerEvents="none";
        }
    }
    if(X == 2){
        document.getElementById("op6").className += " benar";
        pembahasan[2].className = pembahasan[2].className.replace(' hilang', '');
        for(let i=0;i<pilihan[1].children.length;i++){
            pilihan[1].children[i].style.pointerEvents="none";
        }
    }
}

function salah(X){
    if(X == 1){
        document.getElementById("op1").className += " salah";
        pembahasan[1].className = pembahasan[1].className.replace(' hilang', '');
        tombol[0].className = tombol[0].className.replace(' hilang', '');
        for(let i=0;i<pilihan[0].children.length;i++){
            pilihan[0].children[i].style.pointerEvents="none";
        }
    }
    if(X == 2){
        document.getElementById("op2").className += " salah";
        pembahasan[1].className = pembahasan[1].className.replace(' hilang', '');
        tombol[0].className = tombol[0].className.replace(' hilang', '');
        for(let i=0;i<pilihan[0].children.length;i++){
            pilihan[0].children[i].style.pointerEvents="none";
        }
    }
    if(X == 3){
        document.getElementById("op4").className += " salah";
        pembahasan[1].className = pembahasan[1].className.replace(' hilang', '');
        tombol[0].className = tombol[0].className.replace(' hilang', '');
        for(let i=0;i<pilihan[0].children.length;i++){
            pilihan[0].children[i].style.pointerEvents="none";
        }
    }
    if(X == 4){
        document.getElementById("op5").className += " salah";
        pembahasan[3].className = pembahasan[3].className.replace(' hilang', '');
        tombol[1].className = tombol[1].className.replace(' hilang', '');
        for(let i=0;i<pilihan[1].children.length;i++){
            pilihan[1].children[i].style.pointerEvents="none";
        }
    }
    if(X == 5){
        document.getElementById("op7").className += " salah";
        pembahasan[3].className = pembahasan[3].className.replace(' hilang', '');
        tombol[1].className = tombol[1].className.replace(' hilang', '');
        for(let i=0;i<pilihan[1].children.length;i++){
            pilihan[1].children[i].style.pointerEvents="none";
        }
    }
    if(X == 6){
        document.getElementById("op8").className += " salah";
        pembahasan[3].className = pembahasan[3].className.replace(' hilang', '');
        tombol[1].className = tombol[1].className.replace(' hilang', '');
        for(let i=0;i<pilihan[1].children.length;i++){
            pilihan[1].children[i].style.pointerEvents="none";
        }
    }
}

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

let NavSoal = document.querySelectorAll('.perta');
let soalku = document.querySelectorAll('.pertanyaan');
for (let i = 0; i < contoh.length; i++){
    NavSoal[i].addEventListener('click', function(){
    for(let j = 0; j < soalku.length;j++){
        if(soalku[j].className.indexOf('hilang') == -1){
            soalku[j].className += " hilang";
            NavSoal[j].className = NavSoal[j].className.replace("aktif", "");
        }
    }
    soalku[i].className = soalku[i].className.replace("hilang","");
    NavSoal[i].className += " aktif";
    });
}