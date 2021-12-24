import './App.css';
// import Resturant from './Components/Resturant/Resturant'
// import {Todo} from './Components/TODOAPP/todo'
// import {WeatherApi} from './Components/WeatherApiProj/WeatherApi'

// slef practice
// import {Todo} from './Components/SlefPractice/index';
// import {Tour} from './Components/SlefPractice/PracticeApi/index'
// import {QuestionAns} from './Components/SlefPractice/QuestionAns/index'

// covid 19 Application
// import {Cards} from './Components/SlefPractice/Covid19Application/Component/ShowData/Cards'

// expense Track
import {Balance, Header, IncomeAndExpense, AddTransaction,History} from './Components/SlefPractice/SelfPractice/index'
import {UseContext} from './Components/SlefPractice/SelfPractice/Context/UseContext'

function App() {
  return (
    <div>
      {/* <Resturant/> */}
      {/* <Todo/> */}
      {/* <WeatherApi/> */}
      {/* <h1>hello</h1> */}
      {/* <Todo/> */}
      {/* <Tour/> */}
      {/* <QuestionAns/> */}
        {/* <Cards/> */}
        <Header/>
        
        <UseContext>
        <Balance/>
        <IncomeAndExpense/>
        <AddTransaction/>
        <History/>
        </UseContext>
    </div>
  ); 
}

export default App;
