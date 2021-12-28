//get all HTML Elements Reference node
const addUser=document.querySelector("#addUser");
const doubleWealth=document.getElementById("doublewealth");
const filterMillion=document.getElementById("filterMillion");
const sortWealth=document.getElementById("sortWealth");
const addAllWealth=document.getElementById("addAllWealth");
const data=document.getElementById("data");
// console.log(data);
// console.log(addUser, doubleWealth, filterMillion, sortWealth);

// initialize the Array
let listData=[];
// we call the api via fetch and get the response and add the data;
async function getRandomData(){
    const fetchData=await fetch('https://randomuser.me/api/');
    const json=await fetchData.json();
    // console.log(json.results[0]);
    const user=json?.results[0];
    const objData={
         name:  `${user.name.title} ${user.name.first} ${user.name.last}`,
         balance: Math.floor(Math.random() * 1000000)
    };
   addUserFunc(objData)
}

function addUserFunc(user){
//    console.log(user);
   listData.push(user)
   updatedate()
}



function doubleUserWealthFunc(){
    // console.log(listData);
 listData =  listData.map((data) =>{
        return {...data, balance: data.balance * 2}
    })
    // console.log(listData);
    updatedate()
}

function getMillionareFunc(){
    // console.log(listData);
   listData=listData.filter((user) =>{
       return  user.balance > 1000000;
   });
//    console.log(listData);
   updatedate()
}

function sortWeathFunc(){
    // console.log(listData);
     listData=listData.sort((a, b) =>{
        //  console.log(b.balance - a.balance);
        //  console.log(b , a);
         return b.balance - a.balance
    })
    // console.log(listData);
    updatedate()
}


function getSumFunc(){
    console.log(listData);
const  totalBalance=listData.reduce((acc, value) =>{
      return acc +=value.balance
    },0)
    console.log(totalBalance);
    // create Element
    const divEle=document.createElement("div");
    divEle.innerHTML= `<strong> TOTAL Sum: ${totalBalance}</strong>`
    data.appendChild(divEle)
}


function formatNumber(number){
    console.log(number);
return number.toFixed(2)
}


function updatedate(userData=listData){
    // clear Previous UI, this is now show us multiple time same User
    data.innerHTML=`<h2><strong>User</strong> Wealth</h2>`
     // run the forEach array method loop through userData 
    userData.forEach((user) =>{
        // make the Ui and Div 
        const div=document.createElement("div");
        div.classList.add("nestedDiv");
        div.innerHTML=`<strong>${user.name}</strong> : ${formatNumber(user.balance)}`          
        data.appendChild(div) 
    });
};


addUser.addEventListener('click', getRandomData);
doubleWealth.addEventListener('click', doubleUserWealthFunc);
filterMillion.addEventListener('click',getMillionareFunc);
sortWealth.addEventListener('click', sortWeathFunc);
addAllWealth.addEventListener('click', getSumFunc);



getRandomData();
getRandomData();
getRandomData();
getRandomData();