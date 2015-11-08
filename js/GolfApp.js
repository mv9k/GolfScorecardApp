/**
 * Created by kris on 10/29/15.
 */
var scoringEnabled=false, setHole, setTee, holeLoc, teeLoc, playerChoice, player1tee, player2tee, player3tee, player4tee, player1hcpOn=false, player2hcpOn=false, player3hcpOn=false, player4hcpOn=false, p1front9score=0, p2front9score=0, p3front9score=0, p4front9score=0, p1back9score=0, p2back9score=0, p3back9score, p4back9score, p1totalscore, p2totalscore, p3totalscore, p4totalscore,
    p1scoreArr=[p1front9score, p1back9score, p1totalscore], p2scoreArr=[p2front9score, p2back9score, p2totalscore], p3scoreArr=[p3front9score, p3back9score, p3totalscore], p4scoreArr=[p4front9score, p4back9score, p3totalscore];
//////// calls loadScore() depending on player and tee selected, displays totals then calls saveData()
function onClick() {
    if(scoringEnabled){
        // player 1
        if(playerChoice==1 && player1tee==0){
            loadScore(0, 1);
            loadScore(0, 1);
            document.getElementById("p1f9score").innerHTML= "Score: " + p1scoreArr[0];
            document.getElementById("p1b9score").innerHTML= "Score: " + p1scoreArr[1];
            document.getElementById("player1totalscore").innerHTML= p1totalscore;
        }
        if(playerChoice==1 && player1tee==1){
            loadScore(1, 1);
            loadScore(1, 1);
            document.getElementById("p1f9score").innerHTML= "Score: " + p1scoreArr[0];
            document.getElementById("p1b9score").innerHTML= "Score: " + p1scoreArr[1];
            document.getElementById("player1totalscore").innerHTML= p1totalscore;
        }
        // player 2
        if(playerChoice==2 && player2tee==0){
            loadScore(0, 2);
            loadScore(0, 2);
            document.getElementById("p2f9score").innerHTML= "Score: " + p2scoreArr[0];
            document.getElementById("p2b9score").innerHTML= "Score: " + p2scoreArr[1];
            document.getElementById("player2totalscore").innerHTML= p2totalscore;
        }
        if(playerChoice==2 && player2tee==1){
            loadScore(1, 2);
            loadScore(1, 2);
            document.getElementById("p2f9score").innerHTML= "Score: " + p2scoreArr[0];
            document.getElementById("p2b9score").innerHTML= "Score: " + p2scoreArr[1];
            document.getElementById("player2totalscore").innerHTML= p2totalscore;
        }
        // player 3
        if(playerChoice==3 && player3tee==0){
            loadScore(0, 3);
            loadScore(0, 3);
            document.getElementById("p3f9score").innerHTML= "Score: " + p3scoreArr[0];
            document.getElementById("p3b9score").innerHTML= "Score: " + p3scoreArr[1];
            document.getElementById("player3totalscore").innerHTML= p3totalscore;
        }
        if(playerChoice==3 && player3tee==1){
            loadScore(1, 3);
            loadScore(1, 3);
            document.getElementById("p3f9score").innerHTML= "Score: " + p3scoreArr[0];
            document.getElementById("p3b9score").innerHTML= "Score: " + p3scoreArr[1];
            document.getElementById("player3totalscore").innerHTML= p3totalscore;
        }
        // player 4
        if(playerChoice==4 && player4tee==0){
            loadScore(0, 4);
            loadScore(0, 4);
            document.getElementById("p4f9score").innerHTML= "Score: " + p4scoreArr[0];
            document.getElementById("p4b9score").innerHTML= "Score: " + p4scoreArr[1];
            document.getElementById("player4totalscore").innerHTML= p4totalscore;
        }
        if(playerChoice==4 && player4tee==1){
            loadScore(1, 4);
            loadScore(1, 4);
            document.getElementById("p4f9score").innerHTML= "Score: " + p4scoreArr[0];
            document.getElementById("p4b9score").innerHTML= "Score: " + p4scoreArr[1];
            document.getElementById("player4totalscore").innerHTML= p4totalscore;
        }

        saveData();
    }
}
//////// returns score depending on player and handicap.
function loadScore(tee, player) {
    /// player 1 scoring
    if((tee==0 || tee==1) && player==1) {

        p1front9score= ((parseInt(document.getElementById("player1hole1").value, 10)||0) + (parseInt(document.getElementById("player1hole2").value, 10)||0) + (parseInt(document.getElementById("player1hole3").value, 10)||0) + (parseInt(document.getElementById("player1hole4").value, 10)||0) +
                        (parseInt(document.getElementById("player1hole5").value, 10)||0) + (parseInt(document.getElementById("player1hole6").value, 10)||0) + (parseInt(document.getElementById("player1hole7").value, 10)||0) + (parseInt(document.getElementById("player1hole8").value, 10)||0) +
                        (parseInt(document.getElementById("player1hole9").value, 10)||0)) - model.course.tee_types[0].front_nine_par;
        p1back9score= ((parseInt(document.getElementById("player1hole10").value, 10)||0) + (parseInt(document.getElementById("player1hole11").value, 10)||0) + (parseInt(document.getElementById("player1hole12").value, 10)||0) + (parseInt(document.getElementById("player1hole13").value, 10)||0) +
                       (parseInt(document.getElementById("player1hole14").value, 10)||0) + (parseInt(document.getElementById("player1hole15").value, 10)||0) + (parseInt(document.getElementById("player1hole16").value, 10)||0) + (parseInt(document.getElementById("player1hole17").value, 10)||0) +
                       (parseInt(document.getElementById("player1hole18").value, 10)||0)) - model.course.tee_types[0].back_nine_par;
        p1totalscore=parseInt(p1front9score + p1back9score);
        p1scoreArr[0]=p1front9score;
        p1scoreArr[1]=p1back9score;
        p1scoreArr[2]=p1totalscore;
    }
    /// player 2 scoring
    if((tee==0 || tee==1) && player==2) {

        p2front9score = ((parseInt(document.getElementById("player2hole1").value, 10) || 0) + (parseInt(document.getElementById("player2hole2").value, 10) || 0) + (parseInt(document.getElementById("player2hole3").value, 10) || 0) + (parseInt(document.getElementById("player2hole4").value, 10) || 0) +
            (parseInt(document.getElementById("player2hole5").value, 10) || 0) + (parseInt(document.getElementById("player2hole6").value, 10) || 0) + (parseInt(document.getElementById("player2hole7").value, 10) || 0) + (parseInt(document.getElementById("player2hole8").value, 10) || 0) +
            (parseInt(document.getElementById("player2hole9").value, 10) || 0)) - model.course.tee_types[0].front_nine_par;
        p2back9score = ((parseInt(document.getElementById("player2hole10").value, 10) || 0) + (parseInt(document.getElementById("player2hole11").value, 10) || 0) + (parseInt(document.getElementById("player2hole12").value, 10) || 0) + (parseInt(document.getElementById("player2hole13").value, 10) || 0) +
            (parseInt(document.getElementById("player2hole14").value, 10) || 0) + (parseInt(document.getElementById("player2hole15").value, 10) || 0) + (parseInt(document.getElementById("player2hole16").value, 10) || 0) + (parseInt(document.getElementById("player2hole17").value, 10) || 0) +
            (parseInt(document.getElementById("player2hole18").value, 10) || 0)) - model.course.tee_types[0].back_nine_par;
        p2totalscore = parseInt(p2front9score + p2back9score);
        p2scoreArr[0] = p2front9score;
        p2scoreArr[1] = p2back9score;
        p2scoreArr[2] = p2totalscore;
    }
    /// player 3 scoring
    if((tee==0 || tee==1) && player==3) {

        p3front9score = ((parseInt(document.getElementById("player3hole1").value, 10) || 0) + (parseInt(document.getElementById("player3hole2").value, 10) || 0) + (parseInt(document.getElementById("player3hole3").value, 10) || 0) + (parseInt(document.getElementById("player3hole4").value, 10) || 0) +
            (parseInt(document.getElementById("player3hole5").value, 10) || 0) + (parseInt(document.getElementById("player3hole6").value, 10) || 0) + (parseInt(document.getElementById("player3hole7").value, 10) || 0) + (parseInt(document.getElementById("player3hole8").value, 10) || 0) +
            (parseInt(document.getElementById("player3hole9").value, 10) || 0)) - model.course.tee_types[0].front_nine_par;
        p3back9score = ((parseInt(document.getElementById("player3hole10").value, 10) || 0) + (parseInt(document.getElementById("player3hole11").value, 10) || 0) + (parseInt(document.getElementById("player3hole12").value, 10) || 0) + (parseInt(document.getElementById("player3hole13").value, 10) || 0) +
            (parseInt(document.getElementById("player3hole14").value, 10) || 0) + (parseInt(document.getElementById("player3hole15").value, 10) || 0) + (parseInt(document.getElementById("player3hole16").value, 10) || 0) + (parseInt(document.getElementById("player3hole17").value, 10) || 0) +
            (parseInt(document.getElementById("player3hole18").value, 10) || 0)) - model.course.tee_types[0].back_nine_par;
        p3totalscore = parseInt(p3front9score + p3back9score);
        p3scoreArr[0] = p3front9score;
        p3scoreArr[1] = p3back9score;
        p3scoreArr[2] = p3totalscore;
    }
    /// player 4 scoring
    if((tee==0 || tee==1) && player==4) {

        p4front9score = ((parseInt(document.getElementById("player4hole1").value, 10) || 0) + (parseInt(document.getElementById("player4hole2").value, 10) || 0) + (parseInt(document.getElementById("player4hole3").value, 10) || 0) + (parseInt(document.getElementById("player4hole4").value, 10) || 0) +
            (parseInt(document.getElementById("player4hole5").value, 10) || 0) + (parseInt(document.getElementById("player4hole6").value, 10) || 0) + (parseInt(document.getElementById("player4hole7").value, 10) || 0) + (parseInt(document.getElementById("player4hole8").value, 10) || 0) +
            (parseInt(document.getElementById("player4hole9").value, 10) || 0)) - model.course.tee_types[0].front_nine_par;
        p4back9score = ((parseInt(document.getElementById("player4hole10").value, 10) || 0) + (parseInt(document.getElementById("player4hole11").value, 10) || 0) + (parseInt(document.getElementById("player4hole12").value, 10) || 0) + (parseInt(document.getElementById("player4hole13").value, 10) || 0) +
            (parseInt(document.getElementById("player4hole14").value, 10) || 0) + (parseInt(document.getElementById("player4hole15").value, 10) || 0) + (parseInt(document.getElementById("player4hole16").value, 10) || 0) + (parseInt(document.getElementById("player4hole17").value, 10) || 0) +
            (parseInt(document.getElementById("player4hole18").value, 10) || 0)) - model.course.tee_types[0].back_nine_par;
        p4totalscore = parseInt(p4front9score + p4back9score);
        p4scoreArr[0] = p4front9score;
        p4scoreArr[1] = p4back9score;
        p4scoreArr[2] = p4totalscore;
    }
}
//////// Saves player names, hole scores, and total scores for each player.
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
//////// Loads player names, hole scores, and total scores for each player.
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
//////// Clears local storage and reloads page.
function reset() {
    window.localStorage.clear();
    window.open("index.html", "_self");
}
//////// Displays or hides player cards depending on player selection.
function numOfPlayers(num) {
    if (num == 1){
        playerChoice = 1;
        document.getElementById("player1card").style.display= "block";
        document.getElementById("player2card").style.display= "none";
        document.getElementById("player3card").style.display= "none";
        document.getElementById("player4card").style.display= "none";
    }
    if (num == 2){
        playerChoice = 2;
        document.getElementById("player1card").style.display= "none";
        document.getElementById("player2card").style.display= "block";
        document.getElementById("player3card").style.display= "none";
        document.getElementById("player4card").style.display= "none";
    }
    if (num == 3){
        playerChoice = 3;
        document.getElementById("player1card").style.display= "none";
        document.getElementById("player2card").style.display= "none";
        document.getElementById("player3card").style.display= "block";
        document.getElementById("player4card").style.display= "none";
    }
    if (num == 4) {
        playerChoice = 4;
        document.getElementById("player1card").style.display= "none";
        document.getElementById("player2card").style.display= "none";
        document.getElementById("player3card").style.display= "none";
        document.getElementById("player4card").style.display= "block";
    }

}
//////// Displays par number for each hole depending on which tee and player selected.
function loadPar(tee, player) {
    if (tee==0 && player ==1) {
        document.getElementById("player1totalpar").innerHTML = model.course.tee_types[0].par;
        document.getElementById("p1f9par").innerHTML = "Par: " + model.course.tee_types[0].front_nine_par;
        document.getElementById("p1b9par").innerHTML = "Par: " + model.course.tee_types[0].back_nine_par;
        document.getElementsByName("player1hole1")[0].placeholder = "Par: " + model.course.holes[0].tee_boxes[0].par;
        document.getElementsByName("player1hole2")[0].placeholder = "Par: " + model.course.holes[1].tee_boxes[0].par;
        document.getElementsByName("player1hole3")[0].placeholder = "Par: " + model.course.holes[2].tee_boxes[0].par;
        document.getElementsByName("player1hole4")[0].placeholder = "Par: " + model.course.holes[3].tee_boxes[0].par;
        document.getElementsByName("player1hole5")[0].placeholder = "Par: " + model.course.holes[4].tee_boxes[0].par;
        document.getElementsByName("player1hole6")[0].placeholder = "Par: " + model.course.holes[5].tee_boxes[0].par;
        document.getElementsByName("player1hole7")[0].placeholder = "Par: " + model.course.holes[6].tee_boxes[0].par;
        document.getElementsByName("player1hole8")[0].placeholder = "Par: " + model.course.holes[7].tee_boxes[0].par;
        document.getElementsByName("player1hole9")[0].placeholder = "Par: " + model.course.holes[8].tee_boxes[0].par;
        document.getElementsByName("player1hole10")[0].placeholder = "Par: " + model.course.holes[9].tee_boxes[0].par;
        document.getElementsByName("player1hole11")[0].placeholder = "Par: " + model.course.holes[10].tee_boxes[0].par;
        document.getElementsByName("player1hole12")[0].placeholder = "Par: " + model.course.holes[11].tee_boxes[0].par;
        document.getElementsByName("player1hole13")[0].placeholder = "Par: " + model.course.holes[12].tee_boxes[0].par;
        document.getElementsByName("player1hole14")[0].placeholder = "Par: " + model.course.holes[13].tee_boxes[0].par;
        document.getElementsByName("player1hole15")[0].placeholder = "Par: " + model.course.holes[14].tee_boxes[0].par;
        document.getElementsByName("player1hole16")[0].placeholder = "Par: " + model.course.holes[15].tee_boxes[0].par;
        document.getElementsByName("player1hole17")[0].placeholder = "Par: " + model.course.holes[16].tee_boxes[0].par;
        document.getElementsByName("player1hole18")[0].placeholder = "Par: " + model.course.holes[17].tee_boxes[0].par;
    }
    if (tee==0 && player ==2) {
        document.getElementById("player2totalpar").innerHTML = model.course.tee_types[0].par;
        document.getElementById("p2f9par").innerHTML = "Par: " + model.course.tee_types[0].front_nine_par;
        document.getElementById("p2b9par").innerHTML = "Par: " + model.course.tee_types[0].back_nine_par;
        document.getElementsByName("player2hole1")[0].placeholder = "Par: " + model.course.holes[0].tee_boxes[0].par;
        document.getElementsByName("player2hole2")[0].placeholder = "Par: " + model.course.holes[1].tee_boxes[0].par;
        document.getElementsByName("player2hole3")[0].placeholder = "Par: " + model.course.holes[2].tee_boxes[0].par;
        document.getElementsByName("player2hole4")[0].placeholder = "Par: " + model.course.holes[3].tee_boxes[0].par;
        document.getElementsByName("player2hole5")[0].placeholder = "Par: " + model.course.holes[4].tee_boxes[0].par;
        document.getElementsByName("player2hole6")[0].placeholder = "Par: " + model.course.holes[5].tee_boxes[0].par;
        document.getElementsByName("player2hole7")[0].placeholder = "Par: " + model.course.holes[6].tee_boxes[0].par;
        document.getElementsByName("player2hole8")[0].placeholder = "Par: " + model.course.holes[7].tee_boxes[0].par;
        document.getElementsByName("player2hole9")[0].placeholder = "Par: " + model.course.holes[8].tee_boxes[0].par;
        document.getElementsByName("player2hole10")[0].placeholder = "Par: " + model.course.holes[9].tee_boxes[0].par;
        document.getElementsByName("player2hole11")[0].placeholder = "Par: " + model.course.holes[10].tee_boxes[0].par;
        document.getElementsByName("player2hole12")[0].placeholder = "Par: " + model.course.holes[11].tee_boxes[0].par;
        document.getElementsByName("player2hole13")[0].placeholder = "Par: " + model.course.holes[12].tee_boxes[0].par;
        document.getElementsByName("player2hole14")[0].placeholder = "Par: " + model.course.holes[13].tee_boxes[0].par;
        document.getElementsByName("player2hole15")[0].placeholder = "Par: " + model.course.holes[14].tee_boxes[0].par;
        document.getElementsByName("player2hole16")[0].placeholder = "Par: " + model.course.holes[15].tee_boxes[0].par;
        document.getElementsByName("player2hole17")[0].placeholder = "Par: " + model.course.holes[16].tee_boxes[0].par;
        document.getElementsByName("player2hole18")[0].placeholder = "Par: " + model.course.holes[17].tee_boxes[0].par;
    }
    if (tee==0 && player ==3) {
        document.getElementById("player3totalpar").innerHTML = model.course.tee_types[0].par;
        document.getElementById("p3f9par").innerHTML = "Par: " + model.course.tee_types[0].front_nine_par;
        document.getElementById("p3b9par").innerHTML = "Par: " + model.course.tee_types[0].back_nine_par;
        document.getElementsByName("player3hole1")[0].placeholder = "Par: " + model.course.holes[0].tee_boxes[0].par;
        document.getElementsByName("player3hole2")[0].placeholder = "Par: " + model.course.holes[1].tee_boxes[0].par;
        document.getElementsByName("player3hole3")[0].placeholder = "Par: " + model.course.holes[2].tee_boxes[0].par;
        document.getElementsByName("player3hole4")[0].placeholder = "Par: " + model.course.holes[3].tee_boxes[0].par;
        document.getElementsByName("player3hole5")[0].placeholder = "Par: " + model.course.holes[4].tee_boxes[0].par;
        document.getElementsByName("player3hole6")[0].placeholder = "Par: " + model.course.holes[5].tee_boxes[0].par;
        document.getElementsByName("player3hole7")[0].placeholder = "Par: " + model.course.holes[6].tee_boxes[0].par;
        document.getElementsByName("player3hole8")[0].placeholder = "Par: " + model.course.holes[7].tee_boxes[0].par;
        document.getElementsByName("player3hole9")[0].placeholder = "Par: " + model.course.holes[8].tee_boxes[0].par;
        document.getElementsByName("player3hole10")[0].placeholder = "Par: " + model.course.holes[9].tee_boxes[0].par;
        document.getElementsByName("player3hole11")[0].placeholder = "Par: " + model.course.holes[10].tee_boxes[0].par;
        document.getElementsByName("player3hole12")[0].placeholder = "Par: " + model.course.holes[11].tee_boxes[0].par;
        document.getElementsByName("player3hole13")[0].placeholder = "Par: " + model.course.holes[12].tee_boxes[0].par;
        document.getElementsByName("player3hole14")[0].placeholder = "Par: " + model.course.holes[13].tee_boxes[0].par;
        document.getElementsByName("player3hole15")[0].placeholder = "Par: " + model.course.holes[14].tee_boxes[0].par;
        document.getElementsByName("player3hole16")[0].placeholder = "Par: " + model.course.holes[15].tee_boxes[0].par;
        document.getElementsByName("player3hole17")[0].placeholder = "Par: " + model.course.holes[16].tee_boxes[0].par;
        document.getElementsByName("player3hole18")[0].placeholder = "Par: " + model.course.holes[17].tee_boxes[0].par;
    }
    if (tee==0 && player ==4) {
        document.getElementById("player4totalpar").innerHTML = model.course.tee_types[0].par;
        document.getElementById("p4f9par").innerHTML = "Par: " + model.course.tee_types[0].front_nine_par;
        document.getElementById("p4b9par").innerHTML = "Par: " + model.course.tee_types[0].back_nine_par;
        document.getElementsByName("player4hole1")[0].placeholder = "Par: " + model.course.holes[0].tee_boxes[0].par;
        document.getElementsByName("player4hole2")[0].placeholder = "Par: " + model.course.holes[1].tee_boxes[0].par;
        document.getElementsByName("player4hole3")[0].placeholder = "Par: " + model.course.holes[2].tee_boxes[0].par;
        document.getElementsByName("player4hole4")[0].placeholder = "Par: " + model.course.holes[3].tee_boxes[0].par;
        document.getElementsByName("player4hole5")[0].placeholder = "Par: " + model.course.holes[4].tee_boxes[0].par;
        document.getElementsByName("player4hole6")[0].placeholder = "Par: " + model.course.holes[5].tee_boxes[0].par;
        document.getElementsByName("player4hole7")[0].placeholder = "Par: " + model.course.holes[6].tee_boxes[0].par;
        document.getElementsByName("player4hole8")[0].placeholder = "Par: " + model.course.holes[7].tee_boxes[0].par;
        document.getElementsByName("player4hole9")[0].placeholder = "Par: " + model.course.holes[8].tee_boxes[0].par;
        document.getElementsByName("player4hole10")[0].placeholder = "Par: " + model.course.holes[9].tee_boxes[0].par;
        document.getElementsByName("player4hole11")[0].placeholder = "Par: " + model.course.holes[10].tee_boxes[0].par;
        document.getElementsByName("player4hole12")[0].placeholder = "Par: " + model.course.holes[11].tee_boxes[0].par;
        document.getElementsByName("player4hole13")[0].placeholder = "Par: " + model.course.holes[12].tee_boxes[0].par;
        document.getElementsByName("player4hole14")[0].placeholder = "Par: " + model.course.holes[13].tee_boxes[0].par;
        document.getElementsByName("player4hole15")[0].placeholder = "Par: " + model.course.holes[14].tee_boxes[0].par;
        document.getElementsByName("player4hole16")[0].placeholder = "Par: " + model.course.holes[15].tee_boxes[0].par;
        document.getElementsByName("player4hole17")[0].placeholder = "Par: " + model.course.holes[16].tee_boxes[0].par;
        document.getElementsByName("player4hole18")[0].placeholder = "Par: " + model.course.holes[17].tee_boxes[0].par;
    }
    if (tee==1 && player ==1) {
        document.getElementById("player1totalpar").innerHTML = model.course.tee_types[1].par;
        document.getElementById("p1f9par").innerHTML = "Par: " + model.course.tee_types[1].front_nine_par;
        document.getElementById("p1b9par").innerHTML = "Par: " + model.course.tee_types[1].back_nine_par;
        document.getElementsByName("player1hole1")[0].placeholder = "Par: " + model.course.holes[0].tee_boxes[1].par;
        document.getElementsByName("player1hole2")[0].placeholder = "Par: " + model.course.holes[1].tee_boxes[1].par;
        document.getElementsByName("player1hole3")[0].placeholder = "Par: " + model.course.holes[2].tee_boxes[1].par;
        document.getElementsByName("player1hole4")[0].placeholder = "Par: " + model.course.holes[3].tee_boxes[1].par;
        document.getElementsByName("player1hole5")[0].placeholder = "Par: " + model.course.holes[4].tee_boxes[1].par;
        document.getElementsByName("player1hole6")[0].placeholder = "Par: " + model.course.holes[5].tee_boxes[1].par;
        document.getElementsByName("player1hole7")[0].placeholder = "Par: " + model.course.holes[6].tee_boxes[1].par;
        document.getElementsByName("player1hole8")[0].placeholder = "Par: " + model.course.holes[7].tee_boxes[1].par;
        document.getElementsByName("player1hole9")[0].placeholder = "Par: " + model.course.holes[8].tee_boxes[1].par;
        document.getElementsByName("player1hole10")[0].placeholder = "Par: " + model.course.holes[9].tee_boxes[1].par;
        document.getElementsByName("player1hole11")[0].placeholder = "Par: " + model.course.holes[10].tee_boxes[1].par;
        document.getElementsByName("player1hole12")[0].placeholder = "Par: " + model.course.holes[11].tee_boxes[1].par;
        document.getElementsByName("player1hole13")[0].placeholder = "Par: " + model.course.holes[12].tee_boxes[1].par;
        document.getElementsByName("player1hole14")[0].placeholder = "Par: " + model.course.holes[13].tee_boxes[1].par;
        document.getElementsByName("player1hole15")[0].placeholder = "Par: " + model.course.holes[14].tee_boxes[1].par;
        document.getElementsByName("player1hole16")[0].placeholder = "Par: " + model.course.holes[15].tee_boxes[1].par;
        document.getElementsByName("player1hole17")[0].placeholder = "Par: " + model.course.holes[16].tee_boxes[1].par;
        document.getElementsByName("player1hole18")[0].placeholder = "Par: " + model.course.holes[17].tee_boxes[1].par;
    }
    if (tee==1 && player ==2) {
        document.getElementById("player2totalpar").innerHTML = model.course.tee_types[1].par;
        document.getElementById("p2f9par").innerHTML = "Par: " + model.course.tee_types[1].front_nine_par;
        document.getElementById("p2b9par").innerHTML = "Par: " + model.course.tee_types[1].back_nine_par;
        document.getElementsByName("player2hole1")[0].placeholder = "Par: " + model.course.holes[0].tee_boxes[1].par;
        document.getElementsByName("player2hole2")[0].placeholder = "Par: " + model.course.holes[1].tee_boxes[1].par;
        document.getElementsByName("player2hole3")[0].placeholder = "Par: " + model.course.holes[2].tee_boxes[1].par;
        document.getElementsByName("player2hole4")[0].placeholder = "Par: " + model.course.holes[3].tee_boxes[1].par;
        document.getElementsByName("player2hole5")[0].placeholder = "Par: " + model.course.holes[4].tee_boxes[1].par;
        document.getElementsByName("player2hole6")[0].placeholder = "Par: " + model.course.holes[5].tee_boxes[1].par;
        document.getElementsByName("player2hole7")[0].placeholder = "Par: " + model.course.holes[6].tee_boxes[1].par;
        document.getElementsByName("player2hole8")[0].placeholder = "Par: " + model.course.holes[7].tee_boxes[1].par;
        document.getElementsByName("player2hole9")[0].placeholder = "Par: " + model.course.holes[8].tee_boxes[1].par;
        document.getElementsByName("player2hole10")[0].placeholder = "Par: " + model.course.holes[9].tee_boxes[1].par;
        document.getElementsByName("player2hole11")[0].placeholder = "Par: " + model.course.holes[10].tee_boxes[1].par;
        document.getElementsByName("player2hole12")[0].placeholder = "Par: " + model.course.holes[11].tee_boxes[1].par;
        document.getElementsByName("player2hole13")[0].placeholder = "Par: " + model.course.holes[12].tee_boxes[1].par;
        document.getElementsByName("player2hole14")[0].placeholder = "Par: " + model.course.holes[13].tee_boxes[1].par;
        document.getElementsByName("player2hole15")[0].placeholder = "Par: " + model.course.holes[14].tee_boxes[1].par;
        document.getElementsByName("player2hole16")[0].placeholder = "Par: " + model.course.holes[15].tee_boxes[1].par;
        document.getElementsByName("player2hole17")[0].placeholder = "Par: " + model.course.holes[16].tee_boxes[1].par;
        document.getElementsByName("player2hole18")[0].placeholder = "Par: " + model.course.holes[17].tee_boxes[1].par;
    }
    if (tee==1 && player ==3) {
        document.getElementById("player3totalpar").innerHTML = model.course.tee_types[1].par;
        document.getElementById("p3f9par").innerHTML = "Par: " + model.course.tee_types[1].front_nine_par;
        document.getElementById("p3b9par").innerHTML = "Par: " + model.course.tee_types[1].back_nine_par;
        document.getElementsByName("player3hole1")[0].placeholder = "Par: " + model.course.holes[0].tee_boxes[1].par;
        document.getElementsByName("player3hole2")[0].placeholder = "Par: " + model.course.holes[1].tee_boxes[1].par;
        document.getElementsByName("player3hole3")[0].placeholder = "Par: " + model.course.holes[2].tee_boxes[1].par;
        document.getElementsByName("player3hole4")[0].placeholder = "Par: " + model.course.holes[3].tee_boxes[1].par;
        document.getElementsByName("player3hole5")[0].placeholder = "Par: " + model.course.holes[4].tee_boxes[1].par;
        document.getElementsByName("player3hole6")[0].placeholder = "Par: " + model.course.holes[5].tee_boxes[1].par;
        document.getElementsByName("player3hole7")[0].placeholder = "Par: " + model.course.holes[6].tee_boxes[1].par;
        document.getElementsByName("player3hole8")[0].placeholder = "Par: " + model.course.holes[7].tee_boxes[1].par;
        document.getElementsByName("player3hole9")[0].placeholder = "Par: " + model.course.holes[8].tee_boxes[1].par;
        document.getElementsByName("player3hole10")[0].placeholder = "Par: " + model.course.holes[9].tee_boxes[1].par;
        document.getElementsByName("player3hole11")[0].placeholder = "Par: " + model.course.holes[10].tee_boxes[1].par;
        document.getElementsByName("player3hole12")[0].placeholder = "Par: " + model.course.holes[11].tee_boxes[1].par;
        document.getElementsByName("player3hole13")[0].placeholder = "Par: " + model.course.holes[12].tee_boxes[1].par;
        document.getElementsByName("player3hole14")[0].placeholder = "Par: " + model.course.holes[13].tee_boxes[1].par;
        document.getElementsByName("player3hole15")[0].placeholder = "Par: " + model.course.holes[14].tee_boxes[1].par;
        document.getElementsByName("player3hole16")[0].placeholder = "Par: " + model.course.holes[15].tee_boxes[1].par;
        document.getElementsByName("player3hole17")[0].placeholder = "Par: " + model.course.holes[16].tee_boxes[1].par;
        document.getElementsByName("player3hole18")[0].placeholder = "Par: " + model.course.holes[17].tee_boxes[1].par;
    }
    if (tee==1 && player ==4) {
        document.getElementById("player4totalpar").innerHTML = model.course.tee_types[1].par;
        document.getElementById("p4f9par").innerHTML = "Par: " + model.course.tee_types[1].front_nine_par;
        document.getElementById("p4b9par").innerHTML = "Par: " + model.course.tee_types[1].back_nine_par;
        document.getElementsByName("player4hole1")[0].placeholder = "Par: " + model.course.holes[0].tee_boxes[1].par;
        document.getElementsByName("player4hole2")[0].placeholder = "Par: " + model.course.holes[1].tee_boxes[1].par;
        document.getElementsByName("player4hole3")[0].placeholder = "Par: " + model.course.holes[2].tee_boxes[1].par;
        document.getElementsByName("player4hole4")[0].placeholder = "Par: " + model.course.holes[3].tee_boxes[1].par;
        document.getElementsByName("player4hole5")[0].placeholder = "Par: " + model.course.holes[4].tee_boxes[1].par;
        document.getElementsByName("player4hole6")[0].placeholder = "Par: " + model.course.holes[5].tee_boxes[1].par;
        document.getElementsByName("player4hole7")[0].placeholder = "Par: " + model.course.holes[6].tee_boxes[1].par;
        document.getElementsByName("player4hole8")[0].placeholder = "Par: " + model.course.holes[7].tee_boxes[1].par;
        document.getElementsByName("player4hole9")[0].placeholder = "Par: " + model.course.holes[8].tee_boxes[1].par;
        document.getElementsByName("player4hole10")[0].placeholder = "Par: " + model.course.holes[9].tee_boxes[1].par;
        document.getElementsByName("player4hole11")[0].placeholder = "Par: " + model.course.holes[10].tee_boxes[1].par;
        document.getElementsByName("player4hole12")[0].placeholder = "Par: " + model.course.holes[11].tee_boxes[1].par;
        document.getElementsByName("player4hole13")[0].placeholder = "Par: " + model.course.holes[12].tee_boxes[1].par;
        document.getElementsByName("player4hole14")[0].placeholder = "Par: " + model.course.holes[13].tee_boxes[1].par;
        document.getElementsByName("player4hole15")[0].placeholder = "Par: " + model.course.holes[14].tee_boxes[1].par;
        document.getElementsByName("player4hole16")[0].placeholder = "Par: " + model.course.holes[15].tee_boxes[1].par;
        document.getElementsByName("player4hole17")[0].placeholder = "Par: " + model.course.holes[16].tee_boxes[1].par;
        document.getElementsByName("player4hole18")[0].placeholder = "Par: " + model.course.holes[17].tee_boxes[1].par;
    }
}
//////// Displays Handicap number for each hole depending on which tee and player is selected.
function loadHCP(tee, player) {
    if (tee == 1 && player == 1) {
        player1hcpOn=true;
        document.getElementById("p1h1hcp").innerHTML = "HDCP: " + model.course.holes[0].tee_boxes[1].hcp;
        document.getElementById("p1h2hcp").innerHTML = "HDCP: " + model.course.holes[1].tee_boxes[1].hcp;
        document.getElementById("p1h3hcp").innerHTML = "HDCP: " + model.course.holes[2].tee_boxes[1].hcp;
        document.getElementById("p1h4hcp").innerHTML = "HDCP: " + model.course.holes[3].tee_boxes[1].hcp;
        document.getElementById("p1h5hcp").innerHTML = "HDCP: " + model.course.holes[4].tee_boxes[1].hcp;
        document.getElementById("p1h6hcp").innerHTML = "HDCP: " + model.course.holes[5].tee_boxes[1].hcp;
        document.getElementById("p1h7hcp").innerHTML = "HDCP: " + model.course.holes[6].tee_boxes[1].hcp;
        document.getElementById("p1h8hcp").innerHTML = "HDCP: " + model.course.holes[7].tee_boxes[1].hcp;
        document.getElementById("p1h9hcp").innerHTML = "HDCP: " + model.course.holes[8].tee_boxes[1].hcp;
        document.getElementById("p1h10hcp").innerHTML = "HDCP: " + model.course.holes[9].tee_boxes[1].hcp;
        document.getElementById("p1h11hcp").innerHTML = "HDCP: " + model.course.holes[10].tee_boxes[1].hcp;
        document.getElementById("p1h12hcp").innerHTML = "HDCP: " + model.course.holes[11].tee_boxes[1].hcp;
        document.getElementById("p1h13hcp").innerHTML = "HDCP: " + model.course.holes[12].tee_boxes[1].hcp;
        document.getElementById("p1h14hcp").innerHTML = "HDCP: " + model.course.holes[13].tee_boxes[1].hcp;
        document.getElementById("p1h15hcp").innerHTML = "HDCP: " + model.course.holes[14].tee_boxes[1].hcp;
        document.getElementById("p1h16hcp").innerHTML = "HDCP: " + model.course.holes[15].tee_boxes[1].hcp;
        document.getElementById("p1h17hcp").innerHTML = "HDCP: " + model.course.holes[16].tee_boxes[1].hcp;
        document.getElementById("p1h18hcp").innerHTML = "HDCP: " + model.course.holes[17].tee_boxes[1].hcp;
    }
    if (tee == 1 && player == 2) {
        player2hcpOn=true;
        document.getElementById("p2h1hcp").innerHTML = "HDCP: " + model.course.holes[0].tee_boxes[1].hcp;
        document.getElementById("p2h2hcp").innerHTML = "HDCP: " + model.course.holes[1].tee_boxes[1].hcp;
        document.getElementById("p2h3hcp").innerHTML = "HDCP: " + model.course.holes[2].tee_boxes[1].hcp;
        document.getElementById("p2h4hcp").innerHTML = "HDCP: " + model.course.holes[3].tee_boxes[1].hcp;
        document.getElementById("p2h5hcp").innerHTML = "HDCP: " + model.course.holes[4].tee_boxes[1].hcp;
        document.getElementById("p2h6hcp").innerHTML = "HDCP: " + model.course.holes[5].tee_boxes[1].hcp;
        document.getElementById("p2h7hcp").innerHTML = "HDCP: " + model.course.holes[6].tee_boxes[1].hcp;
        document.getElementById("p2h8hcp").innerHTML = "HDCP: " + model.course.holes[7].tee_boxes[1].hcp;
        document.getElementById("p2h9hcp").innerHTML = "HDCP: " + model.course.holes[8].tee_boxes[1].hcp;
        document.getElementById("p2h10hcp").innerHTML = "HDCP: " + model.course.holes[9].tee_boxes[1].hcp;
        document.getElementById("p2h11hcp").innerHTML = "HDCP: " + model.course.holes[10].tee_boxes[1].hcp;
        document.getElementById("p2h12hcp").innerHTML = "HDCP: " + model.course.holes[11].tee_boxes[1].hcp;
        document.getElementById("p2h13hcp").innerHTML = "HDCP: " + model.course.holes[12].tee_boxes[1].hcp;
        document.getElementById("p2h14hcp").innerHTML = "HDCP: " + model.course.holes[13].tee_boxes[1].hcp;
        document.getElementById("p2h15hcp").innerHTML = "HDCP: " + model.course.holes[14].tee_boxes[1].hcp;
        document.getElementById("p2h16hcp").innerHTML = "HDCP: " + model.course.holes[15].tee_boxes[1].hcp;
        document.getElementById("p2h17hcp").innerHTML = "HDCP: " + model.course.holes[16].tee_boxes[1].hcp;
        document.getElementById("p2h18hcp").innerHTML = "HDCP: " + model.course.holes[17].tee_boxes[1].hcp;
    }
    if (tee == 1 && player == 3) {
        player3hcpOn=true;
        document.getElementById("p3h1hcp").innerHTML = "HDCP: " + model.course.holes[0].tee_boxes[1].hcp;
        document.getElementById("p3h2hcp").innerHTML = "HDCP: " + model.course.holes[1].tee_boxes[1].hcp;
        document.getElementById("p3h3hcp").innerHTML = "HDCP: " + model.course.holes[2].tee_boxes[1].hcp;
        document.getElementById("p3h4hcp").innerHTML = "HDCP: " + model.course.holes[3].tee_boxes[1].hcp;
        document.getElementById("p3h5hcp").innerHTML = "HDCP: " + model.course.holes[4].tee_boxes[1].hcp;
        document.getElementById("p3h6hcp").innerHTML = "HDCP: " + model.course.holes[5].tee_boxes[1].hcp;
        document.getElementById("p3h7hcp").innerHTML = "HDCP: " + model.course.holes[6].tee_boxes[1].hcp;
        document.getElementById("p3h8hcp").innerHTML = "HDCP: " + model.course.holes[7].tee_boxes[1].hcp;
        document.getElementById("p3h9hcp").innerHTML = "HDCP: " + model.course.holes[8].tee_boxes[1].hcp;
        document.getElementById("p3h10hcp").innerHTML = "HDCP: " + model.course.holes[9].tee_boxes[1].hcp;
        document.getElementById("p3h11hcp").innerHTML = "HDCP: " + model.course.holes[10].tee_boxes[1].hcp;
        document.getElementById("p3h12hcp").innerHTML = "HDCP: " + model.course.holes[11].tee_boxes[1].hcp;
        document.getElementById("p3h13hcp").innerHTML = "HDCP: " + model.course.holes[12].tee_boxes[1].hcp;
        document.getElementById("p3h14hcp").innerHTML = "HDCP: " + model.course.holes[13].tee_boxes[1].hcp;
        document.getElementById("p3h15hcp").innerHTML = "HDCP: " + model.course.holes[14].tee_boxes[1].hcp;
        document.getElementById("p3h16hcp").innerHTML = "HDCP: " + model.course.holes[15].tee_boxes[1].hcp;
        document.getElementById("p3h17hcp").innerHTML = "HDCP: " + model.course.holes[16].tee_boxes[1].hcp;
        document.getElementById("p3h18hcp").innerHTML = "HDCP: " + model.course.holes[17].tee_boxes[1].hcp;
    }
    if (tee == 1 && player == 4) {
        player4hcpOn=true;
        document.getElementById("p4h1hcp").innerHTML = "HDCP: " + model.course.holes[0].tee_boxes[1].hcp;
        document.getElementById("p4h2hcp").innerHTML = "HDCP: " + model.course.holes[1].tee_boxes[1].hcp;
        document.getElementById("p4h3hcp").innerHTML = "HDCP: " + model.course.holes[2].tee_boxes[1].hcp;
        document.getElementById("p4h4hcp").innerHTML = "HDCP: " + model.course.holes[3].tee_boxes[1].hcp;
        document.getElementById("p4h5hcp").innerHTML = "HDCP: " + model.course.holes[4].tee_boxes[1].hcp;
        document.getElementById("p4h6hcp").innerHTML = "HDCP: " + model.course.holes[5].tee_boxes[1].hcp;
        document.getElementById("p4h7hcp").innerHTML = "HDCP: " + model.course.holes[6].tee_boxes[1].hcp;
        document.getElementById("p4h8hcp").innerHTML = "HDCP: " + model.course.holes[7].tee_boxes[1].hcp;
        document.getElementById("p4h9hcp").innerHTML = "HDCP: " + model.course.holes[8].tee_boxes[1].hcp;
        document.getElementById("p4h10hcp").innerHTML = "HDCP: " + model.course.holes[9].tee_boxes[1].hcp;
        document.getElementById("p4h11hcp").innerHTML = "HDCP: " + model.course.holes[10].tee_boxes[1].hcp;
        document.getElementById("p4h12hcp").innerHTML = "HDCP: " + model.course.holes[11].tee_boxes[1].hcp;
        document.getElementById("p4h13hcp").innerHTML = "HDCP: " + model.course.holes[12].tee_boxes[1].hcp;
        document.getElementById("p4h14hcp").innerHTML = "HDCP: " + model.course.holes[13].tee_boxes[1].hcp;
        document.getElementById("p4h15hcp").innerHTML = "HDCP: " + model.course.holes[14].tee_boxes[1].hcp;
        document.getElementById("p4h16hcp").innerHTML = "HDCP: " + model.course.holes[15].tee_boxes[1].hcp;
        document.getElementById("p4h17hcp").innerHTML = "HDCP: " + model.course.holes[16].tee_boxes[1].hcp;
        document.getElementById("p4h18hcp").innerHTML = "HDCP: " + model.course.holes[17].tee_boxes[1].hcp;
    }
    if (tee == 0 && player == 1) {
        player1hcpOn=true;
        document.getElementById("p1h1hcp").innerHTML = "HDCP: " + model.course.holes[0].tee_boxes[0].hcp;
        document.getElementById("p1h2hcp").innerHTML = "HDCP: " + model.course.holes[1].tee_boxes[0].hcp;
        document.getElementById("p1h3hcp").innerHTML = "HDCP: " + model.course.holes[2].tee_boxes[0].hcp;
        document.getElementById("p1h4hcp").innerHTML = "HDCP: " + model.course.holes[3].tee_boxes[0].hcp;
        document.getElementById("p1h5hcp").innerHTML = "HDCP: " + model.course.holes[4].tee_boxes[0].hcp;
        document.getElementById("p1h6hcp").innerHTML = "HDCP: " + model.course.holes[5].tee_boxes[0].hcp;
        document.getElementById("p1h7hcp").innerHTML = "HDCP: " + model.course.holes[6].tee_boxes[0].hcp;
        document.getElementById("p1h8hcp").innerHTML = "HDCP: " + model.course.holes[7].tee_boxes[0].hcp;
        document.getElementById("p1h9hcp").innerHTML = "HDCP: " + model.course.holes[8].tee_boxes[0].hcp;
        document.getElementById("p1h10hcp").innerHTML = "HDCP: " + model.course.holes[9].tee_boxes[0].hcp;
        document.getElementById("p1h11hcp").innerHTML = "HDCP: " + model.course.holes[10].tee_boxes[0].hcp;
        document.getElementById("p1h12hcp").innerHTML = "HDCP: " + model.course.holes[11].tee_boxes[0].hcp;
        document.getElementById("p1h13hcp").innerHTML = "HDCP: " + model.course.holes[12].tee_boxes[0].hcp;
        document.getElementById("p1h14hcp").innerHTML = "HDCP: " + model.course.holes[13].tee_boxes[0].hcp;
        document.getElementById("p1h15hcp").innerHTML = "HDCP: " + model.course.holes[14].tee_boxes[0].hcp;
        document.getElementById("p1h16hcp").innerHTML = "HDCP: " + model.course.holes[15].tee_boxes[0].hcp;
        document.getElementById("p1h17hcp").innerHTML = "HDCP: " + model.course.holes[16].tee_boxes[0].hcp;
        document.getElementById("p1h18hcp").innerHTML = "HDCP: " + model.course.holes[17].tee_boxes[0].hcp;
    }
    if (tee == 0 && player == 2) {
        player2hcpOn=true;
        document.getElementById("p2h1hcp").innerHTML = "HDCP: " + model.course.holes[0].tee_boxes[0].hcp;
        document.getElementById("p2h2hcp").innerHTML = "HDCP: " + model.course.holes[1].tee_boxes[0].hcp;
        document.getElementById("p2h3hcp").innerHTML = "HDCP: " + model.course.holes[2].tee_boxes[0].hcp;
        document.getElementById("p2h4hcp").innerHTML = "HDCP: " + model.course.holes[3].tee_boxes[0].hcp;
        document.getElementById("p2h5hcp").innerHTML = "HDCP: " + model.course.holes[4].tee_boxes[0].hcp;
        document.getElementById("p2h6hcp").innerHTML = "HDCP: " + model.course.holes[5].tee_boxes[0].hcp;
        document.getElementById("p2h7hcp").innerHTML = "HDCP: " + model.course.holes[6].tee_boxes[0].hcp;
        document.getElementById("p2h8hcp").innerHTML = "HDCP: " + model.course.holes[7].tee_boxes[0].hcp;
        document.getElementById("p2h9hcp").innerHTML = "HDCP: " + model.course.holes[8].tee_boxes[0].hcp;
        document.getElementById("p2h10hcp").innerHTML = "HDCP: " + model.course.holes[9].tee_boxes[0].hcp;
        document.getElementById("p2h11hcp").innerHTML = "HDCP: " + model.course.holes[10].tee_boxes[0].hcp;
        document.getElementById("p2h12hcp").innerHTML = "HDCP: " + model.course.holes[11].tee_boxes[0].hcp;
        document.getElementById("p2h13hcp").innerHTML = "HDCP: " + model.course.holes[12].tee_boxes[0].hcp;
        document.getElementById("p2h14hcp").innerHTML = "HDCP: " + model.course.holes[13].tee_boxes[0].hcp;
        document.getElementById("p2h15hcp").innerHTML = "HDCP: " + model.course.holes[14].tee_boxes[0].hcp;
        document.getElementById("p2h16hcp").innerHTML = "HDCP: " + model.course.holes[15].tee_boxes[0].hcp;
        document.getElementById("p2h17hcp").innerHTML = "HDCP: " + model.course.holes[16].tee_boxes[0].hcp;
        document.getElementById("p2h18hcp").innerHTML = "HDCP: " + model.course.holes[17].tee_boxes[0].hcp;
    }
    if (tee == 0 && player == 3) {
        player3hcpOn=true;
        document.getElementById("p3h1hcp").innerHTML = "HDCP: " + model.course.holes[0].tee_boxes[0].hcp;
        document.getElementById("p3h2hcp").innerHTML = "HDCP: " + model.course.holes[1].tee_boxes[0].hcp;
        document.getElementById("p3h3hcp").innerHTML = "HDCP: " + model.course.holes[2].tee_boxes[0].hcp;
        document.getElementById("p3h4hcp").innerHTML = "HDCP: " + model.course.holes[3].tee_boxes[0].hcp;
        document.getElementById("p3h5hcp").innerHTML = "HDCP: " + model.course.holes[4].tee_boxes[0].hcp;
        document.getElementById("p3h6hcp").innerHTML = "HDCP: " + model.course.holes[5].tee_boxes[0].hcp;
        document.getElementById("p3h7hcp").innerHTML = "HDCP: " + model.course.holes[6].tee_boxes[0].hcp;
        document.getElementById("p3h8hcp").innerHTML = "HDCP: " + model.course.holes[7].tee_boxes[0].hcp;
        document.getElementById("p3h9hcp").innerHTML = "HDCP: " + model.course.holes[8].tee_boxes[0].hcp;
        document.getElementById("p3h10hcp").innerHTML = "HDCP: " + model.course.holes[9].tee_boxes[0].hcp;
        document.getElementById("p3h11hcp").innerHTML = "HDCP: " + model.course.holes[10].tee_boxes[0].hcp;
        document.getElementById("p3h12hcp").innerHTML = "HDCP: " + model.course.holes[11].tee_boxes[0].hcp;
        document.getElementById("p3h13hcp").innerHTML = "HDCP: " + model.course.holes[12].tee_boxes[0].hcp;
        document.getElementById("p3h14hcp").innerHTML = "HDCP: " + model.course.holes[13].tee_boxes[0].hcp;
        document.getElementById("p3h15hcp").innerHTML = "HDCP: " + model.course.holes[14].tee_boxes[0].hcp;
        document.getElementById("p3h16hcp").innerHTML = "HDCP: " + model.course.holes[15].tee_boxes[0].hcp;
        document.getElementById("p3h17hcp").innerHTML = "HDCP: " + model.course.holes[16].tee_boxes[0].hcp;
        document.getElementById("p3h18hcp").innerHTML = "HDCP: " + model.course.holes[17].tee_boxes[0].hcp;
    }
    if (tee == 0 && player == 4) {
        player4hcpOn=true;
        document.getElementById("p4h1hcp").innerHTML = "HDCP: " + model.course.holes[0].tee_boxes[0].hcp;
        document.getElementById("p4h2hcp").innerHTML = "HDCP: " + model.course.holes[1].tee_boxes[0].hcp;
        document.getElementById("p4h3hcp").innerHTML = "HDCP: " + model.course.holes[2].tee_boxes[0].hcp;
        document.getElementById("p4h4hcp").innerHTML = "HDCP: " + model.course.holes[3].tee_boxes[0].hcp;
        document.getElementById("p4h5hcp").innerHTML = "HDCP: " + model.course.holes[4].tee_boxes[0].hcp;
        document.getElementById("p4h6hcp").innerHTML = "HDCP: " + model.course.holes[5].tee_boxes[0].hcp;
        document.getElementById("p4h7hcp").innerHTML = "HDCP: " + model.course.holes[6].tee_boxes[0].hcp;
        document.getElementById("p4h8hcp").innerHTML = "HDCP: " + model.course.holes[7].tee_boxes[0].hcp;
        document.getElementById("p4h9hcp").innerHTML = "HDCP: " + model.course.holes[8].tee_boxes[0].hcp;
        document.getElementById("p4h10hcp").innerHTML = "HDCP: " + model.course.holes[9].tee_boxes[0].hcp;
        document.getElementById("p4h11hcp").innerHTML = "HDCP: " + model.course.holes[10].tee_boxes[0].hcp;
        document.getElementById("p4h12hcp").innerHTML = "HDCP: " + model.course.holes[11].tee_boxes[0].hcp;
        document.getElementById("p4h13hcp").innerHTML = "HDCP: " + model.course.holes[12].tee_boxes[0].hcp;
        document.getElementById("p4h14hcp").innerHTML = "HDCP: " + model.course.holes[13].tee_boxes[0].hcp;
        document.getElementById("p4h15hcp").innerHTML = "HDCP: " + model.course.holes[14].tee_boxes[0].hcp;
        document.getElementById("p4h16hcp").innerHTML = "HDCP: " + model.course.holes[15].tee_boxes[0].hcp;
        document.getElementById("p4h17hcp").innerHTML = "HDCP: " + model.course.holes[16].tee_boxes[0].hcp;
        document.getElementById("p4h18hcp").innerHTML = "HDCP: " + model.course.holes[17].tee_boxes[0].hcp;
    }
}
//////// Displays Yardage for each hole depending on which tee and player is selected.
function loadYards(tee, player) {
    if (tee == 0 && player == 1) {
        document.getElementById("player1totalyards").innerHTML = model.course.tee_types[0].yards;
        document.getElementById("p1f9yards").innerHTML = "Yards: " + model.course.tee_types[0].front_nine_yards;
        document.getElementById("p1b9yards").innerHTML = "Yards: " + model.course.tee_types[0].back_nine_yards;
        document.getElementById("p1h1yards").innerHTML = "Yards: " + model.course.holes[0].tee_boxes[0].yards;
        document.getElementById("p1h2yards").innerHTML = "Yards: " + model.course.holes[1].tee_boxes[0].yards;
        document.getElementById("p1h3yards").innerHTML = "Yards: " + model.course.holes[2].tee_boxes[0].yards;
        document.getElementById("p1h4yards").innerHTML = "Yards: " + model.course.holes[3].tee_boxes[0].yards;
        document.getElementById("p1h5yards").innerHTML = "Yards: " + model.course.holes[4].tee_boxes[0].yards;
        document.getElementById("p1h6yards").innerHTML = "Yards: " + model.course.holes[5].tee_boxes[0].yards;
        document.getElementById("p1h7yards").innerHTML = "Yards: " + model.course.holes[6].tee_boxes[0].yards;
        document.getElementById("p1h8yards").innerHTML = "Yards: " + model.course.holes[7].tee_boxes[0].yards;
        document.getElementById("p1h9yards").innerHTML = "Yards: " + model.course.holes[8].tee_boxes[0].yards;
        document.getElementById("p1h10yards").innerHTML = "Yards: " + model.course.holes[9].tee_boxes[0].yards;
        document.getElementById("p1h11yards").innerHTML = "Yards: " + model.course.holes[10].tee_boxes[0].yards;
        document.getElementById("p1h12yards").innerHTML = "Yards: " + model.course.holes[11].tee_boxes[0].yards;
        document.getElementById("p1h13yards").innerHTML = "Yards: " + model.course.holes[12].tee_boxes[0].yards;
        document.getElementById("p1h14yards").innerHTML = "Yards: " + model.course.holes[13].tee_boxes[0].yards;
        document.getElementById("p1h15yards").innerHTML = "Yards: " + model.course.holes[14].tee_boxes[0].yards;
        document.getElementById("p1h16yards").innerHTML = "Yards: " + model.course.holes[15].tee_boxes[0].yards;
        document.getElementById("p1h17yards").innerHTML = "Yards: " + model.course.holes[16].tee_boxes[0].yards;
        document.getElementById("p1h18yards").innerHTML = "Yards: " + model.course.holes[17].tee_boxes[0].yards;
    }
    if (tee == 0 && player == 2) {
        document.getElementById("player2totalyards").innerHTML = model.course.tee_types[0].yards;
        document.getElementById("p2f9yards").innerHTML = "Yards: " + model.course.tee_types[0].front_nine_yards;
        document.getElementById("p2b9yards").innerHTML = "Yards: " + model.course.tee_types[0].back_nine_yards;
        document.getElementById("p2h1yards").innerHTML = "Yards: " + model.course.holes[0].tee_boxes[0].yards;
        document.getElementById("p2h2yards").innerHTML = "Yards: " + model.course.holes[1].tee_boxes[0].yards;
        document.getElementById("p2h3yards").innerHTML = "Yards: " + model.course.holes[2].tee_boxes[0].yards;
        document.getElementById("p2h4yards").innerHTML = "Yards: " + model.course.holes[3].tee_boxes[0].yards;
        document.getElementById("p2h5yards").innerHTML = "Yards: " + model.course.holes[4].tee_boxes[0].yards;
        document.getElementById("p2h6yards").innerHTML = "Yards: " + model.course.holes[5].tee_boxes[0].yards;
        document.getElementById("p2h7yards").innerHTML = "Yards: " + model.course.holes[6].tee_boxes[0].yards;
        document.getElementById("p2h8yards").innerHTML = "Yards: " + model.course.holes[7].tee_boxes[0].yards;
        document.getElementById("p2h9yards").innerHTML = "Yards: " + model.course.holes[8].tee_boxes[0].yards;
        document.getElementById("p2h10yards").innerHTML = "Yards: " + model.course.holes[9].tee_boxes[0].yards;
        document.getElementById("p2h11yards").innerHTML = "Yards: " + model.course.holes[10].tee_boxes[0].yards;
        document.getElementById("p2h12yards").innerHTML = "Yards: " + model.course.holes[11].tee_boxes[0].yards;
        document.getElementById("p2h13yards").innerHTML = "Yards: " + model.course.holes[12].tee_boxes[0].yards;
        document.getElementById("p2h14yards").innerHTML = "Yards: " + model.course.holes[13].tee_boxes[0].yards;
        document.getElementById("p2h15yards").innerHTML = "Yards: " + model.course.holes[14].tee_boxes[0].yards;
        document.getElementById("p2h16yards").innerHTML = "Yards: " + model.course.holes[15].tee_boxes[0].yards;
        document.getElementById("p2h17yards").innerHTML = "Yards: " + model.course.holes[16].tee_boxes[0].yards;
        document.getElementById("p2h18yards").innerHTML = "Yards: " + model.course.holes[17].tee_boxes[0].yards;
    }
    if (tee == 0 && player == 3) {
        document.getElementById("player3totalyards").innerHTML = model.course.tee_types[0].yards;
        document.getElementById("p3f9yards").innerHTML = "Yards: " + model.course.tee_types[0].front_nine_yards;
        document.getElementById("p3b9yards").innerHTML = "Yards: " + model.course.tee_types[0].back_nine_yards;
        document.getElementById("p3h1yards").innerHTML = "Yards: " + model.course.holes[0].tee_boxes[0].yards;
        document.getElementById("p3h2yards").innerHTML = "Yards: " + model.course.holes[1].tee_boxes[0].yards;
        document.getElementById("p3h3yards").innerHTML = "Yards: " + model.course.holes[2].tee_boxes[0].yards;
        document.getElementById("p3h4yards").innerHTML = "Yards: " + model.course.holes[3].tee_boxes[0].yards;
        document.getElementById("p3h5yards").innerHTML = "Yards: " + model.course.holes[4].tee_boxes[0].yards;
        document.getElementById("p3h6yards").innerHTML = "Yards: " + model.course.holes[5].tee_boxes[0].yards;
        document.getElementById("p3h7yards").innerHTML = "Yards: " + model.course.holes[6].tee_boxes[0].yards;
        document.getElementById("p3h8yards").innerHTML = "Yards: " + model.course.holes[7].tee_boxes[0].yards;
        document.getElementById("p3h9yards").innerHTML = "Yards: " + model.course.holes[8].tee_boxes[0].yards;
        document.getElementById("p3h10yards").innerHTML = "Yards: " + model.course.holes[9].tee_boxes[0].yards;
        document.getElementById("p3h11yards").innerHTML = "Yards: " + model.course.holes[10].tee_boxes[0].yards;
        document.getElementById("p3h12yards").innerHTML = "Yards: " + model.course.holes[11].tee_boxes[0].yards;
        document.getElementById("p3h13yards").innerHTML = "Yards: " + model.course.holes[12].tee_boxes[0].yards;
        document.getElementById("p3h14yards").innerHTML = "Yards: " + model.course.holes[13].tee_boxes[0].yards;
        document.getElementById("p3h15yards").innerHTML = "Yards: " + model.course.holes[14].tee_boxes[0].yards;
        document.getElementById("p3h16yards").innerHTML = "Yards: " + model.course.holes[15].tee_boxes[0].yards;
        document.getElementById("p3h17yards").innerHTML = "Yards: " + model.course.holes[16].tee_boxes[0].yards;
        document.getElementById("p3h18yards").innerHTML = "Yards: " + model.course.holes[17].tee_boxes[0].yards;
    }
    if (tee == 0 && player == 4) {
        document.getElementById("player4totalyards").innerHTML = model.course.tee_types[0].yards;
        document.getElementById("p4f9yards").innerHTML = "Yards: " + model.course.tee_types[0].front_nine_yards;
        document.getElementById("p4b9yards").innerHTML = "Yards: " + model.course.tee_types[0].back_nine_yards;
        document.getElementById("p4h1yards").innerHTML = "Yards: " + model.course.holes[0].tee_boxes[0].yards;
        document.getElementById("p4h2yards").innerHTML = "Yards: " + model.course.holes[1].tee_boxes[0].yards;
        document.getElementById("p4h3yards").innerHTML = "Yards: " + model.course.holes[2].tee_boxes[0].yards;
        document.getElementById("p4h4yards").innerHTML = "Yards: " + model.course.holes[3].tee_boxes[0].yards;
        document.getElementById("p4h5yards").innerHTML = "Yards: " + model.course.holes[4].tee_boxes[0].yards;
        document.getElementById("p4h6yards").innerHTML = "Yards: " + model.course.holes[5].tee_boxes[0].yards;
        document.getElementById("p4h7yards").innerHTML = "Yards: " + model.course.holes[6].tee_boxes[0].yards;
        document.getElementById("p4h8yards").innerHTML = "Yards: " + model.course.holes[7].tee_boxes[0].yards;
        document.getElementById("p4h9yards").innerHTML = "Yards: " + model.course.holes[8].tee_boxes[0].yards;
        document.getElementById("p4h10yards").innerHTML = "Yards: " + model.course.holes[9].tee_boxes[0].yards;
        document.getElementById("p4h11yards").innerHTML = "Yards: " + model.course.holes[10].tee_boxes[0].yards;
        document.getElementById("p4h12yards").innerHTML = "Yards: " + model.course.holes[11].tee_boxes[0].yards;
        document.getElementById("p4h13yards").innerHTML = "Yards: " + model.course.holes[12].tee_boxes[0].yards;
        document.getElementById("p4h14yards").innerHTML = "Yards: " + model.course.holes[13].tee_boxes[0].yards;
        document.getElementById("p4h15yards").innerHTML = "Yards: " + model.course.holes[14].tee_boxes[0].yards;
        document.getElementById("p4h16yards").innerHTML = "Yards: " + model.course.holes[15].tee_boxes[0].yards;
        document.getElementById("p4h17yards").innerHTML = "Yards: " + model.course.holes[16].tee_boxes[0].yards;
        document.getElementById("p4h18yards").innerHTML = "Yards: " + model.course.holes[17].tee_boxes[0].yards;
    }
    if (tee == 1 && player == 1) {
        document.getElementById("player1totalyards").innerHTML = model.course.tee_types[1].yards;
        document.getElementById("p1f9yards").innerHTML = "Yards: " + model.course.tee_types[1].front_nine_yards;
        document.getElementById("p1b9yards").innerHTML = "Yards: " + model.course.tee_types[1].back_nine_yards;
        document.getElementById("p1h1yards").innerHTML = "Yards: " + model.course.holes[0].tee_boxes[1].yards;
        document.getElementById("p1h2yards").innerHTML = "Yards: " + model.course.holes[1].tee_boxes[1].yards;
        document.getElementById("p1h3yards").innerHTML = "Yards: " + model.course.holes[2].tee_boxes[1].yards;
        document.getElementById("p1h4yards").innerHTML = "Yards: " + model.course.holes[3].tee_boxes[1].yards;
        document.getElementById("p1h5yards").innerHTML = "Yards: " + model.course.holes[4].tee_boxes[1].yards;
        document.getElementById("p1h6yards").innerHTML = "Yards: " + model.course.holes[5].tee_boxes[1].yards;
        document.getElementById("p1h7yards").innerHTML = "Yards: " + model.course.holes[6].tee_boxes[1].yards;
        document.getElementById("p1h8yards").innerHTML = "Yards: " + model.course.holes[7].tee_boxes[1].yards;
        document.getElementById("p1h9yards").innerHTML = "Yards: " + model.course.holes[8].tee_boxes[1].yards;
        document.getElementById("p1h10yards").innerHTML = "Yards: " + model.course.holes[9].tee_boxes[1].yards;
        document.getElementById("p1h11yards").innerHTML = "Yards: " + model.course.holes[10].tee_boxes[1].yards;
        document.getElementById("p1h12yards").innerHTML = "Yards: " + model.course.holes[11].tee_boxes[1].yards;
        document.getElementById("p1h13yards").innerHTML = "Yards: " + model.course.holes[12].tee_boxes[1].yards;
        document.getElementById("p1h14yards").innerHTML = "Yards: " + model.course.holes[13].tee_boxes[1].yards;
        document.getElementById("p1h15yards").innerHTML = "Yards: " + model.course.holes[14].tee_boxes[1].yards;
        document.getElementById("p1h16yards").innerHTML = "Yards: " + model.course.holes[15].tee_boxes[1].yards;
        document.getElementById("p1h17yards").innerHTML = "Yards: " + model.course.holes[16].tee_boxes[1].yards;
        document.getElementById("p1h18yards").innerHTML = "Yards: " + model.course.holes[17].tee_boxes[1].yards;
    }
    if (tee == 1 && player == 2) {
        document.getElementById("player2totalyards").innerHTML = model.course.tee_types[1].yards;
        document.getElementById("p2f9yards").innerHTML = "Yards: " + model.course.tee_types[1].front_nine_yards;
        document.getElementById("p2b9yards").innerHTML = "Yards: " + model.course.tee_types[1].back_nine_yards;
        document.getElementById("p2h1yards").innerHTML = "Yards: " + model.course.holes[0].tee_boxes[1].yards;
        document.getElementById("p2h2yards").innerHTML = "Yards: " + model.course.holes[1].tee_boxes[1].yards;
        document.getElementById("p2h3yards").innerHTML = "Yards: " + model.course.holes[2].tee_boxes[1].yards;
        document.getElementById("p2h4yards").innerHTML = "Yards: " + model.course.holes[3].tee_boxes[1].yards;
        document.getElementById("p2h5yards").innerHTML = "Yards: " + model.course.holes[4].tee_boxes[1].yards;
        document.getElementById("p2h6yards").innerHTML = "Yards: " + model.course.holes[5].tee_boxes[1].yards;
        document.getElementById("p2h7yards").innerHTML = "Yards: " + model.course.holes[6].tee_boxes[1].yards;
        document.getElementById("p2h8yards").innerHTML = "Yards: " + model.course.holes[7].tee_boxes[1].yards;
        document.getElementById("p2h9yards").innerHTML = "Yards: " + model.course.holes[8].tee_boxes[1].yards;
        document.getElementById("p2h10yards").innerHTML = "Yards: " + model.course.holes[9].tee_boxes[1].yards;
        document.getElementById("p2h11yards").innerHTML = "Yards: " + model.course.holes[10].tee_boxes[1].yards;
        document.getElementById("p2h12yards").innerHTML = "Yards: " + model.course.holes[11].tee_boxes[1].yards;
        document.getElementById("p2h13yards").innerHTML = "Yards: " + model.course.holes[12].tee_boxes[1].yards;
        document.getElementById("p2h14yards").innerHTML = "Yards: " + model.course.holes[13].tee_boxes[1].yards;
        document.getElementById("p2h15yards").innerHTML = "Yards: " + model.course.holes[14].tee_boxes[1].yards;
        document.getElementById("p2h16yards").innerHTML = "Yards: " + model.course.holes[15].tee_boxes[1].yards;
        document.getElementById("p2h17yards").innerHTML = "Yards: " + model.course.holes[16].tee_boxes[1].yards;
        document.getElementById("p2h18yards").innerHTML = "Yards: " + model.course.holes[17].tee_boxes[1].yards;
    }
    if (tee == 1 && player == 3) {
        document.getElementById("player3totalyards").innerHTML = model.course.tee_types[1].yards;
        document.getElementById("p3f9yards").innerHTML = "Yards: " + model.course.tee_types[1].front_nine_yards;
        document.getElementById("p3b9yards").innerHTML = "Yards: " + model.course.tee_types[1].back_nine_yards;
        document.getElementById("p3h1yards").innerHTML = "Yards: " + model.course.holes[0].tee_boxes[1].yards;
        document.getElementById("p3h2yards").innerHTML = "Yards: " + model.course.holes[1].tee_boxes[1].yards;
        document.getElementById("p3h3yards").innerHTML = "Yards: " + model.course.holes[2].tee_boxes[1].yards;
        document.getElementById("p3h4yards").innerHTML = "Yards: " + model.course.holes[3].tee_boxes[1].yards;
        document.getElementById("p3h5yards").innerHTML = "Yards: " + model.course.holes[4].tee_boxes[1].yards;
        document.getElementById("p3h6yards").innerHTML = "Yards: " + model.course.holes[5].tee_boxes[1].yards;
        document.getElementById("p3h7yards").innerHTML = "Yards: " + model.course.holes[6].tee_boxes[1].yards;
        document.getElementById("p3h8yards").innerHTML = "Yards: " + model.course.holes[7].tee_boxes[1].yards;
        document.getElementById("p3h9yards").innerHTML = "Yards: " + model.course.holes[8].tee_boxes[1].yards;
        document.getElementById("p3h10yards").innerHTML = "Yards: " + model.course.holes[9].tee_boxes[1].yards;
        document.getElementById("p3h11yards").innerHTML = "Yards: " + model.course.holes[10].tee_boxes[1].yards;
        document.getElementById("p3h12yards").innerHTML = "Yards: " + model.course.holes[11].tee_boxes[1].yards;
        document.getElementById("p3h13yards").innerHTML = "Yards: " + model.course.holes[12].tee_boxes[1].yards;
        document.getElementById("p3h14yards").innerHTML = "Yards: " + model.course.holes[13].tee_boxes[1].yards;
        document.getElementById("p3h15yards").innerHTML = "Yards: " + model.course.holes[14].tee_boxes[1].yards;
        document.getElementById("p3h16yards").innerHTML = "Yards: " + model.course.holes[15].tee_boxes[1].yards;
        document.getElementById("p3h17yards").innerHTML = "Yards: " + model.course.holes[16].tee_boxes[1].yards;
        document.getElementById("p3h18yards").innerHTML = "Yards: " + model.course.holes[17].tee_boxes[1].yards;
    }
    if (tee == 1 && player == 4) {
        document.getElementById("player4totalyards").innerHTML = model.course.tee_types[1].yards;
        document.getElementById("p4f9yards").innerHTML = "Yards: " + model.course.tee_types[1].front_nine_yards;
        document.getElementById("p4b9yards").innerHTML = "Yards: " + model.course.tee_types[1].back_nine_yards;
        document.getElementById("p4h1yards").innerHTML = "Yards: " + model.course.holes[0].tee_boxes[1].yards;
        document.getElementById("p4h2yards").innerHTML = "Yards: " + model.course.holes[1].tee_boxes[1].yards;
        document.getElementById("p4h3yards").innerHTML = "Yards: " + model.course.holes[2].tee_boxes[1].yards;
        document.getElementById("p4h4yards").innerHTML = "Yards: " + model.course.holes[3].tee_boxes[1].yards;
        document.getElementById("p4h5yards").innerHTML = "Yards: " + model.course.holes[4].tee_boxes[1].yards;
        document.getElementById("p4h6yards").innerHTML = "Yards: " + model.course.holes[5].tee_boxes[1].yards;
        document.getElementById("p4h7yards").innerHTML = "Yards: " + model.course.holes[6].tee_boxes[1].yards;
        document.getElementById("p4h8yards").innerHTML = "Yards: " + model.course.holes[7].tee_boxes[1].yards;
        document.getElementById("p4h9yards").innerHTML = "Yards: " + model.course.holes[8].tee_boxes[1].yards;
        document.getElementById("p4h10yards").innerHTML = "Yards: " + model.course.holes[9].tee_boxes[1].yards;
        document.getElementById("p4h11yards").innerHTML = "Yards: " + model.course.holes[10].tee_boxes[1].yards;
        document.getElementById("p4h12yards").innerHTML = "Yards: " + model.course.holes[11].tee_boxes[1].yards;
        document.getElementById("p4h13yards").innerHTML = "Yards: " + model.course.holes[12].tee_boxes[1].yards;
        document.getElementById("p4h14yards").innerHTML = "Yards: " + model.course.holes[13].tee_boxes[1].yards;
        document.getElementById("p4h15yards").innerHTML = "Yards: " + model.course.holes[14].tee_boxes[1].yards;
        document.getElementById("p4h16yards").innerHTML = "Yards: " + model.course.holes[15].tee_boxes[1].yards;
        document.getElementById("p4h17yards").innerHTML = "Yards: " + model.course.holes[16].tee_boxes[1].yards;
        document.getElementById("p4h18yards").innerHTML = "Yards: " + model.course.holes[17].tee_boxes[1].yards;
    }
}
//////// Sets Tee and displays on page. Calls loadPar(tee, player), loadHCP(tee, player), and loadYards(tee, player).
function teeSelect(choice) {
    // 0 - white -men -yards:543 - model.course.holes[0].tee_boxes[0]
    // 1 - red -women -yards:499 - model.course.holes[0].tee_boxes[1]
    scoringEnabled=true;
    /// Men's Tee select
    if(choice==0 && playerChoice==1) { player1tee=0; document.getElementById("p1teeselect").innerHTML = "White Tee "; loadPar(0, 1); loadHCP(0, 1); loadYards(0, 1); }
    if(choice==0 && playerChoice==2) { player2tee=0; document.getElementById("p2teeselect").innerHTML = "White Tee "; loadPar(0, 2); loadHCP(0, 2); loadYards(0, 2); }
    if(choice==0 && playerChoice==3) { player3tee=0; document.getElementById("p3teeselect").innerHTML = "White Tee "; loadPar(0, 3); loadHCP(0, 3); loadYards(0, 3); }
    if(choice==0 && playerChoice==4) { player4tee=0; document.getElementById("p4teeselect").innerHTML = "White Tee "; loadPar(0, 4); loadHCP(0, 4); loadYards(0, 4); }
    /// Women's Tee select
    if(choice==1 && playerChoice==1) { player1tee=1; document.getElementById("p1teeselect").innerHTML = "Red Tee "; loadPar(1, 1); loadHCP(1, 1); loadYards(1, 1); }
    if(choice==1 && playerChoice==2) { player2tee=1; document.getElementById("p2teeselect").innerHTML = "Red Tee "; loadPar(1, 2); loadHCP(1, 2); loadYards(1, 2); }
    if(choice==1 && playerChoice==3) { player3tee=1; document.getElementById("p3teeselect").innerHTML = "Red Tee "; loadPar(1, 3); loadHCP(1, 3); loadYards(1, 3); }
    if(choice==1 && playerChoice==4) { player4tee=1; document.getElementById("p4teeselect").innerHTML = "Red Tee "; loadPar(1, 4); loadHCP(1, 4); loadYards(1, 4); }
}
//////// Access Token
function onload() {

    numOfPlayers(1);

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
//////// AJAX request for Swing by Swing API.
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            model = JSON.parse(xhttp.responseText);
            var long = model.course.location;

            //var hole1location = model.course.holes[0].green_location;
            //var tee1location = model.course.holes[0].tee_boxes[0].location;
//            var hole1MiddleLat = (tee1location.lat + hole1location.lat)/2;
//            var hole1MiddleLng = (tee1location.lng + hole1Latlng.lng)/2;
//            var hole1MiddleLatLng = {"lat":hole1MiddleLat, "lng":hole1MiddleLng};
            initMap(long);

            //// Display Course Name
            document.getElementById("coursename").innerHTML = model.course.name;

        }
    };
    xhttp.open("GET", "https://api.swingbyswing.com/v2/courses/"+48222+"?includes=practice_area,nearby_courses,recent_media,recent_comments,recent_rounds,best_rounds,current_rounds,course_stats_month,course_stats_year&access_token=" + accessToken, true);
    xhttp.send();
}
////////
function initMap(center, holeLoc, teeLoc) {
    //if(center==null){return}
    var map = new google.maps.Map(document.getElementById('map'), {
        disableDefaultUI:true,
        zoom: 17,
        center: center,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });
    var holemarker = new google.maps.Marker({
        position: holeLoc,
        map: map,
        title: 'Hole',
        icon: 'flagmarker.png'
    });
    var teemarker = new google.maps.Marker({
        position: teeLoc,
        animation:google.maps.Animation.BOUNCE,
        map: map,
        title: 'Tee',
        icon: 'teemarker.png'
    });


    //bound = new google.maps.LatLngBounds();
    //bound.extend(holeLoc);
    //bound.extend(teeLoc);
    //map.fitBounds(bound);


}
function setMarkers(num, player){
    if(scoringEnabled==true){
        if(num==0){
            holeLoc=model.course.holes[0].green_location;
            if(player==1) {
                if(player1tee==0){teeLoc=model.course.holes[0].tee_boxes[0].location;}
                if(player1tee==1){teeLoc=model.course.holes[0].tee_boxes[1].location;}
                var center={'lat': ((holeLoc.lat+teeLoc.lat)/2), 'lng': ((holeLoc.lng+teeLoc.lng)/2) };
                initMap(center, holeLoc, teeLoc);
            }
        }
        if(num==1){ holeLoc=model.course.holes[1].green_location; }
        if(num==2){ holeLoc=model.course.holes[2].green_location; }
        if(num==3){ holeLoc=model.course.holes[3].green_location; }
        if(num==4){ holeLoc=model.course.holes[4].green_location; }
        if(num==5){ holeLoc=model.course.holes[5].green_location; }
        if(num==6){ holeLoc=model.course.holes[6].green_location; }
        if(num==7){ holeLoc=model.course.holes[7].green_location; }
        if(num==8){ holeLoc=model.course.holes[8].green_location; }
        if(num==9){ holeLoc=model.course.holes[9].green_location; }
        if(num==10){ holeLoc=model.course.holes[10].green_location; }
        if(num==11){ holeLoc=model.course.holes[11].green_location; }
        if(num==12){ holeLoc=model.course.holes[12].green_location; }
        if(num==13){ holeLoc=model.course.holes[13].green_location; }
        if(num==14){ holeLoc=model.course.holes[14].green_location; }
        if(num==15){ holeLoc=model.course.holes[15].green_location; }
        if(num==16){ holeLoc=model.course.holes[16].green_location; }
        if(num==17){ holeLoc=model.course.holes[17].green_location; }
    }
}
