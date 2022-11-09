

var hh = 00;
var mm = 00;
var ss = 00;

var tempo = 1000;
var cron;

function start() {
    cron = setInterval(() => { timer(); }, tempo);
}

function pause() {
    clearInterval(cron);
}

function stop() {
    clearInterval(cron);
    hh = 00;
    mm = 00;
    ss = 00;

    document.getElementById("h1").innerText = '00:00:00';
}

function timer() {
    ss++;

    if (ss == 60) {
        ss= 0;
        mm++;
    }

    if (mm == 60) {
        mm = 0;
        hh++;
    }


    var format = (hh < 10 ? '0' + hh : hh) + ":" + (mm < 10 ? '0' + mm : mm) + ":" + (ss < 10 ? '0' + ss : ss);
    document.getElementById("h1").innerText = format;
}