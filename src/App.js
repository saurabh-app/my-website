import React from 'react';
import Header from './layouts/Header';
import MainLayout from './layouts/MainLayout';
import Footer from './layouts/Footer';

function App() {
  return (
    <div>
      <Header/>
      <MainLayout>
        {/* Your content here */}
      </MainLayout>
      <Footer/>
    </div>
  );
}

export default App;
