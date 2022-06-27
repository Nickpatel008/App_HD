import './Assets/CSS/style.css'
import  MainSection  from './components/MainSection/index'
import  SignUp  from './components/SignUp/index'

import 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">

     <Routes>
      <Route path='/' element={<MainSection />}></Route>
      <Route path='/signUp' element={<SignUp />}></Route>
     </Routes>

    </div>
  );
}

export default App;
