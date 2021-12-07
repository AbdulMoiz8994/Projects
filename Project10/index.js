class Calculator {
    constructor(previousTextElements, currentTextElements) {
        this.previousTextElements = previousTextElements;
        this.currentTextElements = currentTextElements;
        //  this.clear()
    }
    // these all are  instance methods of class
    clear() {
        this.currentTextElements.innerHTML = '';
        this.operations = undefined;
    }

    delete() {
        this.currentTextElements.innerHTML = this.currentTextElements.innerHTML.slice(0, -1)
    }
    appendNumber(number) {
        if (number === '.' && this.currentTextElements.innerHTML.includes('.')) return;
        // if above condition will true it will retrun null we have written 
        // and if one condition becocme false then below code will run and parse "." dot 
        // these string will concat 1+1 != 2, it will return 11
        this.currentTextElements.innerHTML = this.currentTextElements.innerHTML + number
    }
    chooseoperation(operation) {
        if (this.currentTextElements.innerHTML === '') return;
        // we are stroing the value inside the of this.operation properties/object
        this.operations = operation
        this.previousTextElements.innerHTML = this.currentTextElements.innerHTML + operation;
        this.currentTextElements.innerHTML = ''

    }

    compute() {
        // parseFlaot covert the into string and convert into floating number
        // parseInt convet string into number and nnot give point nub
        let computation;
        const prev = parseInt(this.previousTextElements.innerHTML);
        const curr = parseInt(this.currentTextElements.innerHTML);
        //   console.log(typeof prev,typeof curr);
        if (isNaN(prev) || isNaN(curr)) return;
        switch (this.operations) {
            case '+':
                computation = prev + curr
                break;
            case '-':
                computation = prev - curr
                break;
            case '*':
                computation = prev + curr
                break;
            case '/':
                computation = prev / curr
                break;
            default:
                return;
        }
        this.currentTextElements.innerHTML=computation 
        this.previousTextElements.innerHTML=''
       this.operations=undefined;
    }

}



const number = document.querySelectorAll('[data-number]');
const operation = document.querySelectorAll('[data-operation]');
const delbtn = document.querySelector('[data-delete]');
const clearAll = document.querySelector('[data-clear-all]');
const result = document.querySelector('[data-equals]');
const previousvalue = document.querySelector('[data-previous-operand]');
const currentvalue = document.querySelector('[data-current-operand]');


const createCalcute = new Calculator(previousvalue, currentvalue);


number.forEach(button => {
    console.log(button.innerText);
    button.addEventListener('click', () => {
        createCalcute.appendNumber(button.innerText);
    })
})


operation.forEach(operationITem => {
    operationITem.addEventListener('click', () => {
        createCalcute.chooseoperation(operationITem.innerHTML);
    })
})

clearAll.addEventListener('click', () => {
    createCalcute.clear();
})

delbtn.addEventListener('click', () => {
    createCalcute.delete()
})

result.addEventListener('click', () => {
    createCalcute.compute();
})