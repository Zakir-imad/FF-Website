const firebaseConfig = {
  apiKey: "AIzaSyCpXCWVFl1SPJxxaDuJJ81JnNU4IbhrMrI",
  authDomain: "freefire-web-database.firebaseapp.com",
  databaseURL: "https://freefire-web-database-default-rtdb.firebaseio.com",
  projectId: "freefire-web-database",
  storageBucket: "freefire-web-database.appspot.com",
  messagingSenderId: "468910619546",
  appId: "1:468910619546:web:9aa2d5b0e72a1b62a31823",
  measurementId: "G-JFGGC3Z7SW"
};

firebase.initializeApp(firebaseConfig);


firebase.database().ref('Match-Dates/Dates/-Mht6YfqbXDW3O3bMvFQ').once('value').then(function(snapshot){
	var date1 = snapshot.val().Match01;
	var date2 = snapshot.val().Match02;
	var date3 = snapshot.val().Match03;
	var date4 = snapshot.val().Match04;
	var date5 = snapshot.val().Match05;

    document.getElementById('dat1').innerHTML = date1;
    document.getElementById('dat2').innerHTML = date2;
    document.getElementById('dat3').innerHTML = date3;
    document.getElementById('dat4').innerHTML = date4;
    document.getElementById('dat5').innerHTML = date5;
});

firebase.database().ref("Matches/Matches-ID/-Mht7KiBukvNT1hs-0dA").once("value").then(function(snapshot2){
	var id1 = snapshot2.val().Match01ID;
	var id2 = snapshot2.val().Match02ID;
	var id3 = snapshot2.val().Match03ID;
	var id4 = snapshot2.val().Match04ID;
	var id5 = snapshot2.val().Match05ID;

	document.getElementById("id1").innerHTML = id1;
	document.getElementById("id2").innerHTML = id2;
	document.getElementById("id3").innerHTML = id3;
	document.getElementById("id4").innerHTML = id4;
	document.getElementById("id5").innerHTML = id5;

});

firebase.database().ref("Sqauds/Squads-Participating/-Mht6wdwQ_vbwNA_Q-YN").once("value").then(function(snapshot){
   var squad1 = snapshot.val().Match01Squads;
   var squad2 = snapshot.val().Match02Squads;
   var squad3 = snapshot.val().Match03Squads;
   var squad4 = snapshot.val().Match04Squads;
   var squad5 = snapshot.val().Match05Squads;

   document.getElementById("matid1").innerHTML = squad1;
   document.getElementById("matid2").innerHTML = squad2;
   document.getElementById("matid3").innerHTML = squad3;
   document.getElementById("matid4").innerHTML = squad4;
   document.getElementById("matid5").innerHTML = squad5;
});

firebase.database().ref("Winner/Match-Winner/-Mht8-UXHr8LKPSULL2C").once("value").then(function(snapshot){
   var winner1 = snapshot.val().Match01W;
   var winner2 = snapshot.val().Match02W;  
   var winner3 = snapshot.val().Match03W;
   var winner4 = snapshot.val().Match04W;                                                                                                                                                                   
   var winner5 = snapshot.val().Match05W;

   document.getElementById("win1").innerHTML = winner1;
   document.getElementById("win2").innerHTML = winner2;
   document.getElementById("win3").innerHTML = winner3;
   document.getElementById("win4").innerHTML = winner4;
   document.getElementById("win5").innerHTML = winner5;                                                                                                                                                                   
                                                                                                                                                                   
                                                                                                                                                                   
                                                                                                                                                                   
});

