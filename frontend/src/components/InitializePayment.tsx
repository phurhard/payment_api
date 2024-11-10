import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const InitializePayment: React.FC = () => {
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');
    const [name, setName] = useState('');
    const [response, setResponse] = useState<any>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const callback_url = `http://localhost:3000/verify-payment`;
            const res = await fetch('http://localhost:5000/api/paystack/initialize', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, amount: parseInt(amount), name, callback_url }),
            });
            if (res.ok) {
                const data = await res.json();
                if (data?.data?.authorizationUrl) {
                    const redirectUrl = `${data.data.authorizationUrl}`;
                    window.location.href = redirectUrl;
                } else {
                    console.error('Unexpected response structure:', data);
                    setResponse({ error: 'Unexpected response structure' });
                }
            } else {
                console.error('Failed to initialize payment:', res.statusText);
                setResponse({ error: 'Failed to initialize payment' });
            }
        } catch (error) {
            console.error('Error initializing payment:', error);
            setResponse({ error: 'Failed to initialize payment' });
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-left">Initialize Payment</h2>
                            <p className="card-text">Please fill in the details below to initialize your payment.</p>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                                </div>
                                <div className="form-group mb-3">
                                    <input type="number" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
                                </div>
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Initialize Payment</button>
                            </form>
                            {response && <div className="mt-3 alert alert-info">{JSON.stringify(response)}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InitializePayment;
