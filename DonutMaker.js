

class DonutMaker{

    constructor(){
        this.numDonuts = 0;
        this.numAutoClickers = 0;
        this.autoClickerCost = 10;
        this.multiplier = 1;
        this.numMultiplier= 0;
        this.numMultliplierCost =10;
        
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


    addDonut() {
        this.numDonuts += this.multiplier;
    }

    addAutoClicker() {
    
       for (let i = 0; i < this.numAutoClickers; i ++ ){
        this.autoClickerCost += this.autoClickerCost * 0.1;
        }
        if(this.numDonuts >= 10){
        this.numDonuts -= this.autoClickerCost;
        this.numAutoClickers += 1;
      }
    }

    addMultipliers(){
        for (let i = 0; i < this.multiplier; i ++ ){
            this.numMultliplierCost += this.numMultliplierCost * 0.1;
            }
         if(this.numDonuts >= 10){
           this.numDonuts -= this.numMultliplierCost;
           this.numMultliplier += 1;
         }
    }

    autoClickerUpdate(){
        const numClicker = document.querySelector("#auto-clicker");
        const clickerCost =document.querySelector("#clicker-cost");
        numClicker.innerText = this.numAutoClickers;
        this.autoClickerCost =this.autoClickerCost * 1.1;
        clickerCost.innerText = Math.round(this.autoClickerCost);
    }

    donutMuliplierUpdate(){
        const numberMultiplier = document.querySelector("#donut-multiplier");
        const multliplierCost = document.querySelector("#multiplier-cost");
        const numberPerClick = document.querySelector("#number-per-click");

        numberMultiplier.innerText = this.numMultiplier;
        numberPerClick.innerText = Math.round(this.multiplier);
        this.numMultliplierCost = this.multliplierCost * 1.1;
        multliplierCost.innerText = Math.round(this.multliplierCost);
    }

    donutCountUpdate(){
        const numberOfDonuts = document.querySelector("#number-donuts");
        numberOfDonuts.innerText = Math.round(this.numDonuts);
    }

     // (this.numDonuts >= 100){
        // this.numDonuts -= 100;
        // this.numAutoClickers += 1;
        // }

    // addAutoClicker() {
    //     if (this.numDonuts >= 100) {
    //        this.numDonuts -= 100;
    //        this.numAutoClickers += 1;
    //        this.autoClickerCost = Math.round(this.autoClickerCost * 1.1);
    //     }
    // }

    


}

export default DonutMaker;