import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Calculator from './components/calculator';
import Header from './components/Header';
import Home from './components/Home';
import Quotes from './components/Quotes';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Header" element={<Header />} />
            <Route path="/quote" element={<Quotes />} />
          </Routes>
        </Router>
        <Calculator />
      </>

    );
  }
}

export default App;
