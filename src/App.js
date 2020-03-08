import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MyJsHeader from './Components/Header/MyJsHeader.js';

function App() {
  return (
      <div>
          <Header />
          <Footer />
          <MyJsHeader />
      </div>
  );
}

export default App;
