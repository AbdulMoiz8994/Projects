
const calculateTemp=()=>{
        const numberTemp=document.getElementById('temp')      
        console.log(+numberTemp.value);
        const option=document.getElementById('temp_diff');
        //    const valueTemp=temp_diff.options; //from this we can get all optiosn from the selct tag
        // const valueTemp=temp_diff.options[option.selectedIndex]; //from this, we can get the specific html  tag which we selected  from select option tag. .value we get the html;

const celToFah=(inputTemp) =>{
   let fehrenhit= Math.round((inputTemp *9/5)+32);
   return fehrenhit
}
const fehToCel=(inputTemp) =>{
    let celcious= Math.round((inputTemp -32)* 5/9);
    return celcious
 }

       let result;
       if(option.value === 'cel'){
           result=celToFah(+numberTemp.value);
           document.getElementById('value').innerHTML=`= ${result}Fah`
       }else{
           result=fehToCel(numberTemp.value);
           document.getElementById('value').innerHTML=`= ${result}Cel`
       } 
}