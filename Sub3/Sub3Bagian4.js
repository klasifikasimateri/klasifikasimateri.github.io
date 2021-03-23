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

var video = document.getElementById("videoku");
video.onended = function() {
    document.getElementById("penje").style.display = "inline-block";
    document.querySelector('.penjelasanku').className = document.querySelector('.penjelasanku').className.replace(' hilang', '');
    document.querySelector('.containerP').className = document.querySelector('.containerP').className.replace(' hilang', '');
};

function setCurTime(X){
    if(X == 1){
        video.currentTime = 7;
    }else if(X == 2){
        video.currentTime = 25;
    }else if(X == 3){
        video.currentTime = 52;
    }else if(X == 4){
        video.currentTime = 83;
    }
}

let klikku = document.querySelector('.klikaku .Petunjuk');
let atasIsi = document.querySelector('.Isi');
klikku.addEventListener('click', function () {
    atasIsi.classList.toggle('hilang');
});

var ul = document.getElementById("ul");
var ul1 = document.getElementById("ul1");
var tombol = document.querySelectorAll(".tombol");

function benar(A){
    if(A == 1){
        document.getElementById("op2").className += " benar";
        document.querySelector('.pembahasan1').className = document.querySelector('.pembahasan1').className.replace(' hilang', '');
        document.querySelector('.benar1').className = document.querySelector('.benar1').className.replace(' hilang', '');
        document.querySelector('.perta2').className = document.querySelector('.perta2').className.replace(' hilang', '');
        for(let i=0;i<ul.children.length;i++){
            ul.children[i].style.pointerEvents="none";
        }
    }
    if(A == 2){
        document.getElementById("op6").className += " benar";
        document.querySelector('.pembahasan').className = document.querySelector('.pembahasan').className.replace(' hilang', '');
        document.querySelector('.benarn').className = document.querySelector('.benarn').className.replace(' hilang', '');
        for(let i=0;i<ul1.children.length;i++){
            ul1.children[i].style.pointerEvents="none";
        }
    }
}

function salahA(A){
    if(A == 1){
        document.getElementById("op1").className += " salah";
        document.querySelector('.pembahasan1').className = document.querySelector('.pembahasan1').className.replace(' hilang', '');
        document.querySelector('.salah1').className = document.querySelector('.salah1').className.replace(' hilang', '');
        tombol[0].className = tombol[0].className.replace(' hilang', '');
        for(let i=0;i<ul.children.length;i++){
            ul.children[i].style.pointerEvents="none";
        }
    }
    if(A == 2){
        document.getElementById("op3").className += " salah";
        document.querySelector('.pembahasan1').className = document.querySelector('.pembahasan1').className.replace(' hilang', '');
        document.querySelector('.salah1').className = document.querySelector('.salah1').className.replace(' hilang', '');
        tombol[0].className = tombol[0].className.replace(' hilang', '');
        for(let i=0;i<ul.children.length;i++){
            ul.children[i].style.pointerEvents="none";
        }
    }
    if(A == 3){
        document.getElementById("op4").className += " salah";
        document.querySelector('.pembahasan1').className = document.querySelector('.pembahasan1').className.replace(' hilang', '');
        document.querySelector('.salah1').className = document.querySelector('.salah1').className.replace(' hilang', '');
        tombol[0].className = tombol[0].className.replace(' hilang', '');
        for(let i=0;i<ul.children.length;i++){
            ul.children[i].style.pointerEvents="none";
        }
    }
    if(A == 4){
        document.getElementById("op5").className += " salah";
        document.querySelector('.pembahasan').className = document.querySelector('.pembahasan').className.replace(' hilang', '');
        document.querySelector('.salahn').className = document.querySelector('.salahn').className.replace(' hilang', '');
        tombol[1].className = tombol[1].className.replace(' hilang', '');
        for(let i=0;i<ul1.children.length;i++){
            ul1.children[i].style.pointerEvents="none";
        }
    }
    if(A == 5){
        document.getElementById("op7").className += " salah";
        document.querySelector('.pembahasan').className = document.querySelector('.pembahasan').className.replace(' hilang', '');
        document.querySelector('.salahn').className = document.querySelector('.salahn').className.replace(' hilang', '');
        tombol[1].className = tombol[1].className.replace(' hilang', '');
        for(let i=0;i<ul1.children.length;i++){
            ul1.children[i].style.pointerEvents="none";
        }
    }
    if(A == 6){
        document.getElementById("op8").className += " salah";
        document.querySelector('.pembahasan').className = document.querySelector('.pembahasan').className.replace(' hilang', '');
        document.querySelector('.salahn').className = document.querySelector('.salahn').className.replace(' hilang', '');
        tombol[1].className = tombol[1].className.replace(' hilang', '');
        for(let i=0;i<ul1.children.length;i++){
            ul1.children[i].style.pointerEvents="none";
        }
    }
}

function ulang(A){
    if(A == 1){
        for(let i=0;i<ul.children.length;i++){
            ul.children[i].style.pointerEvents="auto";
            ul.children[i].className='op'+[i+1];
        }
        if(tombol[0].className.indexOf("hilang") == -1){
            if(document.querySelector('.pembahasan1').className.indexOf("hilang") == -1){
                document.querySelector('.pembahasan1').className += " hilang";
                document.querySelector('.salah1').className += " hilang";
            }
            tombol[0].className += " hilang";
        }
    } if(A == 2){
        for(let i=0;i<ul1.children.length;i++){
            ul1.children[i].style.pointerEvents="auto";
            ul1.children[i].className='op'+[i+1];
        }
        if(tombol[1].className.indexOf("hilang") == -1){
            if(document.querySelector('.pembahasan').className.indexOf("hilang") == -1){
                document.querySelector('.pembahasan').className += " hilang";
                document.querySelector('.salahn').className += " hilang";
            }
            tombol[1].className += " hilang";
        }
    }
}