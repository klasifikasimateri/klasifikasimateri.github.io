// terhubung firebase
var firebaseConfig = {
    apiKey: "AIzaSyB0bAe7d75VJpsX-flKh6jdwcR-X01LqCQ",
    authDomain: "bebasja-f1621.firebaseapp.com",
    databaseURL: "https://bebasja-f1621.firebaseio.com",
    projectId: "bebasja-f1621",
    storageBucket: "bebasja-f1621.appspot.com",
    messagingSenderId: "448690320953",
    appId: "1:448690320953:web:8c88f7b4230b74aa7a7fe8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// window.onbeforeunload = function(event) {
//     return event.returnValue = "Semua yang anda kerjakan akan terulang, apakah anda yakin?";
// }

let home_klik = document.querySelector('.nk a');
home_klik.addEventListener('click', function (e) {
    e.preventDefault(e);
    let tanya = confirm("Yakin ingin meninggalkan halaman");
    if (tanya) {
        window.location = home_klik.href;
        sessionStorage.removeItem('nama');
        sessionStorage.removeItem('kelas');
        sessionStorage.removeItem('sekolah');
            for(var i = 0; i < 10; i++){
                sessionStorage.removeItem('JawabanU'+i);
            }
    } else {

    }
});

let kembali_materi = document.querySelector('.kembali a');
kembali_materi.addEventListener('click', function(e){
    e.preventDefault(e);
    let tanya = confirm("Yakin ingin meninggalkan halaman");
    if (tanya) {
        window.location = kembali_materi.href;
    }else{

    }
});

var namaS = sessionStorage.getItem('nama');
var kelasS = sessionStorage.getItem('kelas');
var sekolahS = sessionStorage.getItem('sekolah');

function aktif(){
    var id =0;
    var task = firebase.database().ref('kontrol/');
    var tmp = document.querySelector('body');

    task.on("child_added", function (data) {
        var nilai = data.val();

        if ((nilai.Id == 13) && (nilai.Nilai == 1)){
            tmp.innerHTML = '<div class="full"> <p> Halaman terkunci, silahkan tekan kembali untuk ke halaman sebelumnya. </p> <br> <button class="back" ><a href="Sub1Bagian1.html"> Kembali </a><button> </div>';
        }else{
            if(namaS != null && kelasS != null && sekolahS != null){
                let awal = document.getElementById("kuis0");
                awal.classList.remove("hilang");
                document.getElementById("data").style.display="none";
                let awal1 = document.getElementById("Kuisku");
                awal1.classList.remove("hilang");
                let awal2 = document.getElementById("awalan");
                awal2.classList.remove("awalan");
                if(awal2.className.indexOf("Formkuis") == -1){
                    awal2.className += "Formkuis";
                }
        
                nama = namaS;
                sekolahmu = sekolahS;
                kelasmu = kelasS;
            }
        }
    });
}

let petunjunya = document.querySelectorAll('.tujuanP');
let isinya = document.querySelectorAll('.tujuan');
for (let i = 0; i < petunjunya.length; i++) {
    petunjunya[i].addEventListener('click', function () {
        if (isinya[i].className.indexOf('hilang') == -1) {
            isinya[i].className += ' hilang';
        } else {
            isinya[i].className = isinya[i].className.replace('hilang', '');
        }
    })
}

let mulai = document.querySelector('.lanjut');
let nama = document.getElementById("nama");
let sekolah = document.getElementById("sekolah");
let kelas = document.getElementById("kelas");
let soalku = [];
let indiator = 0;
let sekolahmu = "";
let kelasmu = "";
let namamu = "";

mulai.addEventListener('click', function (){
    if(nama.value == ""){
        nama.style.borderColor="red";
        indiator +=1;
    }else{
        nama.style.borderColor="black";
        namamu = nama.value;
        sessionStorage.setItem('nama', namamu);
    }
    if(sekolah.value == "0"){
        sekolah.style.borderColor="red";
        indiator +=1;
    }else if(sekolah.value == "1"){
        sekolah.style.borderColor="black";
        sekolahmu = "SMPN 1 Gambut";
        sessionStorage.setItem('sekolah', sekolahmu);
    }else if(sekolah.value == "2"){
        sekolah.style.borderColor="black";
        sekolahmu = "SMP Sukses";
    }
    if(kelas.value == "0"){
        kelas.style.borderColor="red";
        indiator+=1;
    }else if(kelas.value == "1"){
        kelas.style.borderColor="black";
        kelasmu = "7F";
        sessionStorage.setItem('kelas', kelasmu);
    }else if(kelas.value == "2"){
        kelas.style.borderColor="black";
        kelasmu = "7G";
        sessionStorage.setItem('kelas', kelasmu);
    }

    if(indiator == 0){
        let awal = document.getElementById("kuis0");
        awal.classList.remove("hilang");
        document.getElementById("data").style.display="none";
        let awal1 = document.getElementById("Kuisku");
        awal1.classList.remove("hilang");
        let awal2 = document.getElementById("awalan");
        awal2.classList.remove("awalan");
        awal2.className += "Formkuis";
    }
    else{
        alert("Lengkapi data diri anda!")
        indiator = 0;
    }
});


let dat = new XMLHttpRequest();
dat.onreadystatechange = function () {
    var txt = " ";
    cek = [];
    jwb_benar = [];
    var no=0;
    hasilakhir = 0;
    benarr = 0;
    salahh = 0;

    if (dat.readyState == 4 && dat.status == 200) {
        let dataku = JSON.parse(this.responseText);

        var SoalR = sessionStorage.getItem('SoalR');

        if(SoalR != null){
            let soal_navnya = document.querySelectorAll('.S1Nav');
            var SoalS = SoalR.split(',');
            var pilihanS = [];

            cek = Array.from(new Set(SoalS));

            setTimeout(function(){ 
                for(var p = 0; p < 10; p++){

                    pilihanS.push(sessionStorage.getItem('JawabanU'+p));

                    if(pilihanS != null){
                        var pilihanU = ('input[name="soal' + SoalS[p] + '"][value="' + pilihanS[p] + '"]');

                        if(document.querySelector(pilihanU) != null){
                            document.querySelector(pilihanU).checked = true;
                            soal_navnya[p].className = soal_navnya[p].className.replace("putih", " hijau");
                            namamu = nama;
                        }else{

                        }
                    }
                }
            }, 3000);
        }else{
            //random urutan
            for (var x = 0; x < 100; x++) {
                // acak angka dengan batas length.data dan minimum 0
                var random = Math.floor(Math.random() * dataku.length) + 0;
                cek.push(random);
            }
            cek = Array.from(new Set(cek));
        }

        //pengambilan 10 data
        for (var y = 0; y < 10; y++) {

            var x = cek[y];
            soalku.push(x);

            // season storage
            if(SoalR == null){
                sessionStorage.setItem('SoalR', soalku);
            }

                let soal = dataku[x]['Soal' + x]['pertanyaan'];
                     let a = dataku[x]['Soal' + x]['pilihanA'];
                     let b = dataku[x]['Soal' + x]['pilihanB'];
                     let c = dataku[x]['Soal' + x]['pilihanC'];
                     let d = dataku[x]['Soal' + x]['pilihanD'];
                     let bnr = dataku[x]['Soal' + x]['jawaban'];

            // jawaban array
            jwb_benar.push(bnr);

            no = y+1;
            txt += "<ol start='"+no+"'>";
            txt += "<li>";
            txt += "<p>" + soal + "</p>";
            txt += "</li>";

            txt += "<form name=soall class='soall" + x + "'>";

            txt += "<div class='pilihanJ'>"

            txt += "<label class='pilihan'> <table> <tr>";
            txt += "<td class='cek'> <input id='pilihanku' type=radio name='soal" + x + "' value=a> a. </td>";
            txt += "<td class='cek1'><span class='pil'>"+a+"</span></td></tr></table></label>";

            txt += "<label class='pilihan'> <table> <tr> ";
            txt += "<td class='cek'> <input id='pilihanku' type=radio name='soal" + x + "' value=b> b. </td>";
            txt += "<td class='cek1'><span class='pil'>"+b+"</span></td></tr></table></label>";

            txt += "<label class='pilihan'> <table> <tr> ";
            txt += "<td class='cek'> <input id='pilihanku' type=radio name='soal" + x + "' value=c> c. </td>";
            txt += "<td class='cek1'><span class='pil'>"+c+"</span></td></tr></table></label>";

            txt += "<label class='pilihan'> <table> <tr> ";
            txt += "<td class='cek'> <input id='pilihanku' type=radio name='soal"+ x + "' value=d> d. </td>";
            txt += "<td class='cek1'><span class='pil'>"+d+"</span></td></tr></table></label>";

            txt += "</div>"

            txt += "</form>"

            txt += "<center>"
            if(y == 9){
                txt += "<button type='button' class='nav_belum'>Sebelumnya</button>"
                txt += "<button type='button' class='nav_lanjut disable'>Selanjutnya</button></center>"
            }
            else if(y == 0){
                txt +="<button type='button' class='nav_belum disable'>Sebelumnya</button>"
                txt += "<button type='button' class='nav_lanjut'>Selanjutnya</button></center>"
            }
            else if(y!=0||y!=9){
                txt += "<button type='button' class='nav_belum'>Sebelumnya</button>"
                txt += "<button type='button' class='nav_lanjut'>Selanjutnya</button></center>"
            }

            txt += "</ol>";
            document.getElementById("soal"+y).innerHTML = txt;
            txt = "";

            //warna
            let soallnya = document.querySelectorAll('.pilihanJ');
            let soal_navnya = document.querySelectorAll('.S1Nav');

            for (let i = 0; i < soallnya.length; i++) {
            soallnya[i].addEventListener('click', function () {
                soal_navnya[i].className = soal_navnya[i].className.replace("putih", " hijau");

                let x= cek[i];
                let pil_user = [];
                let form = document.querySelector(".soall"+x);
                let data = new FormData (form);
                let jwb_user = '';
                for (const entry of data) {
                    jwb_user = entry[1];
                    pil_user.push(jwb_user);
                    //sessionstorage
                    sessionStorage.setItem('JawabanU'+i, pil_user);
                }

                });
            }

            //Lanjutsoal
            let lanjut = document.querySelectorAll(".nav_lanjut");
            let hallanjut = document.querySelectorAll(".Formkuis1");
            for (let i = 0; i < lanjut.length - 1; i++) {
                lanjut[i].addEventListener('click', function () {
                    console.log("yes");
                    if(lanjut[i].className.indexOf('disable') == -1){
                        if(hallanjut[i].className.indexOf('hilang') == -1){
                            // menampilkan selanjutnya
                            hallanjut[i + 1].className = hallanjut[i + 1].className.replace("hilang","");
                            // menghilangkan sekarang
                            hallanjut[i].className += " hilang";
                        }
                        // console.log(hallanjut[i+1]);
                    }
                });
            }

            //Sebelumnya
            let belum = document.querySelectorAll(".nav_belum");
            for (let i = 0; i < belum.length; i++) {
                belum[i].addEventListener('click', function () {
                if(belum[i].className.indexOf('disable') == -1){

                    if(hallanjut[i].className.indexOf('hilang') == -1){
                        // menampilkan selanjutnya
                        hallanjut[i - 1].className = hallanjut[i - 1].className.replace("hilang","");
                        // menghilangkan sekarang
                        hallanjut[i].className += " hilang";
                        }
                    }
                });
            }

            //navsoal
            let S1Nav = document.querySelectorAll(".S1Nav");
            for (let i = 0; i < S1Nav.length; i++){
                S1Nav[i].addEventListener('click', function(){
                for(let j = 0; j < hallanjut.length;j++){
                    if(hallanjut[j].className.indexOf('hilang') == -1){
                        hallanjut[j].className += " hilang";
                    }
                }
                hallanjut[i].className = hallanjut[i].className.replace("hilang","");
                });
            }
        }
    }
}
dat.open('GET', 'Kuis.json', true);
dat.send();

function Akhir(){
    var r = confirm("Apakah kamu yakin?");
    if (r == true) {
      skor();
    }
}
function skor(){
    let skor1 = 0;
    let kosong = 0;
    let pil_user = [];
    new_jwb_urut = [];
    new_jwb_urut_no = [];
    for(d=0;d<10;d++){
        let x= cek[d];
        let form = document.querySelector(".soall"+x);
        let data = new FormData (form);
        let jwb_user = '';
        for (const entry of data) {
            jwb_user = entry[1];
            pil_user.push(jwb_user);
            if(jwb_user!=''){
                kosong+=1;
            }
            if(jwb_user==jwb_benar[d]){
                skor1 += 10;
            }
        }
    }
    if(kosong==10){
                
        let akhir = document.getElementById("Kuisku");
        akhir.className += "hilang";
        let formAkhir = document.getElementById("hasilAkhir");
        formAkhir.classList.remove("hilang");
        let namaku = document.getElementById("namamu").innerHTML=namamu;
        let sekolahku = document.getElementById("sekolahmu").innerHTML=sekolahmu;
        let kelasku = document.getElementById("kelasmu").innerHTML=kelasmu;
        let nilaimu = document.getElementById("nilaimu").innerHTML=skor1;
        let waktunya = waktu();
        let harinya = hari();

        sessionStorage.removeItem('nama');
        sessionStorage.removeItem('kelas');
        sessionStorage.removeItem('sekolah');

    for (let i = 0; i < cek.length; i++) {
        for (let j = 0; j < cek.length; j++) {
            if (i == cek[j]) {
                new_jwb_urut.push(pil_user[j]);
                new_jwb_urut_no.push(cek[j]);
            }
        }
        sessionStorage.removeItem('JawabanU'+i);
    }
    createTask(sekolahmu, namamu, kelasmu, skor1, waktunya, harinya, new_jwb_urut);
    }
    else{
        alert("Masih Ada Soal Yang Belum Dijawab!");
    }
}

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

function createTask(sekolah, nama, kelas, nilai, waktunya, hari, jwb) {
    counter += 1;
    var task = {
        id: counter,
        sekolah: sekolah,
        nama: nama,
        kelas: kelas,
        nilai: nilai,
        waktu: waktunya,
        hari: hari,
        jawabannya: jwb
    }

    let db = firebase.database().ref("hasil1/" + counter);
    db.set(task);

}