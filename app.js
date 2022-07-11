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



// const container = (document.querySelector('.container'));
// container.innerText = 'mmmmmmmmm doughnuts.... ahhhhhhh!  wow !';
