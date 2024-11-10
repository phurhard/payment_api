import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InitializePayment from './components/InitializePayment.tsx';
import VerifyPaymentPage from './components/VerifyPaymentPage.tsx';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Payment App</h1>
        <Routes>
          <Route path="/" element={<InitializePayment />} />
          <Route path="/verify-payment" element={<VerifyPaymentPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
