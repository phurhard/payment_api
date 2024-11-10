import React from 'react';
import InitializePayment from './components/InitializePayment.tsx';
import VerifyPayment from './components/VerifyPayment.tsx';

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
