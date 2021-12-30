const months=[
    'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const weekDays=[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

// get all dom elements
const giveaway=document.getElementsByClassName('giveaway');
const dealine=document.getElementsByClassName('dealine');
const dealineformat=document.querySelectorAll('.dealine-format h4');
// console.log(giveaway);
// console.log(dealine);
// console.log(dealineformat);



let tempDate=new Date();
let  tempYear=tempDate.getFullYear();
let  tempMonth=tempDate.getMonth();
let  tempDay=tempDate.getDay();
// console.log(tempDate);
// console.log(tempYear,tempMonth,tempDay);


let futureDate=new Date(tempYear,tempMonth, tempDay + 5, 12,30,0)
// we will get the output Sat Dec 11 2021 12:30:00 
// it will depend on day and keep update as time and day changes
// console.log(futureDate);

const year=futureDate.getFullYear();
const month=futureDate.getMonth();
const hours=futureDate.getHours();
const minutes=futureDate.getMinutes();
const date=futureDate.getDate();
const day=futureDate.getDay()
// console.log(year,month,hours,minutes);

// the month satrt from 0 goes to 11
// we get the number from the months year and days 
// but we want proper day name in string so we make an array and pass to the real in the real Date day[weekdays]
const getMonths=months[month]
// console.log(getMonths);
const getWeekDays=weekDays[day]
// console.log(getWeekDays);
giveaway[0].textContent=`Giveaway Ends on ${getWeekDays},${date} ${getMonths} ${year} ${date}:${minutes} am`;

// we are starting the desecding order timing and get the remaning time


const futureTime=futureDate.getTime()
// console.log(futureTime);
function getRemaningTime(){
const todayTime= new Date().getTime();
// console.log(time);  

const totaltime=futureTime -todayTime
// console.log(totaltime);

// get the Day minute seconds
const oneDay=24*60*60*1000;
const onehour=60*60*1000;
const onemint=60*1000

// console.log(onehour);
// remainig total days
let days= totaltime/oneDay
days= Math.floor(days)
// console.log(days);
// get hours
let hours= (totaltime % oneDay)  / onehour;
hours=Math.floor(hours)
let mints= (totaltime % onehour) / onemint
mints=Math.floor(mints)
// console.log(mints);
// get seconds
let seconds= Math.floor((totaltime % onemint)/ 1000)
// console.log(seconds);


// set the format
const values=[days,hours,mints,seconds];
const format=(item) =>{
    // console.log(item);
   if(item < 10){
       return (item=`0${item}`)
   }else{
       return item
   }
}
dealineformat.forEach((item,index) =>{
    // console.log(item, index);
    item.innerHTML=format(values[index])

})
 if(totaltime < 0){
     clearInterval(countDown)
    dealine.innerHTML=`<h2>sorry, this give away has expired!</h2>`
 }
}
const countDown= setInterval(getRemaningTime,1000);

