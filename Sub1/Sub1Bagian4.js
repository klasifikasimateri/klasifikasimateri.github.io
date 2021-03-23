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