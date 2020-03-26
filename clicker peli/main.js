var moneycount = 0;
var autoClick = 0;
var costAutoClick = 0;

function update()    { 
    document.getElementById('text').value = moneycount;
    document.title = moneycount + " moneys";
    document.getElementById('amountAutoClick').innerHTML = "You Own " + autoClick +" Auto Clickers";
    document.getElementById('costAutoClick').innerHTML = (autoClick+1) * 12 +" moneys";
}

function timer() {
    moneycount = moneycount + autoClick;
    update()
}
setInterval(timer, 1000);

function add() {
    moneycount = moneycount + 1;
    update()
}

function save() {
    localStorage.setItem("moneycount", moneycount);
    localStorage.setItem("autoClick", autoClick);
}

  function load() {
    cookiecount = localStorage.getItem("moneycount");
    cookiecount = parseInt(moneycount);
    autoClick = localStorage.getItem("autoClick");
    autoClick = parseInt(autoClick);
    update()
}

function buyAutoClick() {
    if (moneycount >= ((autoClick+1) * 12)) {
    moneycount = moneycount - ((autoClick+1) * 12);
    autoClick = autoClick + 1;
    update()
    }
}