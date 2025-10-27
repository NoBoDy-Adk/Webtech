import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";  
import { Button, Nav, Navbar } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';




function Welcome(props) {
  
  return <h1>Hello, {props.name}</h1>;
}

function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <h2>🏠 Home Page</h2>
      <p>This is the home page</p>
    </div>
  );
}

function About() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <h2>ℹ️ About Page</h2>
      <p>This is the about page</p>
    </div>
  );
}

function Contact() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <h2>📞 Contact Page</h2>
      <p>Email: contact@example.com</p>
      <p>Phone: 123-456-7890</p>
    </div>
  );
}



function Counter(props) {
  const [count, setCount] = useState(0);
  useEffect(() => { 
    console.log('useEffect');
    console.log(count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button className='btn' onClick={() => setCount(count + 1)}>Increment</button>
      <button className='btn' onClick={() => setCount(count - 1)}>Decrement</button>
      <button className='btn' onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}


function App() {

  return (

      
    <div className="App">
       <Router>
        <Navbar style={{ padding: "10px", background: "#eee", display: "flex", justifyContent: "space-around" }}>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Navbar>
              
    
      <header className="App-header">
      <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>

       <Welcome name="John"></Welcome>

       <Counter></Counter>
       <Counter></Counter>
       
      </header>
      </Router>
    </div>
  );
}

export default App;
