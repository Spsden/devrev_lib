import './App.css';
import Home from './pages/HomePage/home';

import Login from './pages/LoginPage/login';
import Signup from './pages/SignupPage/signup';
import { Routes ,Route} from 'react-router-dom';
function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={  <Login/>} />
    <Route path="/signup" element={   <Signup/>} />
    {/* <Route path="/user" element={   <User/>} /> */}
  </Routes>
  );
}

export default App;

