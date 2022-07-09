import DonutMaker from "./DonutMaker";


const donuts = document.querySelector("#number-Donuts");
const donutsMaker = document.querySelector("#donut-maker-button");

const autoClicker = document.querySelector("#autoClicker");
const clickerButton = document.querySelector("#auto-clicker-button");

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

resetGame.addEventListener("click", ()=> {
  numDonuts = 0;
  numAutoClickers = 0;
  autoClickerCost = 10;
  multiplier = 1;
  numMultiplier= 0;
  numMultliplierCost =10;
  donuts = " ";
});


function autoDonutClicker(){
  numDonut += autoRate;
  donuts.innerHTML = `${numDonut}`;

}

window.setInterval(function() {
autoDonutClicker();
donuts.innerHTML = `${numDonut}`;
}, 1000);





// const container = (document.querySelector('.container'));
// container.innerText = 'mmmmmmmmm doughnuts.... ahhhhhhh!  wow !';
