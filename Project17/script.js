const currencyOne=document.getElementById("currency-one");
const currencyTwo=document.getElementById("currency-two");
const amount1=document.getElementById("amount1");
const amount2=document.getElementById("amount2");
const btnSwap=document.querySelector("#swap");
const rate=document.querySelector("#rate");


function calculate(){
   const countryOne=currencyOne.value;
   const countryTwo=currencyTwo.value;    
//    console.log(countryOne, countryTwo);
     fetch(`https://v6.exchangerate-api.com/v6/a43d02c063c1303f1c06c071/pair/${countryOne}/${countryTwo}`)
     .then(res => res.json()).then(data =>{
        //  console.log(data);
         const result=data.conversion_rate;
         rate.innerHTML=`1 ${countryOne} = ${result} ${countryTwo}`;

        //  we have both apporach this one and below
        const amount1ValRes=(+amount1.value * result).toFixed(2);
        const value=+amount1.value > 0 ? `${amount1ValRes}` : `${result}`
          
        // rate.innerHTML=`${amount1.value} ${countryOne} = ${value} ${countryTwo}`
          
// Second Option with Better formatting
  // The Intl.NumberFormat object() enables/allows language sensitive number formatting
//   const amount2Res= new Intl.NumberFormat('en-US',{style:'currency', currency: currencyTwo.value}).format((+amount1.value * result).toFixed(2));
//   console.log(amount2Res);

  amount2.value=`${currencyTwo.value} ${value}`;
})
}

btnSwap.addEventListener('click',() =>{
    // assign the currenyOne to temp variable 
    const temp=currencyOne.value
    // copy currency two Code to CurrencyOne Value
    currencyOne.value=currencyTwo.value
    // copy currencyOne code from temp to currencyTwo
    currencyTwo.value=temp;

    calculate();

})



currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change',calculate);
amount1.addEventListener('input',calculate);
amount2.addEventListener('input',calculate);


calculate()
