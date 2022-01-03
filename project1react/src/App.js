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
// import {Balance, Header, IncomeAndExpense, AddTransaction,History} from './Components/SlefPractice/SelfPractice/index'
// import {UseContext} from './Components/SlefPractice/SelfPractice/Context/UseContext'


// Cart Reducer
// import {Navbar, CartContainer} from './Components/SlefPractice/PracticeReducerCart/index'
// import {UseContext} from './Components/SlefPractice/PracticeReducerCart/Context/UseContext'


// Router
// import {Route, Routes} from 'react-router-dom';
// import {Home, About, Error, Navbar, SingleCocktail} from './Components/SlefPractice/TheSearchBoxCocktail/index';
// import {UseContext} from './Components/SlefPractice/TheSearchBoxCocktail/Components/Context/UseContext'


// self Practice Resturant
import {Resturant} from './Components/SlefPractice/Resturant/Resturant'


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
        {/* <Header/>
        <UseContext>
        <Balance/>
        <IncomeAndExpense/>
        <AddTransaction/>
        <History/>
        </UseContext> */}

{/* Cart Application useReducer */}
      {/* <UseContext>
        <Navbar/>  
        <CartContainer/>
       </UseContext> */}

  
    {/*  The Start of cocktail project and where we do use the search function via useState 
    we add the dynamic at the end of like this ${url}${seacrhItem} /}
      {/* <Navbar/>
        <UseContext>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Error/>} />
        <Route path="/cocktail/:id" element={<SingleCocktail/>} />t
      </Routes>
      </UseContext> */}

   <Resturant/>
    </div>
  ); 
}

export default App;
