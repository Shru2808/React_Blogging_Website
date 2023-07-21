// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Form from "./components/Form";
import {
  BrowserRouter as Router,Route,Routes
} from 'react-router-dom';
import Details from "./components/Details";
function App() {
  return (
    <>
    <Router>
    <Navbar title="Interview Help"/>
  
    <Routes>
    <Route path="/search" element={<Card/>}/>
    <Route path="/" element={<Form/> }/>
    <Route path="/details" element={<Details/> }/>
    </Routes>
   
    </Router>
    {/* <Form /> */}
    </>
  );
}

export default App;
