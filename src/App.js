import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CV from './components/cv';
import Footer from './components/footer';
import { LanguageProvider } from './components/languagecontext';
import './assets/app.css';

function Layout({ children }) {
  return (
    <div className="layout">
      {children}
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Header />
          <main>        
            <Route path="/" element={<Home />} />
            <Routes>
              <Route path="/cv" element={<CV />} />
            </Routes>
          </main>
          <Footer />
        </Layout>
      </Router>
    </LanguageProvider>
  );
}

export default App;
