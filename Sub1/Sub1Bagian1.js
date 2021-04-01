var sidebar = document.querySelector('.tb');
sidebar.addEventListener('click', function (){
    console.log("ASU");
    document.getElementById("sidebar").classList.toggle('active');
    document.getElementById("judul").classList.toggle('full');
    document.getElementById("konten").classList.toggle('full');
    document.getElementById("navigasi").classList.toggle('full');
});

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
        video.currentTime = 30;
    }else if(X == 3){
        video.currentTime = 43;
    }else if(X == 4){
        video.currentTime = 86;
    }else if(X == 5){
        video.currentTime = 254;
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
        document.getElementById("op1").className += " benar";
        document.getElementById("salah").style.display = " none";
        document.querySelector('.pembahasan').className = document.querySelector('.pembahasan').className.replace(' hilang', '');
        document.querySelector('.perta2').className = document.querySelector('.perta2').className.replace(' hilang', '');
        for(let i=0;i<ul.children.length;i++){
            ul.children[i].style.pointerEvents="none";
        }
    }
    if(A == 2){
        document.getElementById("op6").className += " benar";
        document.getElementById("salah1").style.display = " none";
        document.querySelector('.pembahasan1').className = document.querySelector('.pembahasan1').className.replace(' hilang', '');
        for(let i=0;i<ul1.children.length;i++){
            ul1.children[i].style.pointerEvents="none";
        }
    }
}

function salahA(A){
    if(A == 1){
        document.getElementById("op2").className += " salah";
        document.getElementById("benar").style.display = " none";
        document.querySelector('.pembahasan').className = document.querySelector('.pembahasan').className.replace(' hilang', '');
        tombol[0].className = tombol[0].className.replace(' hilang', '');
        for(let i=0;i<ul.children.length;i++){
            ul.children[i].style.pointerEvents="none";
        }
    }
    if(A == 2){
        document.getElementById("op3").className += " salah";
        document.getElementById("benar").style.display = " none";
        document.querySelector('.pembahasan').className = document.querySelector('.pembahasan').className.replace(' hilang', '');
        tombol[0].className = tombol[0].className.replace(' hilang', '');
        for(let i=0;i<ul.children.length;i++){
            ul.children[i].style.pointerEvents="none";
        }
    }
    if(A == 3){
        document.getElementById("op4").className += " salah";
        document.getElementById("benar").style.display = " none";
        document.querySelector('.pembahasan').className = document.querySelector('.pembahasan').className.replace(' hilang', '');
        tombol[0].className = tombol[0].className.replace(' hilang', '');
        for(let i=0;i<ul.children.length;i++){
            ul.children[i].style.pointerEvents="none";
        }
    }
    if(A == 4){
        document.getElementById("op5").className += " salah";
        document.getElementById("benar1").style.display = " none";
        document.querySelector('.pembahasan1').className = document.querySelector('.pembahasan1').className.replace(' hilang', '');
        tombol[1].className = tombol[1].className.replace(' hilang', '');
        for(let i=0;i<ul1.children.length;i++){
            ul1.children[i].style.pointerEvents="none";
        }
    }
    if(A == 5){
        document.getElementById("op7").className += " salah";
        document.getElementById("benar1").style.display = " none";
        document.querySelector('.pembahasan1').className = document.querySelector('.pembahasan1').className.replace(' hilang', '');
        tombol[1].className = tombol[1].className.replace(' hilang', '');
        for(let i=0;i<ul1.children.length;i++){
            ul1.children[i].style.pointerEvents="none";
        }
    }
    if(A == 6){
        document.getElementById("op8").className += " salah";
        document.getElementById("benar1").style.display = " none";
        document.querySelector('.pembahasan1').className = document.querySelector('.pembahasan1').className.replace(' hilang', '');
        tombol[1].className = tombol[1].className.replace(' hilang', '');
        for(let i=0;i<ul1.children.length;i++){
            ul1.children[i].style.pointerEvents="none";
        }
    }
}

function ulang(X){
    if(X == 1){
        for(let i=0;i<ul.children.length;i++){
            ul.children[i].style.pointerEvents="auto";
            ul.children[i].className='op'+[i+1];
        }
        document.querySelector('.pembahasan').className += " hilang";
        tombol[0].className += " hilang";
        document.getElementById("benar").style.display = " inline-block";
        document.getElementById("salah").style.display = " inline-block";
    }
    else if(X == 2){
        for(let i=0;i<ul1.children.length;i++){
            ul1.children[i].style.pointerEvents="auto";
            ul1.children[i].className='op'+[i+1];
        }
        document.querySelector('.pembahasan1').className += " hilang";
        tombol[1].className += " hilang";
        document.getElementById("benar1").style.display = " inline-block";
        document.getElementById("salah1").style.display = " inline-block";
    }
}