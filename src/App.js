import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/index';
import Home from './components/Home';
import CV from './components/cv';
import Footer from './components/footer';
import { LanguageProvider } from './components/languagecontext';
import './assets/App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
             <Route path="/cv" element={<CV />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
