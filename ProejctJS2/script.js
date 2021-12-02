
const calculateTemp=()=>{
        const numberTemp=document.getElementById('temp')      
        console.log(+numberTemp.value);
        const option=document.getElementById('temp_diff');
        // console.log(option.value);

const celToFah=(inputTemp) =>{
   let fehrenhit= Math.round((inputTemp *9/5)+32);
//    console.log(fehrenhit);
   return fehrenhit
}
const fehToCel=(inputTemp) =>{
    let celcious= Math.round((inputTemp -32)* 5/9);
 //    console.log(fehrenhit);
    return celcious
 }

       let result;
       if(option.value == 'cel'){
           result=celToFah(+numberTemp.value);
           document.getElementById('value').innerHTML=`= ${result}Fah`
       }else{
           result=fehToCel(numberTemp.value);
           document.getElementById('value').innerHTML=`= ${result}Cel`
       } 
}