 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBgT1mrVe3J7q-8f9AKjJQd6uRBt1NBK0Y",
    authDomain: "projectbaru-860a4.firebaseapp.com",
    databaseURL: "https://projectbaru-860a4.firebaseio.com",
    projectId: "projectbaru-860a4",
    storageBucket: "projectbaru-860a4.appspot.com",
    messagingSenderId: "143518701192",
    appId: "1:143518701192:web:3c952f4ad6f3538800f13d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


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

var d = new Date();
var t = d.getTime();
var counter = t;

// ambil jamnya
window.setTimeout("waktu()", 1000);

function waktu() {
    var tanggal = new Date();
    setTimeout("waktu()", 1000);
    return (tanggal.getHours() + ":" + tanggal.getMinutes() + ":" + tanggal.getSeconds());
}

// harinya
function hari() {
    tanggallengkap = new String();
    namahari = ("Minggu Senin Selasa Rabu Kamis Jumat Sabtu");
    namahari = namahari.split(" ");
    namabulan = ("Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember");
    namabulan = namabulan.split(" ");
    tgl = new Date();
    hari = tgl.getDay();
    tanggal = tgl.getDate();
    bulan = tgl.getMonth();
    tahun = tgl.getFullYear();
    tanggallengkap = namahari[hari] + ", " + tanggal + " " + namabulan[bulan] + " " + tahun;
    return (tanggallengkap);
}

function uploadfoto(){
    const ref = firebase.storage().ref()
    const file = document.querySelector("#foto").files[0]

    if(file == null){
        alert("Pilih foto terlebih dahulu")
        return(file)
    }
    const name = file.name
    var harinya = hari();
    var waktunya = waktu();
    const metadata = {
        contentType:file.type
    }
    const task = ref.child(name).put(file,metadata)

    task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
        console.log(url)
        alert("Foto berhasil diunggah")
        document.querySelector('.pertanyaans').className = document.querySelector('.pertanyaans').className.replace(' hilang', '');
        document.querySelector('.inputfoto').className += " hilang"; 
    })

    firebase.database().ref('Gambar/'+counter).set({
        Nama: file.name,
        waktu: waktunya,
        hari: harinya
    });
}

let klikku = document.querySelector('.klikaku .Petunjuk');
let atasIsi = document.querySelector('.Isi');
klikku.addEventListener('click', function () {
    atasIsi.classList.toggle('hilang');
});

var ul = document.getElementById("ul");
var ul1 = document.getElementById("ul1");
var hasil = 0;
var hasil1 = 0;

function benar(A){
    if(A == 1){
        hasil = hasil+1;
        document.getElementById("op1").className += " benar";
        document.getElementById("salah").style.display = " none";
        document.querySelector('.pembahasan').className = document.querySelector('.pembahasan').className.replace(' hilang', '');
        document.querySelector('.perta2').className = document.querySelector('.perta2').className.replace(' hilang', '');
        for(let i=0;i<ul.children.length;i++){
            ul.children[i].style.pointerEvents="none";
        }
    }
    if(A == 2){
        hasil = hasil+1;
        document.getElementById("op6").className += " benar";
        document.getElementById("salah1").style.display = " none";
        document.querySelector('.pembahasan1').className = document.querySelector('.pembahasan1').className.replace(' hilang', '');
        for(let i=0;i<ul1.children.length;i++){
            ul1.children[i].style.pointerEvents="none";
        }
    }
    console.log(hasil);
    console.log(hasil1);
    if(hasil1 == 1){
        document.querySelector('.lanjutM').className = document.querySelector('.lanjutM').className.replace(' hilang', '');
        document.querySelector('.tombol').className = document.querySelector('.tombol').className.replace(' hilang', '');
    }
    if(hasil1 == 1 && A >= 1){
        document.querySelector('.lanjutM').className = document.querySelector('.lanjutM').className.replace(' hilang', '');
        document.querySelector('.tombol').className = document.querySelector('.tombol').className.replace(' hilang', '');
    }
    if(hasil == 2){
        document.querySelector('.lanjutM').className = document.querySelector('.lanjutM').className.replace(' hilang', '');
    }
}

function salahA(A){
    if(A == 1){
        hasil1 = hasil1+1;
        document.getElementById("op2").className += " salah";
        document.getElementById("benar").style.display = " none";
        document.querySelector('.pembahasan').className = document.querySelector('.pembahasan').className.replace(' hilang', '');
        document.querySelector('.perta2').className = document.querySelector('.perta2').className.replace(' hilang', '');
        for(let i=0;i<ul.children.length;i++){
            ul.children[i].style.pointerEvents="none";
        }
    }
    if(A == 2){
        hasil1 = hasil1+1;
        document.getElementById("op3").className += " salah";
        document.getElementById("benar").style.display = " none";
        document.querySelector('.pembahasan').className = document.querySelector('.pembahasan').className.replace(' hilang', '');
        document.querySelector('.perta2').className = document.querySelector('.perta2').className.replace(' hilang', '');
        for(let i=0;i<ul.children.length;i++){
            ul.children[i].style.pointerEvents="none";
        }
    }
    if(A == 3){
        hasil1 = hasil1+1;
        document.getElementById("op4").className += " salah";
        document.getElementById("benar").style.display = " none";
        document.querySelector('.pembahasan').className = document.querySelector('.pembahasan').className.replace(' hilang', '');
        document.querySelector('.perta2').className = document.querySelector('.perta2').className.replace(' hilang', '');
        for(let i=0;i<ul.children.length;i++){
            ul.children[i].style.pointerEvents="none";
        }
    }
    if(A == 4){
        hasil1 = hasil1+1;
        document.getElementById("op5").className += " salah";
        document.getElementById("benar1").style.display = " none";
        document.querySelector('.pembahasan1').className = document.querySelector('.pembahasan1').className.replace(' hilang', '');
        for(let i=0;i<ul1.children.length;i++){
            ul1.children[i].style.pointerEvents="none";
        }
    }
    if(A == 5){
        hasil1 = hasil1+1;
        document.getElementById("op8").className += " salah";
        document.getElementById("benar1").style.display = " none";
        document.querySelector('.pembahasan1').className = document.querySelector('.pembahasan1').className.replace(' hilang', '');
        for(let i=0;i<ul1.children.length;i++){
            ul1.children[i].style.pointerEvents="none";
        }
    }
    if(A == 6){
        hasil1 = hasil1+1;
        document.getElementById("op7").className += " salah";
        document.getElementById("benar1").style.display = " none";
        document.querySelector('.pembahasan1').className = document.querySelector('.pembahasan1').className.replace(' hilang', '');
        for(let i=0;i<ul1.children.length;i++){
            ul1.children[i].style.pointerEvents="none";
        }
    }
    console.log(hasil1);
    if(hasil1 == 2){
        document.querySelector('.lanjutM').className = document.querySelector('.lanjutM').className.replace(' hilang', '');
        document.querySelector('.tombol').className = document.querySelector('.tombol').className.replace(' hilang', '');
    }
    if(hasil == 1 && hasil1 == 1){
        document.querySelector('.lanjutM').className = document.querySelector('.lanjutM').className.replace(' hilang', '');
        document.querySelector('.tombol').className = document.querySelector('.tombol').className.replace(' hilang', '');
    }
}

function ulang(){
    for(let i=0;i<ul.children.length;i++){
        ul.children[i].style.pointerEvents="auto";
        ul.children[i].className='op'+[i+1];
    }
    for(let i=0;i<ul1.children.length;i++){
        ul1.children[i].style.pointerEvents="auto";
        ul1.children[i].className='op'+[i+1];
    }
    hasil1 = 0;
    hasil = 0;
    document.querySelector('.lanjutM').className += " hilang";
    document.querySelector('.pembahasan').className += " hilang";
    document.querySelector('.pembahasan1').className += " hilang";
    document.querySelector('.tombol').className += " hilang";
    document.getElementById("benar").style.display = " inline-block";
    document.getElementById("salah").style.display = " inline-block";
    document.getElementById("benar1").style.display = " inline-block";
    document.getElementById("salah1").style.display = " inline-block";
}