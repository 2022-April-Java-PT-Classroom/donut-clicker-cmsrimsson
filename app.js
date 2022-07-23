import DonutMaker from "./DonutMaker";

const donuts = document.querySelector("#number-Donuts");
const donutsMaker = document.querySelector("#donut-maker-button");

const clickerButton = document.querySelector("#auto-clicker-button");
const donutMultiplier = document.querySelector("#donut-multiplier-button")

const resetGame = document.querySelector("#reset-game");

const donutMaker = new DonutMaker();


donutsMaker.addEventListener("click", ()=> {
    donutMaker.addDonut();
    donutMaker.donutCountUpdate();

});

clickerButton.addEventListener("click", ()=> {
donutMaker.addAutoClicker();
donutMaker.autoClickerUpdate();
donutMaker.donutCountUpdate();
});

function autoClick() {
  for (let i = 0; i < donutMaker.numAutoClickers; i ++){
    donutMaker.addDonut();
  }
  donutMaker.donutCountUpdate();
  }
  setInterval(autoClick, 1000);


resetGame.addEventListener("click", ()=> {
  location.reload();
  donuts.innerText = 0;
});

donutMultiplier.addEventListener("click", ()=> {
  donutMaker.addMultipliers();
  donutMaker.donutMuliplierUpdate();
  donutMaker.donutCountUpdate();
});

const hideButton = document.querySelector(".hide");
const disccription = document.querySelector(".details");
hideButton.onclick = function() {
  disccription.style.display = "block";
};
const hideButton1 = document.querySelector(".hide1");
const disccription1 = document.querySelector(".details1");
hideButton1.onclick = function() {
  disccription1.style.display = "block";
};
const hideButton2 = document.querySelector(".hide2");
const disccription2 = document.querySelector(".details2");
hideButton2.onclick = function() {
  disccription2.style.display = "block";
};

const reset1 = document.querySelector("#reset");
reset1.addEventListener("click", ()=> {
  location.reload();
});
const reset2 = document.querySelector("#resetI");
reset2.addEventListener("click", ()=> {
  location.reload();
});
const reset3 = document.querySelector("#resetC");
reset3.addEventListener("click", ()=> {
  location.reload();
});


// const container = (document.querySelector('.container'));
// container.innerText = 'mmmmmmmmm doughnuts.... ahhhhhhh!  wow !';
