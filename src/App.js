import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from './Home';
import ReadUser from './ReadUser';
import UpdateUser from './UpdateUser';
function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/readUser/:id' element={<ReadUser />} />
        <Route path='/updateUser/:id' element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;
