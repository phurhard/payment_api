import React, { useState } from 'react';

const InitializePayment: React.FC = () => {
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');
    const [name, setName] = useState('');
    const [response, setResponse] = useState<any>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const callback_url = `http://localhost:3001/verify-payment`;
            const res = await fetch('http://localhost:5000/api/paystack/initialize', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, amount: parseInt(amount), name, callback_url }),
            });
            if (res.ok) {
                const data = await res.json();
                if (data && data.data && data.data.authorizationUrl) {
                    window.location.href = data.data.authorizationUrl;
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
        <div>
            <h2>Initialize Payment</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                <button type="submit">Initialize Payment</button>
            </form>
            {response ? <div>{JSON.stringify(response)}</div> : <div>No response received yet.</div>}
        </div>
    );
};

export default InitializePayment;
