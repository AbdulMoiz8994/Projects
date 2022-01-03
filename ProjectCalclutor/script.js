class Calculator{
  constructor(previousValue, currentValue){
      this.previousValue=previousValue;
      this.currentValue=currentValue; 
  }
//   clear All data in one time
  clear(){
      this.currentValue.innerHTML='';
      this.previousValue.innerHTML='';
      this.operations=null;
    //   console.log(this.operations);
  }
//   delete one number from last
  delete(){
    this.currentValue.innerHTML= this.currentValue.innerHTML.slice(0, -1);
  }

// appendNumber
appendNumber(number){
    // console.log(number);
    if(number === '.' && this.currentValue.innerHTML.includes("."))return
    this.currentValue.innerHTML=this.currentValue.innerHTML + number
}
// operation perfrom
 chooseOperation(operationSign){
      this.operations=operationSign
    //   console.log(this.operations);
    if(this.currentValue.innerHTML === '')return
    this.previousValue.innerHTML=this.currentValue.innerHTML + this.operations;
    this.currentValue.innerHTML=''
 }  
//  compute
compute(){
   let computation; 
  const prev=parseFloat(this.previousValue.innerHTML); 
  const curr=parseFloat(this.currentValue.innerHTML);
//   console.log(prev, curr);
  if(isNaN(prev) || isNaN(curr))return;
  switch(this.operations){
      case "+":
      computation=prev+curr;
      break;
      case "-":
         computation=prev-curr;
         break;
       case "*":
         computation=prev*curr;   
         break;
       case "/":
           computation=prev / curr;
           break;
      default:
          return;
  }
//   console.log(computation);
    this.currentValue.innerHTML=computation;
    this.previousValue.innerHTML='';
    this.operations=null;
}
}

// get elements
const previousValue=document.getElementById("previousValue");
const currentValue=document.getElementById("currentValue");
const data_Clear_All_btn=document.querySelector("[data-Clear-All]");
const data_clear_one_btn=document.querySelector("[data-clear-one]");
const data_operand=document.querySelectorAll("[data-operand]");
const data_operation=document.querySelectorAll("[data-operation]");
const data_result=document.querySelector("[data-result]");

// create an instance of object of this Calculator
const calObj=new Calculator(previousValue, currentValue);

data_operand.forEach((operationNumber) =>{
     operationNumber.addEventListener('click',() =>{
        calObj.appendNumber(operationNumber.innerHTML)
     })
})
data_operation.forEach((operationSign) =>{
      operationSign.addEventListener('click',() =>{
          calObj.chooseOperation(operationSign.innerHTML)
      })
})
data_Clear_All_btn.addEventListener('click', () =>{
       calObj.clear()
})
data_clear_one_btn.addEventListener('click',() =>{
    calObj.delete()
})
data_result.addEventListener('click', () =>{
    calObj.compute()
})


// console.log(data_operand);