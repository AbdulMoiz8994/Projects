// we make class which helps us to create an objects an dwe use multiple time as much as required and we define before the constructed
class calculatordata {
    constructor(previousoperandElements, currentoperandElements) {
        this.previousoperandElements = previousoperandElements;
        this.currentoperandElements = currentoperandElements;
    }

    clear() {
        this.previousoperandElements.innerHTML = '';
        this.currentoperandElements.innerHTML = '';
    }
    // we slice method here which start from 0 end  depends on condtion if last one from an array then -1
    deleteitem() {
        this.currentoperandElements.innerHTML = this.currentoperandElements.innerHTML.slice(0, -1);
        if (this.currentoperandElements.innerHTML.length == 0) {
            this.previousoperandElements.innerHTML = this.previousoperandElements.innerHTML.slice(0, -1)
        }

    }

    addNumber(number) {
        // console.log(this.previousoperandElements.innerHTML);
        if (number === '.' && this.currentoperandElements.innerHTML.includes('.')) return;
        this.currentoperandElements.innerHTML = this.currentoperandElements.innerHTML + number
        this.previousoperandElements.innerHTML = this.previousoperandElements.innerHTML + number
    }

    addOperations(operationsItem) {
        // console.log(operationsItem);
        if (this.currentoperandElements.innerHTML === '') return;
        this.previousoperandElements.innerHTML = this.currentoperandElements.innerHTML + operationsItem
        this.currentoperandElements.innerHTML = ''
        this.operation = operationsItem
        // console.log(this.operation);
    }
    calculatorResult() {
        let calculate;
        const prevNub = parseFloat(this.previousoperandElements.innerHTML);
        const currNub = parseFloat(this.currentoperandElements.innerHTML);
        // console.log(typeof currNub, typeof prevNub);
        // if(isNaN(prevNub) || isNaN(currNub))return;
        // console.log(typeof this.operation);
        switch (this.operation) {
            case '+':
                calculate = prevNub + currNub
                break;
            case '-':
                calculate = prevNub - currNub
                break;
            case '*':
                calculate = prevNub * currNub
                break;
            case '/':
                calculate = prevNub / currNub
                break;
            default:
                return
        }
        this.currentoperandElements.innerHTML = calculate;
        // this.previousoperandElements.innerHTML='';
        this.operation = undefined
    }


}


// get all the elements  via  dom  attribute data-
const dataoperand = document.querySelectorAll('[data-operand]');
const dataoperations = document.querySelectorAll('[data-operations]');
const dataclearAll = document.querySelector('[data-clear-All]');
const datadelete = document.querySelector('[data-delete]');
const dataresult = document.querySelector('[data-result]');
const previousoperand = document.querySelector('[data-previous-operand]');
const currentoperand = document.querySelector('[data-current-operand]');
// console.log(dataresult);
// constructed
const calculator = new calculatordata(previousoperand, currentoperand);

dataoperand.forEach((eachoperand) => {
    eachoperand.addEventListener('click', () => {
        calculator.addNumber(eachoperand.innerHTML)
    })
})

dataoperations.forEach((operations) => {
    operations.addEventListener('click', () => {
        calculator.addOperations(operations.innerHTML)
    })
})
dataclearAll.addEventListener('click', () => {
    calculator.clear()
})

datadelete.addEventListener('click', () => {
    calculator.deleteitem()
})

dataresult.addEventListener('click', () => {
    calculator.calculatorResult()
})