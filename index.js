class Calculator{
    constructor(){
        this.operationMap = new Map([
            ["+",(val1,val2)=>{ valZ+val2 }]
        ]);
        this.equationInput = document.getElementById("equation-input");
        this.lastInputVal = ""; // Holds the last button pressed
        this.isNumber = false; // Will determine if last value as a number
        this.numbers = document.querySelectorAll('.number');
    }

    runCalculator=()=>{
        this.numbers.forEach((num)=>{
            num.addEventListener('click',(e)=>{
                console.log(e.target.value)
            })
        });
        this.equationInput.addEventListener("input",(e)=>{
            // Need to input multidigit value, so need to wait till an operator is pressed
            // Pop the last character in the input to see what to do
            console.log(this.operationMap.get(e.target.value));
            if(parseInt(e.target.value)){
                // If last value input was number, then multidigit number
                // Save the current value input
                this.lastInputVal += e.target.value;
                this.isNumber=true;
            }
            else if(this.operationMap.get(e.target.value)){
                // If is an operation, and let it be known there is an operation
            }

            

        });
    }

    
}

let calculator = new Calculator();
calculator.runCalculator();

