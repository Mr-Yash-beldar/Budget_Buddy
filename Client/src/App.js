
import LandingPage from './components/LandingPage.js'
import Login from './components/Login/Login.js';
import "./index.css"; 
import Register from './components/Register/Register.js';
import Dashboard from './components/Dash/Dashboard';
import Expenses from './components/Expences/ExpencesDash';
import Savings from './components/savings/SavingDash';
import History from './components/History/HistoryDash';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
  <>

         
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route exact path="/expenses" element={<Expenses/>}/>
          <Route exact path="/savings" element={<Savings/>}/>
          <Route exact path="/history" element={<History/>}/>
          {/* <Route path="/logout" element={<History/>}/> */}
        </Routes>

       

  
  </>
  );
}


export default App;
