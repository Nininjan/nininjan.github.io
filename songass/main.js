//Array med items
var text = ["please", "rock", "hate", "dance", "heart", "slow", "meet", "smile", "shake", "run", 
"night", "good", "down", "small", "beautiful", "go", "stay", "forever", "queen", "crazy", "eyes", 
"phone", "sweet", "bad", "one", "back", "bad", "broken", "burn", "somebody", "sorry", "song", "sugar", 
"have", "together", "need", "roses", "love", "dj", "life", "world", "kiss", "face", "worry", "friend", 
"fire", "memory", "photograph", "house", "you", "me", "I", "baby", "hell", "work", "marry", "happy", 
"man", "play", "cry", "yeah", "feel", "girl", "take", "never", "die", "away", "break", "give", "time", 
"day", "again", "breathe", "let", "get", "fire", "don't", "lonely", "we", "fuck", "kill", "cocaine", 
"violets", "only", "believe", "lie", "party", "it's", "psycho", "why", "think", "hard", "if", "come", "home",
"our", "touch", "say", "find",
"jag", "du", "tankar", "känslor", "ont", "vill", "röra", "över", "dör", "upp", "allt"];

console.log(text); //Om man vill se hur många items arrayen har från början

var n = 0; //Skapar en variabel för att timern inte ska kunna startas utan att föregående tid har tickat klart

//Funktion som är kopplat till en knapp som sätter igång en timer och slumpar fram ett item från arrayen
function random() { 
    if (n == 0) { //Om n har värdet 0, kör nedanstående kod:
        n = 1; //När koden körs så ändras variabeln n till 1

        var randomNumber = text[Math.floor(Math.random() * text.length)]; // Tar fram ett random ord
        var output = document.querySelector("#texter"); 
        output.innerHTML = [randomNumber]; // Skriver ut itemet som matchar randomiserat tal

        //Tar bort itemet som matchar random nummer från arrayen
        var index = text.indexOf(randomNumber);
        if (index > -1) {
            text.splice(index, 1);
        }

        console.log(text); //Om man vill se arrayen minska item

        //Om arrayen är tom:
        if (text.length == 0) {
            output.innerHTML = "Slut på ord, det är färdigspelat :(";
        }

        var time = 10;
        var timer = setInterval (tic, 1000)
        
        //Funktion som startar timer    
        function tic() {
            if (time <= 0) { //Om tiden löper ut så stoppas timern
                clearInterval(timer); 
                document.getElementById("countdown").innerHTML = "STOPP";
                n = 0; //När tiden gått ut så ändras variabeln n till 0 igen för att funktionen ska kunna köras igen
            } 
            else { //Annars fortsätter tiden ticka ner
                document.getElementById("countdown").innerHTML = time;
            }
        time -= 1; //Tiden minskar medd en sekund i taget
        }
    }
}

//Funktion kopplat till en knapp som laddar om sidan och nollställer allt
function reset() {
    location.reload();
}

var rules = "active";
function regler() {
    if (rules == "active") { //Om reglerna är aktiva:
        document.getElementById("regler").style.display = "block"; //Visa reglerna
        rules = "inactive"; //Och gör dem inaktiva
    }
    else if (rules == "inactive") { //Om reglerna är inaktiva:
        document.getElementById("regler").style.display = "none"; //Dölj reglerna 
        rules = "active"; //Gör regler aktiva igen, så de kan visas nästa gång knappen trycks
    }
}

count1 = 5;
count2 = 5;
count3 = 5;
count4 = 5;
count5 = 5;
count6 = 5;
count7 = 5;
count8 = 5;

//Funktion för spelaren som uppnår 10p först
function winner() {
    for(i = 0; i < 150; i++) { //Körs 150 gånger
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let pos = Math.floor(Math.random() * 500);
        let fetti = document.createElement("div"); //Skapar konfettidivar
        fetti.style.position = "absolute";
        fetti.style.height = 15 + "px";
        fetti.style.width = 15 + "px";
        fetti.style.background = "rgb(" + x + "," + y + "," + z + ")"; //Får random färger
        fetti.style.left = Math.floor(Math.random() * 100) + "vw"; //Får random positioner sidled
        fetti.style.top = pos + "vh"; //Får random positioner i höjdled
        fetti.style.transform = "rotate(" + (360* Math.random()) + "deg"; //Får även olika vinklar
        document.body.appendChild(fetti);
        let move = setInterval(down, 1);
        //När vinnarfunktionen körs så ska konfettin singla nedåt
        function down () {
            if (pos >= 500) { //Vid 500px så försvinner konfettin
                clearInterval(move);
                fetti.remove();
            }
            else {
                pos += 1; //Så länge konfettin inte nått 500px i höjdled, ska de fortsätta falla ner
                fetti.style.top = pos + "px";
            }
        }
    }
}

//Funktion som körs om en spelare åker ut ur spelet
function loser() {
    for (j = 0; j < 100; j++) { //Körs 100 gånger
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let pos = Math.floor(Math.random() * 500);
        let gubbar = document.createElement("p"); //Skapar paragrafer 
        gubbar.innerText = "☹" //...innehållandes en ledsen gubbe
        gubbar.style.fontSize = 30 + "px";
        gubbar.style.position = "absolute";
        gubbar.style.color = "rgb(" + x + "," + y + "," + z + ")"; //Får random färger
        gubbar.style.left = Math.floor(Math.random() * 100) + "vw"; //Får random positioner sidled
        gubbar.style.top = pos + "vh"; //Får random positioner i höjdled
        document.body.appendChild(gubbar);
        let flytta = setInterval(ner, 1); 
        //När förlorarfunktionen körs så ska de ledsna gubbarna singla nedåt
        function ner() {
            if (pos >= 500) { //Vid 500px så försvinner gubbarna
                clearInterval(flytta);
                gubbar.remove();
            }
            else {
                pos += 1; //Så länge gubbarna inte nått 500px i höjdled, ska de fortsätta falla ner
                gubbar.style.top = pos + "px";
            }
        }
    }
}

//Funktion som ökar poängen
function plus1() {
    var namn1 = document.getElementById("namn1").value;
    count1 += 1; //Poängen ökar med 1p för varje knapptryck
    document.getElementById("points1").value = count1;
    if (count1 == 10) { //Om poängen uppnår 10 så triggas vinnarfunktionen igång
        winner();
        alert("Grattis " + namn1 + " du vann!") //En alert körs även ut som grattar vinnaren
    }
}
//Funktion som minskar poängen
function minus1() {
    var namn1 = document.getElementById("namn1").value;
    count1 -= 1; //Poängen minskar med varje knapptryck
    document.getElementById("points1").value = count1;
    if (count1 == 0) { //Om poängen minskar till 0 så triggas förlorarfunktionen igång
        loser();
        alert("Tyvärr " + namn1 + " du har åkt ut ur spelet"); //En alert körs även ut som meddelar att spelaren har åkt ut ur spelet
    }
}

//Nedanstående funktioner är likadana som de två ovanför, bara för andra knappar/spelare

function plus2() {
    var namn2 = document.getElementById("namn2").value;
    count2 += 1;
    document.getElementById("points2").value = count2;
    if (count2 == 10) {
        winner();
        alert("Grattis " + namn2 + " du vann!")
    } 
}

function minus2() {
    var namn2 = document.getElementById("namn2").value;
    count2 -= 1;
    document.getElementById("points2").value = count2;
    if (count2 == 0) {
        loser();
        alert("Tyvärr " + namn2 + " du har åkt ut ur spelet");
    }
}

function plus3() {
    var namn3 = document.getElementById("namn3").value;
    count3 += 1;
    document.getElementById("points3").value = count3;
    if (count3 == 10) {
        winner();
        alert("Grattis " + namn3 + " du vann!")
    }
}

function minus3() {
    var namn3 = document.getElementById("namn3").value;
    count3 -= 1;
    document.getElementById("points3").value = count3;
    if (count3 == 0) {
        loser();
        alert("Tyvärr " + namn3 + " du har åkt ut ur spelet");
    }
}

function plus4() {
    var namn4 = document.getElementById("namn4").value;
    count4 += 1;
    document.getElementById("points4").value = count4;
    if (count4 == 10) {
        winner();
        alert("Grattis " + namn4 + " du vann!")
    }
}

function minus4() {
    var namn4 = document.getElementById("namn4").value;
    count4 -= 1;
    document.getElementById("points4").value = count4;
    if (count4 == 0) {
        loser();
        alert("Tyvärr " + namn4 + " du har åkt ut ur spelet");
    }
}

function plus5() {
    var namn5 = document.getElementById("namn5").value;
    count5 += 1;
    document.getElementById("points5").value = count5;
    if (count5 == 10) {
        winner();
        alert("Grattis " + namn5 + " du vann!")
    }
}

function minus5() {
    var namn5 = document.getElementById("namn5").value;
    count5 -= 1;
    document.getElementById("points5").value = count5;
    if (count5 == 0) {
        loser();
        alert("Tyvärr " + namn5 + " du har åkt ut ur spelet");
    }
}

function plus6() {
    var namn6 = document.getElementById("namn6").value;
    count6 += 1;
    document.getElementById("points6").value = count6;
    if (count6 == 10) {
        winner();
        alert("Grattis " + namn6 + " du vann!")
    }
}

function minus6() {
    var namn6 = document.getElementById("namn6").value;
    count6 -= 1;
    document.getElementById("points6").value = count6;
    if (count6 == 0) {
        loser();
        alert("Tyvärr " + namn6 + " du har åkt ut ur spelet");
    }
}

function plus7() {
    var namn7 = document.getElementById("namn7").value;
    count7 += 1;
    document.getElementById("points7").value = count7;
    if (count7 == 10) {
        winner();
        alert("Grattis " + namn7 + " du vann!")
    }
}

function minus7() {
    var namn7 = document.getElementById("namn7").value;
    count7 -= 1;
    document.getElementById("points7").value = count7;
    if (count7 == 0) {
        loser();
        alert("Tyvärr " + namn7 + " du har åkt ut ur spelet");
    }
}

function plus8() {
    var namn8 = document.getElementById("namn8").value;
    count8 += 1;
    document.getElementById("points8").value = count8;
    if (count8 == 10) {
        winner();
        alert("Grattis " + namn8 + " du vann!")
    }
}

function minus8() {
    var namn8 = document.getElementById("namn8").value;
    count8 -= 1;
    document.getElementById("points8").value = count8;
    if (count8 == 0) {
        loser();
        alert("Tyvärr " + namn8 + " du har åkt ut ur spelet");
    }
}



