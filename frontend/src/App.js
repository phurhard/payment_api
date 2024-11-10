import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InitializePayment from './components/InitializePayment.tsx';
import VerifyPaymentPage from './components/VerifyPaymentPage.tsx';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Payment App</h1>
        <Switch>
          <Route path="/" exact component={InitializePayment} />
          <Route path="/verify-payment" component={VerifyPaymentPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
