
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './componants/Register'
import Login from './componants/Login'
import './App.css';
import AllUser from './componants/AllUser';
function App() {
 

  return (
    <>
  <BrowserRouter>
  <Routes>

    <Route path ='/register' element={<Register></Register>}></Route>
    <Route path ='/login' element={<Login></Login>}></Route>
    <Route path ='/AllUsers' element={<AllUser></AllUser>}></Route>
    
  </Routes>
  
  
  </BrowserRouter>


    </>
    
  )
}

export default App
