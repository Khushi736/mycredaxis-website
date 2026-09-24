import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
// Niche diye gaye pages aapke folder structure ke according hain. 
// Jab aap in files ko banayenge, tab in comments ko hata dijiyega.
// import Individuals from './pages/Individuals';
// import Business from './pages/Business';
// import Partners from './pages/Partners';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans antialiased text-gray-900 bg-white">
        
        {/* Global Header jo har page par top par rahega */}
        <Header />

        {/* Main Content Area */}
        {/* 'flex-grow' use kiya hai taaki page content kam hone par bhi footer bottom me rahe */}
        <main className="flex-grow pt-20"> 
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Future Routes (inhe un-comment karein jab pages ready ho jayein) */}
            {/* <Route path="/individuals" element={<Individuals />} /> */}
            {/* <Route path="/business" element={<Business />} /> */}
            {/* <Route path="/partners" element={<Partners />} /> */}
            
            {/* 404 Not Found Fallback */}
            <Route 
              path="*" 
              element={
                <div className="flex items-center justify-center h-[60vh] text-2xl font-bold text-gray-500">
                  404 - Page Not Found
                </div>
              } 
            />
          </Routes>
        </main>

        {/* Global Footer jo har page ke bottom par aayega */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;