let btnP = document.querySelector('.bntPetunjuk');
let btnM = document.querySelector('.bntmedia');
let Media = document.querySelector('.media');
let petunjuk = document.querySelector('.petunjuk');
let ket = document.getElementById("Ket");
btnP.addEventListener('click', function(){
    if(btnP.className.indexOf('aktif') == -1){
        btnP.className += ' aktif';
        Media.className += ' hilang';
        btnM.className = btnM.className.replace('aktif', '');
        petunjuk.className = petunjuk.className.replace('hilang', '');
        ket.innerHTML = "<center><h2> Petunjuk aplikasi </h2></center>";
    }
});
btnM.addEventListener('click', function(){
    if(btnM.className.indexOf('aktif') == -1){
        btnM.className += ' aktif';
        petunjuk.className += ' hilang';
        btnP.className = btnP.className.replace('aktif', '');
        Media.className = Media.className.replace('hilang', '');
        ket.innerHTML = "<center><h2> Media </h2></center>";
    }
});