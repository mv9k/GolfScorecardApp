/**
 * Created by kris on 10/29/15.
 */


function saveData() {
    localStorage.setItem("player1name", document.getElementById("player1").value);
    localStorage.setItem("player1hole1", document.getElementById("player1hole1").value);
    localStorage.setItem("player1hole2", document.getElementById("player1hole2").value);
    localStorage.setItem("player1hole3", document.getElementById("player1hole3").value);
    localStorage.setItem("player1hole4", document.getElementById("player1hole4").value);
    localStorage.setItem("player1hole5", document.getElementById("player1hole5").value);
    localStorage.setItem("player1hole6", document.getElementById("player1hole6").value);
    localStorage.setItem("player1hole7", document.getElementById("player1hole7").value);
    localStorage.setItem("player1hole8", document.getElementById("player1hole8").value);
    localStorage.setItem("player1hole9", document.getElementById("player1hole9").value);
    localStorage.setItem("player1hole10", document.getElementById("player1hole10").value);
    localStorage.setItem("player1hole11", document.getElementById("player1hole11").value);
    localStorage.setItem("player1hole12", document.getElementById("player1hole12").value);
    localStorage.setItem("player1hole13", document.getElementById("player1hole13").value);
    localStorage.setItem("player1hole14", document.getElementById("player1hole14").value);
    localStorage.setItem("player1hole15", document.getElementById("player1hole15").value);
    localStorage.setItem("player1hole16", document.getElementById("player1hole16").value);
    localStorage.setItem("player1hole17", document.getElementById("player1hole17").value);
    localStorage.setItem("player1hole18", document.getElementById("player1hole18").value);
    localStorage.setItem("player1totalscore", document.getElementById("player1totalscore").innerText);

    localStorage.setItem("player2name", document.getElementById("player2").value);
    localStorage.setItem("player2hole1", document.getElementById("player2hole1").value);
    localStorage.setItem("player2hole2", document.getElementById("player2hole2").value);
    localStorage.setItem("player2hole3", document.getElementById("player2hole3").value);
    localStorage.setItem("player2hole4", document.getElementById("player2hole4").value);
    localStorage.setItem("player2hole5", document.getElementById("player2hole5").value);
    localStorage.setItem("player2hole6", document.getElementById("player2hole6").value);
    localStorage.setItem("player2hole7", document.getElementById("player2hole7").value);
    localStorage.setItem("player2hole8", document.getElementById("player2hole8").value);
    localStorage.setItem("player2hole9", document.getElementById("player2hole9").value);
    localStorage.setItem("player2hole10", document.getElementById("player2hole10").value);
    localStorage.setItem("player2hole11", document.getElementById("player2hole11").value);
    localStorage.setItem("player2hole12", document.getElementById("player2hole12").value);
    localStorage.setItem("player2hole13", document.getElementById("player2hole13").value);
    localStorage.setItem("player2hole14", document.getElementById("player2hole14").value);
    localStorage.setItem("player2hole15", document.getElementById("player2hole15").value);
    localStorage.setItem("player2hole16", document.getElementById("player2hole16").value);
    localStorage.setItem("player2hole17", document.getElementById("player2hole17").value);
    localStorage.setItem("player2hole18", document.getElementById("player2hole18").value);
    localStorage.setItem("player2totalscore", document.getElementById("player2totalscore").innerText);

    localStorage.setItem("player3name", document.getElementById("player3").value);
    localStorage.setItem("player3hole1", document.getElementById("player3hole1").value);
    localStorage.setItem("player3hole2", document.getElementById("player3hole2").value);
    localStorage.setItem("player3hole3", document.getElementById("player3hole3").value);
    localStorage.setItem("player3hole4", document.getElementById("player3hole4").value);
    localStorage.setItem("player3hole5", document.getElementById("player3hole5").value);
    localStorage.setItem("player3hole6", document.getElementById("player3hole6").value);
    localStorage.setItem("player3hole7", document.getElementById("player3hole7").value);
    localStorage.setItem("player3hole8", document.getElementById("player3hole8").value);
    localStorage.setItem("player3hole9", document.getElementById("player3hole9").value);
    localStorage.setItem("player3hole10", document.getElementById("player3hole10").value);
    localStorage.setItem("player3hole11", document.getElementById("player3hole11").value);
    localStorage.setItem("player3hole12", document.getElementById("player3hole12").value);
    localStorage.setItem("player3hole13", document.getElementById("player3hole13").value);
    localStorage.setItem("player3hole14", document.getElementById("player3hole14").value);
    localStorage.setItem("player3hole15", document.getElementById("player3hole15").value);
    localStorage.setItem("player3hole16", document.getElementById("player3hole16").value);
    localStorage.setItem("player3hole17", document.getElementById("player3hole17").value);
    localStorage.setItem("player3hole18", document.getElementById("player3hole18").value);
    localStorage.setItem("player3totalscore", document.getElementById("player3totalscore").innerText);

    localStorage.setItem("player4name", document.getElementById("player4").value);
    localStorage.setItem("player4hole1", document.getElementById("player4hole1").value);
    localStorage.setItem("player4hole2", document.getElementById("player4hole2").value);
    localStorage.setItem("player4hole3", document.getElementById("player4hole3").value);
    localStorage.setItem("player4hole4", document.getElementById("player4hole4").value);
    localStorage.setItem("player4hole5", document.getElementById("player4hole5").value);
    localStorage.setItem("player4hole6", document.getElementById("player4hole6").value);
    localStorage.setItem("player4hole7", document.getElementById("player4hole7").value);
    localStorage.setItem("player4hole8", document.getElementById("player4hole8").value);
    localStorage.setItem("player4hole9", document.getElementById("player4hole9").value);
    localStorage.setItem("player4hole10", document.getElementById("player4hole10").value);
    localStorage.setItem("player4hole11", document.getElementById("player4hole11").value);
    localStorage.setItem("player4hole12", document.getElementById("player4hole12").value);
    localStorage.setItem("player4hole13", document.getElementById("player4hole13").value);
    localStorage.setItem("player4hole14", document.getElementById("player4hole14").value);
    localStorage.setItem("player4hole15", document.getElementById("player4hole15").value);
    localStorage.setItem("player4hole16", document.getElementById("player4hole16").value);
    localStorage.setItem("player4hole17", document.getElementById("player4hole17").value);
    localStorage.setItem("player4hole18", document.getElementById("player4hole18").value);
    localStorage.setItem("player4totalscore", document.getElementById("player4totalscore").innerText);
}
function loadData() {
    document.getElementById("player1").value = localStorage.getItem("player1name");
    document.getElementById("player1hole1").value = localStorage.getItem("player1hole1");
    document.getElementById("player1hole2").value = localStorage.getItem("player1hole2");
    document.getElementById("player1hole3").value = localStorage.getItem("player1hole3");
    document.getElementById("player1hole4").value = localStorage.getItem("player1hole4");
    document.getElementById("player1hole5").value = localStorage.getItem("player1hole5");
    document.getElementById("player1hole6").value = localStorage.getItem("player1hole6");
    document.getElementById("player1hole7").value = localStorage.getItem("player1hole7");
    document.getElementById("player1hole8").value = localStorage.getItem("player1hole8");
    document.getElementById("player1hole9").value = localStorage.getItem("player1hole9");
    document.getElementById("player1hole10").value = localStorage.getItem("player1hole10");
    document.getElementById("player1hole11").value = localStorage.getItem("player1hole11");
    document.getElementById("player1hole12").value = localStorage.getItem("player1hole12");
    document.getElementById("player1hole13").value = localStorage.getItem("player1hole13");
    document.getElementById("player1hole14").value = localStorage.getItem("player1hole14");
    document.getElementById("player1hole15").value = localStorage.getItem("player1hole15");
    document.getElementById("player1hole16").value = localStorage.getItem("player1hole16");
    document.getElementById("player1hole17").value = localStorage.getItem("player1hole17");
    document.getElementById("player1hole18").value = localStorage.getItem("player1hole18");
    document.getElementById("player1totalscore").innerText = localStorage.getItem("player1totalscore");

    document.getElementById("player2").value = localStorage.getItem("player2name");
    document.getElementById("player2hole1").value = localStorage.getItem("player2hole1");
    document.getElementById("player2hole2").value = localStorage.getItem("player2hole2");
    document.getElementById("player2hole3").value = localStorage.getItem("player2hole3");
    document.getElementById("player2hole4").value = localStorage.getItem("player2hole4");
    document.getElementById("player2hole5").value = localStorage.getItem("player2hole5");
    document.getElementById("player2hole6").value = localStorage.getItem("player2hole6");
    document.getElementById("player2hole7").value = localStorage.getItem("player2hole7");
    document.getElementById("player2hole8").value = localStorage.getItem("player2hole8");
    document.getElementById("player2hole9").value = localStorage.getItem("player2hole9");
    document.getElementById("player2hole10").value = localStorage.getItem("player2hole10");
    document.getElementById("player2hole11").value = localStorage.getItem("player2hole11");
    document.getElementById("player2hole12").value = localStorage.getItem("player2hole12");
    document.getElementById("player2hole13").value = localStorage.getItem("player2hole13");
    document.getElementById("player2hole14").value = localStorage.getItem("player2hole14");
    document.getElementById("player2hole15").value = localStorage.getItem("player2hole15");
    document.getElementById("player2hole16").value = localStorage.getItem("player2hole16");
    document.getElementById("player2hole17").value = localStorage.getItem("player2hole17");
    document.getElementById("player2hole18").value = localStorage.getItem("player2hole18");
    document.getElementById("player2totalscore").innerText = localStorage.getItem("player2totalscore");

    document.getElementById("player3").value = localStorage.getItem("player3name");
    document.getElementById("player3hole1").value = localStorage.getItem("player3hole1");
    document.getElementById("player3hole2").value = localStorage.getItem("player3hole2");
    document.getElementById("player3hole3").value = localStorage.getItem("player3hole3");
    document.getElementById("player3hole4").value = localStorage.getItem("player3hole4");
    document.getElementById("player3hole5").value = localStorage.getItem("player3hole5");
    document.getElementById("player3hole6").value = localStorage.getItem("player3hole6");
    document.getElementById("player3hole7").value = localStorage.getItem("player3hole7");
    document.getElementById("player3hole8").value = localStorage.getItem("player3hole8");
    document.getElementById("player3hole9").value = localStorage.getItem("player3hole9");
    document.getElementById("player3hole10").value = localStorage.getItem("player3hole10");
    document.getElementById("player3hole11").value = localStorage.getItem("player3hole11");
    document.getElementById("player3hole12").value = localStorage.getItem("player3hole12");
    document.getElementById("player3hole13").value = localStorage.getItem("player3hole13");
    document.getElementById("player3hole14").value = localStorage.getItem("player3hole14");
    document.getElementById("player3hole15").value = localStorage.getItem("player3hole15");
    document.getElementById("player3hole16").value = localStorage.getItem("player3hole16");
    document.getElementById("player3hole17").value = localStorage.getItem("player3hole17");
    document.getElementById("player3hole18").value = localStorage.getItem("player3hole18");
    document.getElementById("player3totalscore").innerText = localStorage.getItem("player3totalscore");

    document.getElementById("player4").value = localStorage.getItem("player4name");
    document.getElementById("player4hole1").value = localStorage.getItem("player4hole1");
    document.getElementById("player4hole2").value = localStorage.getItem("player4hole2");
    document.getElementById("player4hole3").value = localStorage.getItem("player4hole3");
    document.getElementById("player4hole4").value = localStorage.getItem("player4hole4");
    document.getElementById("player4hole5").value = localStorage.getItem("player4hole5");
    document.getElementById("player4hole6").value = localStorage.getItem("player4hole6");
    document.getElementById("player4hole7").value = localStorage.getItem("player4hole7");
    document.getElementById("player4hole8").value = localStorage.getItem("player4hole8");
    document.getElementById("player4hole9").value = localStorage.getItem("player4hole9");
    document.getElementById("player4hole10").value = localStorage.getItem("player4hole10");
    document.getElementById("player4hole11").value = localStorage.getItem("player4hole11");
    document.getElementById("player4hole12").value = localStorage.getItem("player4hole12");
    document.getElementById("player4hole13").value = localStorage.getItem("player4hole13");
    document.getElementById("player4hole14").value = localStorage.getItem("player4hole14");
    document.getElementById("player4hole15").value = localStorage.getItem("player4hole15");
    document.getElementById("player4hole16").value = localStorage.getItem("player4hole16");
    document.getElementById("player4hole17").value = localStorage.getItem("player4hole17");
    document.getElementById("player4hole18").value = localStorage.getItem("player4hole18");
    document.getElementById("player4totalscore").innerText = localStorage.getItem("player4totalscore");
}





function onload() {


    loadData();

    setPars();

    document.getElementById("player1card").style.display= "block";
    document.getElementById("player2card").style.display= "none";
    document.getElementById("player3card").style.display= "none";
    document.getElementById("player4card").style.display= "none";

    document.getElementById("coursename").innerHTML =  model.course.name;



// Oct 29th
    function newPlayer(name) {
    }


    //

    var redirectURI = document.URL;
    var clientID = "81e49374-2d9e-40b6-810b-abc0726f39b1";
    var swingBySwing = "https://api.swingbyswing.com/v2/oauth/authorize?scope=read&redirect_uri=" + encodeURI(redirectURI) + "&response_type=token&client_id=" + clientID;

    accessToken = getUrlVars().access_token;

    if(accessToken == null) {
        location.replace(swingBySwing);
    }
    else {
        accessToken = accessToken.replace("\n","");
        model=loadDoc(48222);
//        loadDoc();

    }
    function getUrlVars() {
        var vars= {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
            function(m,key,value) {
                vars[key] = value;
            });
        return vars;
    }
}

function numOfPlayers(num) {
    if (num == 1){
        document.getElementById("player1card").style.display= "block";
        document.getElementById("player2card").style.display= "none";
        document.getElementById("player3card").style.display= "none";
        document.getElementById("player4card").style.display= "none";
    }
    if (num == 2){
        document.getElementById("player1card").style.display= "none";
        document.getElementById("player2card").style.display= "block";
        document.getElementById("player3card").style.display= "none";
        document.getElementById("player4card").style.display= "none";
    }
    if (num == 3){
        document.getElementById("player1card").style.display= "none";
        document.getElementById("player2card").style.display= "none";
        document.getElementById("player3card").style.display= "block";
        document.getElementById("player4card").style.display= "none";
    }
    if (num == 4) {
        document.getElementById("player1card").style.display= "none";
        document.getElementById("player2card").style.display= "none";
        document.getElementById("player3card").style.display= "none";
        document.getElementById("player4card").style.display= "block";
    }

}


// AJAX request with swingbyswing API
//var model;
//var long, hole1location, tee1location;
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            model = JSON.parse(xhttp.responseText);
            // TODO: oct 28th
            var long = model.course.location;
            //
            hole1location = model.course.holes[0].green_location;
            var tee1location = model.course.holes[0].tee_boxes[0].location;
//            var hole1MiddleLat = (tee1location.lat + hole1location.lat)/2;
//            var hole1MiddleLng = (tee1location.lng + hole1Latlng.lng)/2;
//            var hole1MiddleLatLng = {"lat":hole1MiddleLat, "lng":hole1MiddleLng};
            initMap(long, hole1location, tee1location);

            // TODO: oct 28th
            document.getElementById("coursename").innerHTML = model.course.name;
            console.log(long);
            //
        }
    };
    xhttp.open("GET", "https://api.swingbyswing.com/v2/courses/"+48222+"?includes=practice_area,nearby_courses,recent_media,recent_comments,recent_rounds,best_rounds,current_rounds,course_stats_month,course_stats_year&access_token=" + accessToken, true);
    xhttp.send();
}


function initMap(long, hole1location, tee1location) {
    if(long==null){return}

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: long,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    var hole1 = new google.maps.Marker({
        position: hole1location,
        map: map,
        title: 'Hole 1',
        icon: 'Hole.png'
    });

    var teehole1 = new google.maps.Marker({
        position: tee1location,
        map: map,
        title: 'Tee 1'

    });

}

function setPars() {
    document.getElementsByName("player1hole1")[0].placeholder = "Par " + model.course.name;
}




