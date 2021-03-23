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


function readlah() {
    let kuisku = document.getElementById('SelectKuis');

    if (kuisku.value == "1") {

    var task = firebase.database().ref("hasil1/");
    let tmp = document.getElementById('IsiKuis');
    tmp.innerHTML = "";
    kelasnya = document.getElementById('SelectKelas');
    sekolah = document.getElementById('SelectSekolah');
    let kelasfix = '';
    let sekolahfix = '';

    if (kelasnya.value == "1") {
        kelasfix = "7A";
    } else if (kelasnya.value == "2") {
        kelasfix = "7B";
    }

    if (sekolah.value == "1") {
        sekolahfix = "SMP Mantap";
    } else if (sekolah.value == "2") {
        sekolahfix = "SMP Sukses";
    }
    console.log(sekolahfix);
    if ((sekolahfix != '') && (kelasfix != '')) {
        let jwbfixx = [];

        let jwb2 = ["a", "a", "b", "a", "b", "a", "b", "c", "d", "b"];
    
        let hhh = `<tr><td class="nah" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < jwb2.length; i++) {
            hhh += `<td class = "nah"> ${jwb2[i]}</td>`;
        }
        hhh += `</tr>`;
        tmp.innerHTML += hhh;
        jwbfixx = jwb2;

        task.orderByChild("nama").on("child_added", function (data) {

            var taskvalue = data.val();

            if ((sekolahfix == taskvalue.sekolah) && (kelasfix == taskvalue.kelas)) {
                let mm = '';
                mm = `<tr><td >${taskvalue.nama}</td><td >${taskvalue.nilai}</td>`;


                for (let i = 0; i < jwbfixx.length; i++) {
                    if (taskvalue.jawabannya[i] == jwbfixx[i]) {
                        mm += `<td class="benar">${taskvalue.jawabannya[i]}</td>`;
                    } else {
                        mm += `<td class="salah">${taskvalue.jawabannya[i]}</td>`;
                    }
                }
                mm += `</tr>`;
                tmp.innerHTML += mm;
            }

        });

    } else if (sekolahfix != '') {
        let jwbfixx = [];

        let jwb2 = ["a", "a", "b", "a", "b", "a", "b", "c", "d", "b"];
    
        let hhh = `<tr><td class="nah" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < jwb2.length; i++) {
            hhh += `<td class = "nah"> ${jwb2[i]}</td>`;
        }
        hhh += `</tr>`;
        tmp.innerHTML += hhh;
        jwbfixx = jwb2;

        task.orderByChild("nama").on("child_added", function (data) {
            var taskvalue = data.val();

            let mm = '';
            mm = `<tr><td >${taskvalue.nama}</td><td >${taskvalue.nilai}</td>`;
            // console.log(taskvalue.jawabannya[0]);


            for (let i = 0; i < jwbfixx.length; i++) {
                if (taskvalue.jawabannya[i] == jwbfixx[i]) {
                    mm += `<td class="benar">${taskvalue.jawabannya[i]}</td>`;
                } else {
                    mm += `<td class="salah">${taskvalue.jawabannya[i]}</td>`;
                }
            }
            mm += `</tr>`;
            tmp.innerHTML += mm;
        });

    } else {
        alert('Tentukan filter pencarian');
    }
    } 
    
    else if(kuisku.value == "2") {

        var task = firebase.database().ref("hasil2/");
        let tmp = document.getElementById('IsiKuis');
        tmp.innerHTML = "";
        kelasnya = document.getElementById('SelectKelas');
        sekolah = document.getElementById('SelectSekolah');
        let kelasfix = '';
        let sekolahfix = '';
    
        if (kelasnya.value == "1") {
            kelasfix = "7A";
        } else if (kelasnya.value == "2") {
            kelasfix = "7B";
        }
    
        if (sekolah.value == "1") {
            sekolahfix = "SMP Mantap";
        } else if (sekolah.value == "2") {
            sekolahfix = "SMP Sukses";
        }
        console.log(sekolahfix);
        if ((sekolahfix != '') && (kelasfix != '')) {
            let jwbfixx = [];
    
            let jwb2 = ["b", "c", "b", "a", "b", "a", "a", "a", "c", "b"];
        
            let hhh = `<tr><td class="nah" colspan="2">Kunci Jawaban </td>`;
            for (let i = 0; i < jwb2.length; i++) {
                hhh += `<td class = "nah"> ${jwb2[i]}</td>`;
            }
            hhh += `</tr>`;
            tmp.innerHTML += hhh;
            jwbfixx = jwb2;
    
            task.orderByChild("nama").on("child_added", function (data) {
    
                var taskvalue = data.val();
    
                if ((sekolahfix == taskvalue.sekolah) && (kelasfix == taskvalue.kelas)) {
                    let mm = '';
                    mm = `<tr><td >${taskvalue.nama}</td><td >${taskvalue.nilai}</td>`;
    
    
                    for (let i = 0; i < jwbfixx.length; i++) {
                        if (taskvalue.jawabannya[i] == jwbfixx[i]) {
                            mm += `<td class="benar">${taskvalue.jawabannya[i]}</td>`;
                        } else {
                            mm += `<td class="salah">${taskvalue.jawabannya[i]}</td>`;
                        }
                    }
                    mm += `</tr>`;
                    tmp.innerHTML += mm;
                }
    
            });
    
        } else if (sekolahfix != '') {
            let jwbfixx = [];
    
            let jwb2 = ["b", "c", "b", "a", "b", "a", "a", "a", "c", "b"];
        
            let hhh = `<tr><td class="nah" colspan="2">Kunci Jawaban </td>`;
            for (let i = 0; i < jwb2.length; i++) {
                hhh += `<td class = "nah"> ${jwb2[i]}</td>`;
            }
            hhh += `</tr>`;
            tmp.innerHTML += hhh;
            jwbfixx = jwb2;
    
            task.orderByChild("nama").on("child_added", function (data) {
                var taskvalue = data.val();
    
                let mm = '';
                mm = `<tr><td >${taskvalue.nama}</td><td >${taskvalue.nilai}</td>`;
                // console.log(taskvalue.jawabannya[0]);
    
    
                for (let i = 0; i < jwbfixx.length; i++) {
                    if (taskvalue.jawabannya[i] == jwbfixx[i]) {
                        mm += `<td class="benar">${taskvalue.jawabannya[i]}</td>`;
                    } else {
                        mm += `<td class="salah">${taskvalue.jawabannya[i]}</td>`;
                    }
                }
                mm += `</tr>`;
                tmp.innerHTML += mm;
            });
    
        } else {
            alert('Tentukan filter pencarian');
        }
    } 
    
    else if(kuisku.value == "3") {

        var task = firebase.database().ref("hasil3/");
        let tmp = document.getElementById('IsiKuis');
        tmp.innerHTML = "";
        kelasnya = document.getElementById('SelectKelas');
        sekolah = document.getElementById('SelectSekolah');
        let kelasfix = '';
        let sekolahfix = '';

        if (kelasnya.value == "1") {
            kelasfix = "7A";
        } else if (kelasnya.value == "2") {
            kelasfix = "7B";
        }

        if (sekolah.value == "1") {
            sekolahfix = "SMP Mantap";
        } else if (sekolah.value == "2") {
            sekolahfix = "SMP Sukses";
        }

        if ((sekolahfix != '') && (kelasfix != '')) {
            task.orderByChild("nama").on("child_added", function (data) {
                var taskvalue = data.val();


                if ((sekolahfix == taskvalue.sekolah) && (kelasfix == taskvalue.kelas)) {
                    tmp.innerHTML += `<tr>
                                <td class="ukr1">${taskvalue.sekolah}</td>
                                <td class="ukr3">${taskvalue.kelas}</td>
                                <td class="ukr1">${taskvalue.nama}</td>
                                <td class="ukr3">${taskvalue.nilai}</td>
                                <td class="ukr2">${taskvalue.hari}</td>
                                <td class="ukr2">${taskvalue.waktu}</td>
                            </tr>`;
                }
            });

        } else if (sekolahfix != '') {
            task.orderByChild("nama").on("child_added", function (data) {
                var taskvalue = data.val();


                if ((sekolahfix == taskvalue.sekolah)) {
                    tmp.innerHTML += `<tr>
                                <td class="ukr1">${taskvalue.sekolah}</td>
                                <td class="ukr3">${taskvalue.kelas}</td>
                                <td class="ukr1">${taskvalue.nama}</td>
                                <td class="ukr3">${taskvalue.nilai}</td>
                                <td class="ukr2">${taskvalue.hari}</td>
                                <td class="ukr2">${taskvalue.waktu}</td>
                            </tr>`;
                }
            });

        } else {
            alert('Tentukan filter pencarian');
        }
    } else{
        alert('tentukan filter kuis!');
    }

}

window.onload = function () {
    kelasnya = document.getElementById('SelectKelas');
    sekolah = document.getElementById('SelectSekolah');
    kelasnya.value = value = "0";
    sekolah.value = value = "0";
}



// download data

let download = document.querySelector('.pilDownload');
download.addEventListener('click', function () {
    var data_type = 'data:application/vnd.ms-excel';
    var table_div = document.getElementById('table_wrapper');
    var table_html = table_div.outerHTML.replace(/ /g, '%20');

    var a = document.createElement('a');
    a.href = data_type + ', ' + table_html;
    a.download = 'exported_table_' + Math.floor((Math.random() * 9999999) + 1000000) + '.xls';
    a.click();
});