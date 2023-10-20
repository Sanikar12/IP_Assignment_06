
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './routes/home';
import Contact1 from './routes/contacts';
import Greet1 from './routes/greet';
import Service from './routes/sanika';
function App() {
  return (
   <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path = '/contact' element={<Contact1/>}> </Route>
        <Route path = '/greet' element={<Greet1/>}> </Route>
        <Route path = '/service' element={<Service/>}></Route>
      </Routes>
      </Router>
  //  <Router>
  //   <Routes>

  //   <Route path='/' element={<prof/>}></Route>
  //   </Routes>
  //  </Router>
  );
}

export default App;
