

class DonutMaker{

    constructor(){
        this.numDonuts = 0;
        this.numAutoClickers = 0;
        this.autoClickerCost = 100;
        this.multiplier = 1;
        this.numMultiplier= 0;
        this.numMultliplierCost =20;
        
    }

    getNumDonuts(){
        return this.numDonuts;
    }
    getNumAutoClicker(){
        return this.numAutoClickers;
    }
    getAutoClickerCost(){
        return this.autoClickerCost;
    }
    getMultiplier(){
        return this.multiplier
    }
    getNumMultiplier(){
        return this.numMultiplier;
    }
    getNumMultiplierCost(){
    return this.numMultliplierCost;
    }


    addDonut() {
        this.numDonuts += 1;
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
        const clickerCost =document.querySelector("#clicker-cost");
        numClicker.innerText = this.numAutoClickers;
        this.autoClickerCost =this.autoClickerCost * 1.1;
        clickerCost.innerText = Math.round(this.autoClickerCost);
    }

    addMultipliers(){
        for (let i = 0; i < this.numMultiplier; i ++ ){
            this.numMultliplierCost += this.numMultliplierCost * 0.1;
            }
         if(this.numDonuts >= this.numMltliplierCost){
           this.numDonuts -= this.numMultliplierCost;
           this.numMultliplier += 1;
         }
    }

   
    donutMuliplierUpdate(){
        const numberMultiplier = document.querySelector("#donut-multiplier");
        const multliplierCost = document.querySelector("#multiplier-cost");
        const numberPerClick = document.querySelector("#number-per-click");

        numberMultiplier.innerText = this.numMultiplier;
        numberPerClick.innerText = Math.round(this.numMultiplier);
        this.numMultliplierCost = this.numMultliplierCost * 1.1;
        multliplierCost.innerText = Math.round(this.numMultliplierCost);
    }

    donutCountUpdate(){
        const numberOfDonuts = document.querySelector("#number-donuts");
        numberOfDonuts.innerText = Math.round(this.numDonuts);
    }



}

export default DonutMaker;