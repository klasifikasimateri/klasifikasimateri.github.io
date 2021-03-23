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
        video.currentTime = 56;
    }else if(X == 4){
        video.currentTime = 88;
    }
}

let klikku = document.querySelector('.klikaku .Petunjuk');
let atasIsi = document.querySelector('.Isi');
klikku.addEventListener('click', function () {
    atasIsi.classList.toggle('hilang');
});

// const boxElements = document.querySelectorAll(".box");

// boxElements.forEach(elem => {
//   elem.addEventListener("dragstart", dragStart);
//   elem.addEventListener("dragover", dragOver);
//   elem.addEventListener("drop", drop);
// });

// // Drag and Drop Functions

// function dragStart(event) {
//   event.dataTransfer.setData("text", event.target.id);
// }

// function dragOver(event) {
//   event.preventDefault();
// }

// function drop(event) {
//   event.preventDefault();
//   event.target.classList.remove("drag-enter");
//   const draggableElementId = event.dataTransfer.getData("text");
//   const droppableElementId = event.target.id;
//     if(draggableElementId != droppableElementId) {
//     const draggableElement = document.getElementById(draggableElementId);
//     const droppableElementBgColor = event.target.style.backgroundColor;
//     const droppableElementTextContent = event.target.querySelector("span").textContent;
  
//     event.target.style.backgroundColor = draggableElement.style.backgroundColor;
//     event.target.querySelector("span").textContent = draggableElement.querySelector("span").textContent;
//     draggableElement.style.backgroundColor = droppableElementBgColor;
//     draggableElement.querySelector("span").textContent = droppableElementTextContent;
//      boxa = document.getElementById("box-a").textContent;
//      boxb = document.getElementById("box-b").textContent;
//      boxc = document.getElementById("box-c").textContent;
//      boxd = document.getElementById("box-d").textContent;
//      boxe = document.getElementById("box-e").textContent;
//   }
// }

// var boxa = 0;
// var boxb = 0;
// var boxc = 0;
// var boxd = 0;
// var boxe = 0;

// function cekjawab(){
//     if(boxa == 2 && boxb == 5 && boxc == 1 && boxd == 3 && boxe == 4){
//         document.getElementById("box-a").draggable = false;
//         document.getElementById("box-b").draggable = false;
//         document.getElementById("box-c").draggable = false;
//         document.getElementById("box-d").draggable = false;
//         document.getElementById("box-e").draggable = false;
//         document.querySelector('.pembahasan').className = document.querySelector('.pembahasan').className.replace(' hilang', '');
//         document.querySelector('.benarn').className = document.querySelector('.benarn').className.replace(' hilang', '');
//         if(document.querySelector('.salah').className.indexOf('hilang') == -1){
//             document.querySelector('.salah').className += " hilang";
//         }
//     }else{
//         document.querySelector('.pembahasan').className = document.querySelector('.pembahasan').className.replace(' hilang', '');
//         document.querySelector('.salah').className = document.querySelector('.salah').className.replace(' hilang', '');
//     }
// }

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
    }if(A == 2){
        document.getElementById("op7").className += " benar";
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
        document.getElementById("op6").className += " salah";
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

function ulang(X){
    if(X == 1){
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
    }
    if(X == 2){
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