

class DonutMaker{

    constructor(){
        this.numDonuts = 0;
        this.numAutoClickers = 0;
        this.autoClickerCost = 100;
        this.multiplier = 1;
        this.numMultiplier= 0;
        this.numMultiplierCost =20;
        
    }

    getNumDonuts(){
        return this.numDonuts;
    }
    getNumAutoClicker(){
        return this.numAutoClickers;
    }
    
    getMultiplier(){
        return this.multiplier
    }
    getNumMultiplier(){
        return this.numMultiplier;
    }
   

    addDonut() {
        this.numDonuts += this.multiplier;
    }

    addAutoClicker() {
    
       for (let i = 0; i < this.numAutoClickers; i ++ ){
        this.autoClickerCost += this.autoClickerCost * 0.1;
        }
        if(this.numDonuts >= this.autoClickerCost){
        this.numDonuts -= this.autoClickerCost;
        this.numAutoClickers += 1;
         }
    }

     autoClickerUpdate(){
        const numClicker = document.querySelector("#auto-clicker");
        const clickerCost = document.querySelector("#clicker-cost");
        numClicker.innerText = this.numAutoClickers;
        this.autoClickerCost =this.autoClickerCost * 1.1;
        clickerCost.innerText = Math.round(this.autoClickerCost);
    }

    addMultipliers(){
        for (let i = 0; i < this.numMultiplier; i ++ ){
            this.numMultiplierCost += this.numMultiplierCost * 0.1;
            }
         if(this.numDonuts >= this.numMultiplierCost){
           this.numDonuts -= this.numMultiplierCost;
           this.numMultiplier += 1;
           
         }
    }

   
    donutMuliplierUpdate(){
        const numberMultiplier = document.querySelector("#donut-multiplier");
        const multiplierCost = document.querySelector("#multiplier-cost");
        const numberPerClick = document.querySelector("#number-per-click");

        this.numMultiplierCost = this.numMultiplierCost * 1.1;
        multiplierCost.innerText = Math.round(this.numMultiplierCost);

        numberMultiplier.innerText = this.numMultiplier;
        numberPerClick.innerText = this.numMultiplier;
    }

    donutCountUpdate(){
        const numberOfDonuts = document.querySelector("#number-donuts");
        numberOfDonuts.innerText = Math.round(this.numDonuts);
    }



}

export default DonutMaker;