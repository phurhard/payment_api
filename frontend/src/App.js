import React from 'react';
import InitializePayment from './components/InitializePayment';
import VerifyPayment from './components/VerifyPayment';

const App = () => {
  return (
    <div>
      <h1>Payment App</h1>
      <InitializePayment />
      <VerifyPayment />
    </div>
  );
};

export default App;
