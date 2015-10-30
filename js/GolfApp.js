/**
 * Created by kris on 10/29/15.
 */
document.getElementById("coursename").innerHTML =  model.course.name;

function onload() {

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
        title: 'Hole 1'
    });

    var teehole1 = new google.maps.Marker({
        position: tee1location,
        map: map,
        title: 'Tee 1'

    });

}




