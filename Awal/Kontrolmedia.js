  // Your web app's Firebase configuration
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

var id =0;
var kun = document.querySelector('.btnkunci');
var terkun = document.querySelector('.btntkunci');
var kun1 = document.querySelector('.btnkunci1');
var terkun1 = document.querySelector('.btntkunci1');
var kun2 = document.querySelector('.btnkunci2');
var terkun2 = document.querySelector('.btntkunci2');

kun.addEventListener('click', function (){
  id = 0;
    var task = firebase.database().ref('kontrol/'+id).set({
    Nama: 'kuis1',
    Nilai: 1,
    Id: 13
  });
  kun.className += " hidup";
  terkun.className = terkun.className.replace(' hidup', '');
});

kun1.addEventListener('click', function(){
  id = 1;
  var task = firebase.database().ref('kontrol/'+id).set({
    Nama: "kuis2",
    Nilai: 1,
    Id: 14
  });
  kun1.className += " hidup";
  terkun1.className = terkun1.className.replace(' hidup', '');
});

kun2.addEventListener('click', function(){
  id = 2;
  var task = firebase.database().ref('kontrol/'+id).set({
    Nama: "kuis3",
    Nilai: 1,
    Id: 15
  })
  kun2.className += " hidup";
  terkun2.className = terkun2.className.replace(' hidup', '');
})

terkun.addEventListener('click', function(){
  id = 0;
  var task = firebase.database().ref('kontrol/'+id).update({
      Nilai:0
  });
  terkun.className += " hidup";
  kun.className = kun.className.replace(' hidup', '');
});

terkun1.addEventListener('click', function(){
  id = 1;
  var task = firebase.database().ref('kontrol/'+id).update({
    Nilai:0
});
  terkun1.className += " hidup";
  kun1.className = kun.className.replace(' hidup', '');
});

terkun2.addEventListener('click', function(){
  id = 2;
  var task = firebase.database().ref('kontrol/'+id).update({
    Nilai:0
  });
  terkun2.className += " hidup";
  kun2.className = kun2.className.replace(' hidup', '');
});

function aktif(){
  var task = firebase.database().ref('kontrol/');

  task.on("child_added", function (data) {
      var nilai = data.val();
      console.log(nilai.Id);
      if ((nilai.Id == 13) && (nilai.Nilai == 1)){
          kun.className += " hidup";
          terkun.className = terkun.className.replace(' hidup', '');
      }
      else if ((nilai.Id == 13) && (nilai.Nilai == 0)){
          terkun.className += " hidup";
          kun.className = kun.className.replace(' hidup', '');
      }
      else if ((nilai.Id == 14) && (nilai.Nilai == 1)){
          kun1.className += " hidup";
          terkun1.className = terkun1.className.replace(' hidup', '');
      }
      else if ((nilai.Id == 14) && (nilai.Nilai == 0)){
          terkun1.className += " hidup";
          kun1.className = kun1.className.replace(' hidup', '');
      }
      else if ((nilai.Id == 15) && (nilai.Nilai == 1)){
          kun2.className += " hidup";
          terkun2.className = terkun2.className.replace(' hidup','');
      }
      else if ((nilai.Id == 15) && (nilai.Nilai == 0)){
          terkun2.className += " hidup";
          kun2.className = kun2.className.replace(' hidup','');
      }
  });
}
