function update()    { 
    document.getElementById('text').value = moneycount;
    document.title = moneycount + " moneys";
    document.getElementById('amountAutoClick').innerHTML = "You Own " + autoClick +" Auto Clickers";
    document.getElementById('costAutoClick').innerHTML = ((autoClick+1)) * 5 +" moneys";
    document.getElementById('farmCount').innerHTML = "You Own " + farmCount +" farms";
    document.getElementById('costFarm').innerHTML = ((farmCount+1) * 10) +" moneys";
}

var moneycount = 0;
var autoClick = 0;
var costAutoClick = 0;
var farmCount = 0;

function timer() {
    moneycount = moneycount + autoClick;
    moneycount = moneycount + farmCount*2;
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
    localStorage.setItem("farmCount", farmCount);
}

  function load() {
    moneycount = localStorage.getItem("moneycount");
    moneycount = parseInt(moneycount);
    autoClick = localStorage.getItem("autoClick");
    autoClick = parseInt(autoClick);
    farmCount = localStorage.getItem("farmCount");
    farmCount = parseInt(farmCount);
    update()
}

function buyAutoClick() {
    if (moneycount >= ((autoClick+1) * 5)) {
    moneycount = moneycount - ((autoClick+1) * 5);
    autoClick = autoClick + 1;
    update()
    }
}

function buyFarm() {
    if (moneycount >= ((farmCount+1) * 10)) {
    moneycount = moneycount - ((farmCount+1) * 10);
    farmCount = farmCount + 1;
    update()
    }
}